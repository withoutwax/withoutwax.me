import { notionBackgroundColor, notionTextColor } from "@/lib/utils";

interface BlogPostCategoryProps {
  data: {
    select: {
      id: string;
      name: string;
      color: string;
    };
  };
}

const BlogPostCategory = ({ data }: BlogPostCategoryProps) => {
  console.log("Category Data", data);
  // if (!data || (data.select && data.select.name === "Code")) {
  //   return <></>;
  // }
  return (
    <p
      className={`${
        data.select && notionBackgroundColor(`${data.select.color}_background`)
      } ${
        data.select && notionTextColor(data.select.color)
      } flex text-sm capitalize px-1 py-0.5 rounded-md`}
    >
      {data.select && data.select.name}
    </p>
  );
};

export default BlogPostCategory;
