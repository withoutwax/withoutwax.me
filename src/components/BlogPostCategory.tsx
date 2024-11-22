import { notionBackgroundColor, notionTextColor } from '@/utils/utils';
import { BlogPostCategoryProps } from '@/types';

const BlogPostCategory = ({ data }: any) => {
  console.log('Category Data', data);
  // if (!data || (data.select && data.select.name === "Code")) {
  //   return <></>;
  // }
  return <p className={`flex text-sm capitalize`}>{data.title}</p>;
};

export default BlogPostCategory;
