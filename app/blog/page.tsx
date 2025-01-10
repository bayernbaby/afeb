import { Metadata } from 'next';
import { getAllPosts, getSettings } from '@/sanity/lib/client';
import { BlogPostCard } from '@/components/BlogPostCard';
import { Wrapper } from '@/components/layout/wrapper';
import { toPlainText } from 'next-sanity';
import { Post } from '@/types/blog';
import { H1 } from '@/components/ui/typography';
import { styles } from '@/lib/styles'
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  return {
    title: 'Blog & Insights',
    description: settings?.description ? toPlainText(settings.description) : '',
    openGraph: {
      images: settings?.ogImage ? [settings.ogImage] : [],
    },
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts() as Post[];
  const settings = await getSettings();

  return (
    <Wrapper>
      <div className={`mx-auto py-16 ${styles.section.padding}`}>
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-end">
          <H1 size='lg'>Blog & Insights</H1>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-12 lg:gap-x-12">
          {posts.map((post) => (
            <BlogPostCard
              key={post._id}
              post={post}
              priority={posts.indexOf(post) < 2}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
