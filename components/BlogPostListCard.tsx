import Link from "next/link";
import BlogPostCategory from "@/components/BlogPostCategory";
const BlogPostListCard = ({ data, route }: { data: any; route: string }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  console.log("Card Data", data);

  return (
    <Link
      href={`/${route}/${data.id}`}
      className="w-full rounded-md border p-4 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
    >
      <div className="w-full">
        {/* <Category category={category}></Category> */}
        <div className="flex flex-col justify-between md:flex-row">
          {/* <p className="text-gray-500">{category}</p> */}

          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl ">
            <span className="mr-1">{data.icon && data.icon.emoji}</span>
            {data.properties["Name"] && data.properties["Name"].title.length > 0
              ? data.properties["Name"].title[0].text.content
              : null}
            {data.properties["이름"] && data.properties["이름"].title.length > 0
              ? data.properties["이름"].title[0].text.content
              : null}
          </h4>
          <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
            {/* {`${views ? format(views) : '–––'} views`} */}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {data.properties["설명"].rich_text.length > 0
            ? data.properties["설명"].rich_text[0].text.content
            : null}
        </p>
        <div className="mt-4">
          <BlogPostCategory data={data.properties["분류"]} />
        </div>
      </div>
    </Link>
  );
};

export default BlogPostListCard;