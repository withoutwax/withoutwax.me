import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import { ArticleMetadata } from "@/types/articles";

const root = process.cwd();

export async function getFiles(type: string): Promise<string[]> {
  return fs
    .readdirSync(path.join(root, `app/${type}/(articles)`))
    .filter((dir) =>
      fs.statSync(path.join(root, `app/${type}/(articles)`, dir)).isDirectory()
    );
}

export async function getFileBySlug(type: string, slug: string) {
  const filePath = path.join(root, `app/${type}/(articles)`, slug, `page.mdx`);
  if (!fs.existsSync(filePath)) throw new Error(`File not found: ${filePath}`);

  const source = fs.readFileSync(filePath, "utf8");
  const metadataRegex = /export const metadata = ({[\s\S]*?});/;
  const metadataMatch = source.match(metadataRegex);

  let metadata: Partial<ArticleMetadata> = {};
  if (metadataMatch) {
    try {
      metadata = eval(`(${metadataMatch[1]})`); // Be cautious when using eval
    } catch (error) {
      console.error("Error parsing metadata:", error);
    }
  }

  const content = source.replace(metadataRegex, "").trim();

  return {
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...metadata,
    },
    content,
  };
}

export async function getAllFilesFrontMatter(
  type: string
): Promise<ArticleMetadata[]> {
  const directories = fs
    .readdirSync(path.join(root, `app/${type}/(articles)`))
    .filter((dir) =>
      fs.statSync(path.join(root, `app/${type}/(articles)`, dir)).isDirectory()
    );

  const posts: ArticleMetadata[] = directories.reduce<ArticleMetadata[]>(
    (allPosts, dir) => {
      const filePath = path.join(
        root,
        `app/${type}/(articles)`,
        dir,
        `page.mdx`
      );
      if (!fs.existsSync(filePath)) return allPosts;

      const source = fs.readFileSync(filePath, "utf8");
      const metadataRegex = /export const metadata = ({[\s\S]*?});/;
      const metadataMatch = source.match(metadataRegex);

      let metadata: Partial<ArticleMetadata> = {};
      if (metadataMatch) {
        try {
          metadata = eval(`(${metadataMatch[1]})`);
        } catch (error) {
          console.error("Error parsing metadata:", error);
        }
      }

      const content = source.replace(metadataRegex, "").trim();

      if (metadata.publishedAt) {
        allPosts.push({
          ...metadata,
          wordCount: content.split(/\s+/gu).length,
          readingTime: readingTime(content),
          slug: dir,
        } as ArticleMetadata);
      }

      return allPosts;
    },
    []
  );

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
