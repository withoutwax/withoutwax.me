
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
}


const BlogPostCategory = ({ category }) => {
  return (
    <p className="text-gray-500 capitalize flex text-sm"><span className="mr-1">{ filterCategory(category) }</span>{category}</p>
  );
};


export default BlogPostCategory;
