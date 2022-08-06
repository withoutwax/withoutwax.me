const Category = ({ category }) => {
  let displayCategory = '';
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
    case 'thoughts':
      displayCategory = 'Thoughts 💭';
      break;
    case 'faith':
      displayCategory = 'Faith 🤲🏼';
      break;
    case 'life':
      displayCategory = 'Life 🏝';
      break;
    case 'idea':
      displayCategory = 'Idea 💡';
      break;
    default:
      displayCategory = 'Thoughts 💭';
  }
  return (
    <div>
      <p className="mb-2 rounded-full text-gray-700">{displayCategory}</p>
    </div>
  );
};

export default Category;
