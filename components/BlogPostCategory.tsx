interface BlogPostCategoryProps {
  data: {
    select: {
      name: string;
    };
  };
}

const BlogPostCategory = ({ data }: BlogPostCategoryProps) => {
  if (!data || data.select.name === "개발 💻") {
    return <></>;
  }
  return (
    <p className="flex text-sm capitalize text-gray-600 dark:text-gray-200">
      {data.select.name}
    </p>
  );
};

export default BlogPostCategory;
