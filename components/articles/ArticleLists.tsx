import ArticleListsCard from '@/components/articles/ArticleListsCard';
import * as uuid from 'uuid';
import { getBlogPosts } from '@/utils/mdx';
import { CategoryType } from '@/types/global';

export default async function ArticleLists({ type }: { type: string }) {
  const data = getBlogPosts(type);

  const posts = data.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {!posts.length
          ? 'Loading...'
          : posts.map((post) => (
              <ArticleListsCard
                key={uuid.v4()}
                title={post.metadata.title}
                publishedAt={post.metadata.publishedAt}
                description={post.metadata.description}
                image={post.metadata.image}
                category={post.metadata.category as CategoryType}
                slug={post.slug}
                route={type}
              />
            ))}
      </div>
    </>
  );
}
