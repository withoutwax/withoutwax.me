const filterCategory = (category) => {
  switch (category) {
    case 'faith':
      return '🤲🏼';
    case 'thoughts':
      return '💭';
    case 'life':
      return '🏝';
    case 'idea':
      return '💡';
    default:
      return;
  }
};

const BlogPostCategory = ({ category }) => {
  return (
    <p className="flex text-sm capitalize text-gray-600 dark:text-gray-200">
      <span className="mr-1">{filterCategory(category)}</span>
      {category}
    </p>
  );
};

export default BlogPostCategory;
