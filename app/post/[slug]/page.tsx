import PaddingContainer from "@/app/components/PaddingContainer";
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
              link={`https://facebook.com/sharer/sharer.php?u=http:localhost:3000/post/${post.slug}`}
            />
            <SocialLink
              isShareURL
              platform="twitter"
              link={`https://twitter.com/intent/tweet?url=http:localhost:3000/post/${post.slug}`}
            />
            <SocialLink
              isShareURL
              platform="linkedin"
              link={`https://linkedin.com/shareArticle?mini=true&url=http:localhost:3000/post/${post.slug}`}
            />
          </div>
        </div>
        <div className="h-[1200px] bg-slate-200 w-full">Post Body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
