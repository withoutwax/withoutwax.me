import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  category?: string;
};

function parseFrontmatter(fileContent: string) {
  const exportFrontmatterRegex = /export const metadata = ({[\s\S]*?});/;
  const yamlFrontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const metadataMatch = fileContent.match(exportFrontmatterRegex);

  let metadata: Partial<Metadata> = {};

  if (metadataMatch) {
    try {
      metadata = eval(`(${metadataMatch[1]})`);
    } catch (error) {
      console.error("Error parsing metadata:", error);
    }
  } else {
    const match = yamlFrontmatterRegex.exec(fileContent);
    if (match) {
      let frontMatterBlock = match![1];
      let frontMatterLines = frontMatterBlock.trim().split("\n");

      frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
      });
    }
  }

  let content = fileContent
    .replace(metadataMatch ? exportFrontmatterRegex : yamlFrontmatterRegex, "")
    .trim();

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(type: string) {
  return getMDXData(path.join(process.cwd(), "data", type));
}

export function getPost({ type, slug }: { type: string; slug: string }) {
  const filePath = path.join(process.cwd(), `data/${type}`, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return parseFrontmatter(fileContent);
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
