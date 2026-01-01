import { CategoryType } from '@/types/global';

const Category = ({ category }: { category: CategoryType }) => {
  let display = '';
  switch (category) {
    case 'code':
      display = 'Code 💻';
      break;
    case 'project':
      display = 'Project 🕹';
      break;
    case 'archive':
      display = 'Archived 📦';
      break;
    case 'thoughts':
      display = 'Thoughts 💭';
      break;
    case 'faith':
      display = 'Faith 🤲🏼';
      break;
    case 'life':
      display = 'Life 🏝';
      break;
    case 'idea':
      display = 'Idea 💡';
      break;
    case 'freelance':
      display = 'Freelance 💼';
      break;
    default:
      display = category;
      break;
  }
  return <p className="rounded-full text-gray-700 dark:text-gray-300">{display}</p>;
};

export default Category;
