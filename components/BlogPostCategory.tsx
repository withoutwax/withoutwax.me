import { notionBackgroundColor, notionTextColor } from "@/lib/utils";

interface BlogPostCategoryProps {
  data: {
    select: {
      id: string;
      name: string;
      color: string;
    };
  };
  type: string;
}

const BlogPostCategory = ({ data, type }: BlogPostCategoryProps) => {
  console.log("Category Data", data);
  // if (!data || (data.select && data.select.name === "Code")) {
  //   return <></>;
  // }
  return (
    <p
      className={`${
        type === "pill" &&
        data.select &&
        notionBackgroundColor(`${data.select.color}_background`)
      } ${
        type === "pill" && data.select && notionTextColor(data.select.color)
      } ${type === "pill" && "px-2 py-1 rounded-full"}
      flex text-sm capitalize`}
    >
      {data.select && data.select.name}
    </p>
  );
};

export default BlogPostCategory;
