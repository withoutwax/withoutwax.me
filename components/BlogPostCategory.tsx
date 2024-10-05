interface BlogPostCategoryProps {
  data: {
    select: {
      name: string;
    };
  };
}

const BlogPostCategory = ({ data }: BlogPostCategoryProps) => {
  console.log("Category Data", data);
  if (!data || (data.select && data.select.name === "개발 💻")) {
    return <></>;
  }
  return (
    <p className="flex text-sm capitalize text-gray-600 dark:text-gray-200">
      {data.select && data.select.name}
    </p>
  );
};

export default BlogPostCategory;
