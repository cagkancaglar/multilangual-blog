import { MOCK_CATEGORIES, MOCK_POSTS } from "../mock/posts";

export const generateStaticParams = async () => {
  return MOCK_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
};

const Page = ({ params }: { params: { category: string } }) => {
  const posts = MOCK_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category
  );
  return <div>{JSON.stringify(posts)}</div>;
};

export default Page;
