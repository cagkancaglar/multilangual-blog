import PaddingContainer from "@/app/components/PaddingContainer";
import { MOCK_POSTS } from "@/app/mock/posts";

export const generateStaticParams = async () => {
  return MOCK_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = MOCK_POSTS.find((post) => post.slug === params.slug);

  return <PaddingContainer>{post?.title}</PaddingContainer>;
};

export default Page;
