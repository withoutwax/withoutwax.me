import { CategoryType } from "@/types/articles";

const Category = ({ category }: { category: string }) => {
  let display = "";
  switch (category) {
    case "code":
      display = "Code 💻";
      break;
    case "project":
      display = "Project 🕹";
      break;
    case "archive":
      display = "Archived 📦";
      break;
    case "thoughts":
      display = "Thoughts 💭";
      break;
    case "faith":
      display = "Faith 🤲🏼";
      break;
    case "life":
      display = "Life 🏝";
      break;
    case "idea":
      display = "Idea 💡";
      break;
    default:
      display = category;
  }
  return (
    <div>
      <p className="mb-2 rounded-full text-gray-700 dark:text-gray-300">
        {display}
      </p>
    </div>
  );
};

export default Category;
