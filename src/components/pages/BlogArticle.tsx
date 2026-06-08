'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Facebook,
  X,
  Linkedin,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import type { ClientPost } from '@/lib/blog';

const BlogArticle = ({
  post,
  relatedPosts,
}: {
  post: ClientPost;
  relatedPosts: ClientPost[];
}) => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'x':
        window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`);
        break;
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] min-h-[60vh] flex items-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover filter brightness-75"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/actualites"
            className="inline-flex items-center text-white hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux actualités
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#023654]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-4xl mb-16"
          >
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 bg-[#EB6718] text-white text-sm font-norwester rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-norwester mb-6 text-white leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center mb-6 pb-6 border-b border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-white/20"
              />
              <div className="ml-4">
                <h3 className="text-[#EB6718] font-norwester">{post.author.name}</h3>
                <p className="text-gray-300 text-sm">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-gray-300 text-sm">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('fr-FR') : ''}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime} min de lecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#012A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {/* Author Card */}
              <div className="bg-[#023654]/50 backdrop-blur-sm rounded-xl p-6 mb-12">
                <div className="flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-[#EB6718] font-norwester text-xl">{post.author.name}</h2>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 mb-12 border-t border-white/10 pt-8">
                <h3 className="text-xl font-norwester text-[#EB6718] mb-4">Partager l&apos;article</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
                    aria-label="Partager sur Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white group-hover:text-[#EB6718]" />
                  </button>
                  <button
                    onClick={() => handleShare('x')}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
                    aria-label="Partager sur X"
                  >
                    <X className="h-5 w-5 text-white group-hover:text-[#EB6718]" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
                    aria-label="Partager sur LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-white group-hover:text-[#EB6718]" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose-headings:text-[#EB6718] prose-headings:font-norwester prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-p:text-white prose-p:leading-relaxed prose-p:text-lg prose-strong:text-[#EB6718] prose-strong:font-bold prose-ul:text-white prose-ol:text-white prose-li:marker:text-[#EB6718] prose-li:mb-4 prose-li:text-lg [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4 [&>h4]:mt-6 [&>h4]:mb-3 prose-blockquote:border-l-4 prose-blockquote:border-[#EB6718] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:text-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex items-center flex-wrap gap-3 mt-16 border-t border-white/10 pt-8">
                <Tag className="h-5 w-5 text-[#EB6718]" />
                {post.tags.map((tag) => (
                  <Link
                    href={`/actualites?category=${tag}`}
                    key={tag}
                    className="px-4 py-2 bg-white/5 text-white rounded-full text-sm hover:bg-[#EB6718] hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-xl font-norwester text-[#EB6718] mb-4">Catégories</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    'Communication Externe',
                    'Communication Interne',
                    'Événementiel',
                    'Marketing Digital',
                    'Stratégie',
                  ].map((category) => (
                    <Link
                      key={category}
                      href={`/actualites?category=${encodeURIComponent(category)}`}
                      className="group flex items-center p-3 bg-white/5 hover:bg-[#EB6718] rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-[#EB6718] mr-2 transform group-hover:translate-x-1 transition-transform" />
                      <span className="text-white group-hover:text-white transition-colors">{category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#023654]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-norwester text-[#EB6718] mb-12 text-center">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#012A43]/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 bg-[#EB6718] text-white text-sm font-norwester rounded-full shadow-lg">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-norwester text-white mb-4 leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{relatedPost.excerpt}</p>
                  <div className="flex items-center space-x-6 text-gray-300 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {relatedPost.publishedAt
                          ? new Date(relatedPost.publishedAt).toLocaleDateString('fr-FR')
                          : ''}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{relatedPost.readTime} min de lecture</span>
                    </div>
                  </div>
                  <Link
                    href={`/actualites/${relatedPost.slug}`}
                    className="inline-flex items-center mt-6 text-[#EB6718] hover:text-white transition-colors group"
                  >
                    Lire l&apos;article
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogArticle;
