import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/mongodb';
import { getBlogPost, contentToEditableHtml, type BlogAuthor } from '@/lib/blog';

function revalidateBlog(slug: string) {
  try {
    revalidatePath('/actualites');
    revalidatePath(`/actualites/${slug}`);
  } catch {}
}

// GET /api/admin/blog/[slug] -> article complet (HTML editable)
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });

    // Auteur normalise en objet { name, role, avatar }
    const author: BlogAuthor =
      post.author && typeof post.author === 'object'
        ? {
            name: post.author.name || '',
            role: post.author.role || '',
            avatar: post.author.avatar || '',
          }
        : { name: (post.author as string) || '', role: '', avatar: '' };

    return NextResponse.json({
      slug: post.slug,
      title: post.title || '',
      excerpt: post.excerpt || '',
      content: contentToEditableHtml(post.content),
      coverImage: post.coverImage || post.featuredImage || '',
      featuredImage: post.featuredImage || post.coverImage || '',
      category: post.category || '',
      tags: post.tags || [],
      author,
      readTime: post.readTime ?? 5,
      published: post.published !== false,
      publishedAt: post.publishedAt
        ? new Date(post.publishedAt).toISOString()
        : null,
      meta: {
        title: post.meta?.title || '',
        description: post.meta?.description || '',
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur', details: (e as Error).message },
      { status: 500 },
    );
  }
}

// PUT /api/admin/blog/[slug] -> met a jour les champs fournis
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Body JSON invalide' }, { status: 400 });
  }

  try {
    const db = await getDb();
    const update: Record<string, unknown> = { updatedAt: new Date() };
    const setIfDefined = (key: string, value: unknown) => {
      if (value !== undefined) update[key] = value;
    };

    setIfDefined('title', body.title);
    setIfDefined('excerpt', body.excerpt);
    setIfDefined('content', body.content);
    setIfDefined('category', body.category);
    setIfDefined('tags', body.tags);
    setIfDefined('author', body.author);
    setIfDefined('readTime', body.readTime);
    setIfDefined('featuredImage', body.featuredImage);
    setIfDefined('coverImage', body.coverImage);
    setIfDefined('published', body.published);
    setIfDefined(
      'publishedAt',
      body.publishedAt ? new Date(body.publishedAt as string) : undefined,
    );
    if (body.meta && typeof body.meta === 'object') {
      const meta = body.meta as Record<string, unknown>;
      if (meta.title !== undefined) update['meta.title'] = meta.title;
      if (meta.description !== undefined) update['meta.description'] = meta.description;
    }

    const res = await db.collection('blog').updateOne({ slug }, { $set: update });
    if (res.matchedCount === 0) {
      return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
    }

    revalidateBlog(slug);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur de mise à jour', details: (e as Error).message },
      { status: 500 },
    );
  }
}

// DELETE /api/admin/blog/[slug]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  try {
    const db = await getDb();
    const res = await db.collection('blog').deleteOne({ slug });
    if (res.deletedCount === 0) {
      return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
    }
    revalidateBlog(slug);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: 'Erreur de suppression', details: (e as Error).message },
      { status: 500 },
    );
  }
}
