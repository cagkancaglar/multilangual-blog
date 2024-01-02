import PaddingContainer from "../components/PaddingContainer";
import PostList from "../components/PostList";
import { MOCK_CATEGORIES, MOCK_POSTS } from "../mock/posts";

export const generateStaticParams = async () => {
  return MOCK_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
};

const Page = ({ params }: { params: { category: string } }) => {
  const category = MOCK_CATEGORIES.find(
    (category) => category.slug === params.category
  );

  const posts = MOCK_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category
  );
  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
