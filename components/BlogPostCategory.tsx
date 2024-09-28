const filterCategory = (category: string) => {
  switch (category) {
    case "faith":
      return "🤲🏼";
    case "thoughts":
      return "💭";
    case "life":
      return "🏝";
    case "idea":
      return "💡";
    default:
      return;
  }
};

const BlogPostCategory = (data: any) => {
  if (!data.data || data.data.select.name === "개발 💻") {
    return <></>;
  }
  return (
    <p className="flex text-sm capitalize text-gray-600 dark:text-gray-200">
      {data.data.select.name}
    </p>
  );
};

export default BlogPostCategory;
