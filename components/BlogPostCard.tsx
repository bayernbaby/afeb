import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { urlForImage } from '@/sanity/lib/image';
import { Post } from '@/types/post'

export function BlogPostCard({ post, priority = false }: { post: Post, priority?: boolean }) {
    return (
        <article className="group relative flex flex-col">
            <div className="relative w-full">
                <Link href={`/blog/${post.slug.current}`}>
                    <div className="aspect-[16/9] relative w-full overflow-hidden bg-gray-100">
                        {post.mainImage && (
                            <Image
                                src={urlForImage(post.mainImage.asset).url()}
                                alt={post.mainImage.alt || post.title}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                                priority={priority}
                            />
                        )}
                    </div>
                </Link>
            </div>

            <div className="flex flex-col items-start pt-4">
                {post.categories && post.categories.length > 0 && (
                    <div className="mb-2 text-sm font-medium text-purple-600">
                        {post.categories.map((cat) => cat.title).join(', ')}
                    </div>
                )}

                <Link href={`/blog/${post.slug.current}`} className="group-hover:underline">
                    <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
                </Link>

                {post.excerpt && (
                    <p className="mt-2 text-base leading-6 text-gray-600 line-clamp-2">
                        {post.excerpt}
                    </p>
                )}

                <div className="mt-4 flex items-center gap-x-4">
                    {post.author?.image && (
                        <div className="relative h-8 w-8 rounded-full">
                            <Image
                                src={urlForImage(post.author.image.asset).url()}
                                alt={post.author.name || ''}
                                className="rounded-full object-cover"
                                fill
                            />
                        </div>
                    )}
                    <div className="text-sm">
                        <p className="font-medium text-gray-900">
                            {post.author?.name}
                        </p>
                        {post.publishedAt && (
                            <time className="text-gray-500" dateTime={post.publishedAt}>
                                {format(parseISO(post.publishedAt), 'LLL d, yyyy')}
                            </time>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
