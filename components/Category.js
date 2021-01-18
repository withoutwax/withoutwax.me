const Category = ({category}) => {
  let displayCategory = 'Thoughts 💭';
  switch (category) {
    case 'code':
      displayCategory = 'Code 💻';
      break;
    case 'project':
      displayCategory = 'Project 🕹';
      break;
    case 'archive':
      displayCategory = 'Archived 📦';
      break;
    default:
      displayCategory = 'Thoughts 💭';
  }
  return (
    <div>
      <p className="rounded-full text-gray-700 mb-2">
        {displayCategory}
      </p>
    </div>
  );
}

export default Category;