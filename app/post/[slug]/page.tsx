import PaddingContainer from "@/app/components/PaddingContainer";
import PostBody from "@/app/components/PostBody";
import PostHero from "@/app/components/PostHero";
import SocialLink from "@/app/components/SocialLink";
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
      <div className="flex mt-10 gap-10">
        <div className="relative">
          <div className="sticky top-20 flex flex-col gap-3">
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
            />
            <SocialLink
              isShareURL
              platform="twitter"
              link={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
            />
            <SocialLink
              isShareURL
              platform="linkedin"
              link={`https://linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
            />
          </div>
        </div>
        <PostBody body={post.body} />
      </div>
    </PaddingContainer>
  );
};

export default Page;
