import { notFound } from 'next/navigation';
import { getPageSchema } from '@/data/pageSchemas';
import PagesEditor from '@/components/admin/PagesEditor';

export default async function EditPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const schema = getPageSchema(slug);
  if (!schema) notFound();
  return <PagesEditor schema={schema} />;
}
