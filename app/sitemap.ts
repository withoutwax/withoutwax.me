import { promises as fs } from "fs";
import path from "path";

async function getSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const archiveDirectory = path.join(process.cwd(), "data", "archive");
  const blogDirectory = path.join(process.cwd(), "data", "blog");
  const codeDirectory = path.join(process.cwd(), "data", "code");
  const projectDirectory = path.join(process.cwd(), "data", "project");

  const archiveSlugs = await getSlugs(archiveDirectory);
  const blogSlugs = await getSlugs(blogDirectory);
  const codeSlugs = await getSlugs(codeDirectory);
  const projectSlugs = await getSlugs(projectDirectory);

  const archive = updateRoutesSlug({ route: "archive", slugs: archiveSlugs });
  const blog = updateRoutesSlug({ route: "blog", slugs: blogSlugs });
  const code = updateRoutesSlug({ route: "code", slugs: codeSlugs });
  const project = updateRoutesSlug({ route: "project", slugs: projectSlugs });

  // const blogs = blogSlugs.map((slug) => ({
  //   url: `https://withoutwax.me/blog/${slug}`,
  //   lastModified: new Date().toISOString(),
  // }));

  // const routes = updateRoutesSlug({route: 'project', slugs: projectSlugs});

  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `https://withoutwax.me${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...archive, ...blog, ...code, ...project];
}

const updateRoutesSlug = ({
  route,
  slugs,
}: {
  route: string;
  slugs: string[];
}) => {
  return slugs.map((slug: string) => ({
    url: `https://withoutwax.me/${route}${slug ? `/${slug}` : ""}`,
    lastModified: new Date().toISOString(),
  }));
};

export const baseUrl = "https://withoutwax.me";
