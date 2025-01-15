import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { getPost } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Wrapper } from '@/components/wrapper';
import { PortableText } from '@portabletext/react';
import { RecentPostCard } from '@/components/RecentPostCard';
import { Post } from '@/types/post'
import { Link } from '@/components/ui/link';
import { H1, H2, H3, P } from '@/components/ui/typography';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug) as Post;

  if (!post) {
    notFound();
  }

  return (
    <Wrapper>
      <article className={`px-4 md:px-6 lg:px-10 max-w-7xl mx-auto py-32`}>
        {/* Article Header */}
        <header className="pt-12 pb-8 md:pt-16 lg:pt-20">
          {post.categories && post.categories.length > 0 && (
            <P size="sm" className="mb-6 font-medium text-purple-600">
              {post.categories.map((cat: any) => cat.title).join(', ')}
            </P>
          )}

          <H1 className="mb-6 max-w-4xl">
            {post.title}
          </H1>

          {post.excerpt && (
            <P className="mt-6 leading-relaxed text-gray-600 max-w-4xl">
              {post.excerpt}
            </P>
          )}

          <div className="mt-10 flex items-center gap-x-4 border-t pt-6 text-gray-500">
            {post.author?.image && (
              <div className="relative h-12 w-12">
                <Image
                  src={urlForImage(post.author.image).url()}
                  alt={post.author.name || ''}
                  className="rounded-full object-cover"
                  fill
                />
              </div>
            )}
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                {post.author?.name}
              </p>
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
                </time>
              )}
            </div>
          </div>
        </header>

        {/* Main Image */}
        {post.mainImage && (
          <div className="my-12 md:my-16 aspect-[16/9] w-full overflow-hidden">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.mainImage.alt || post.title}
              width={2000}
              height={1000}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content - Update PortableText components */}
        <div className="prose prose-lg mx-auto max-w-4xl">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => <H1 className="mt-16 mb-8">{children}</H1>,
                h2: ({ children }) => <H2 className="mt-12 mb-6">{children}</H2>,
                h3: ({ children }) => <H3 className="mt-8 mb-4">{children}</H3>,
                normal: ({ children }) => (
                  <P className="mb-8 text-gray-700 leading-[2]">{children}</P>
                ),
                bullet: ({ children }) => (
                  <ul className="my-8 text-lg leading-[2] text-gray-700 list-disc pl-6">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="my-8 text-lg leading-[2] text-gray-700 list-decimal pl-6">
                    {children}
                  </ol>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="my-8 text-lg leading-[2] text-gray-700 list-disc pl-6">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="my-8 text-lg leading-[2] text-gray-700 list-decimal pl-6">
                    {children}
                  </ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => (
                  <li className="text-lg leading-[2] my-4 text-gray-700">
                    {children}
                  </li>
                ),
                number: ({ children }) => (
                  <li className="text-lg leading-[2] my-4 text-gray-700">
                    {children}
                  </li>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="text-lg font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-lg italic">
                    {children}
                  </em>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="relative my-12 aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={urlForImage(value).url()}
                      alt={value.alt || ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              },
            }}
          />
        </div>

        {/* Recent Stories Section */}
        {post.morePosts && post.morePosts.length > 0 && (
          <div className="py-16 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <H2>Recent Stories</H2>
              <Link
                href="/blog"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                View all posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {post.morePosts.slice(0, 2).map((recentPost: Post) => (
                <RecentPostCard
                  key={recentPost._id}
                  post={recentPost}
                />
              ))}
            </div>
          </div>
        )}
      </article>
    </Wrapper>
  );
}
