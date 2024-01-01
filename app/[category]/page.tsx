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
  const posts = MOCK_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category
  );
  return (
    <PaddingContainer>
        <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
