import PaddingContainer from "@/app/components/PaddingContainer";
import PostHero from "@/app/components/PostHero";
import { MOCK_POSTS } from "@/app/mock/posts";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return MOCK_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = ({ params }: { params: { slug: string } }) => {
  const post = MOCK_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <PaddingContainer>
      <PostHero post={post} />
    </PaddingContainer>
  );
};

export default Page;
