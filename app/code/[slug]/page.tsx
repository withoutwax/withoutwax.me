import { getPost } from '@/utils/mdx';
import { baseUrl } from '@/app/sitemap';
import ArticleHeader from '@/components/articles/ArticleHeader';

const ROUTE_CATEGORY = 'code';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  let post = getPost({ type: ROUTE_CATEGORY, slug: slug });

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, description: description, image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${ROUTE_CATEGORY}/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { default: Post, metadata } = await import(`@/data/${ROUTE_CATEGORY}/${slug}.mdx`);

  return (
    <section className="w-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.description,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      <ArticleHeader
        title={metadata.title}
        description={metadata.description}
        publishedAt={metadata.publishedAt}
        category={metadata.category}
        slug={slug}
      />
      <article className="prose">
        <Post />
      </article>
    </section>
  );
}

export const dynamicParams = false;
