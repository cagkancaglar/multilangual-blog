import CTACard from "@/app/components/CTACard";
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
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
        {/* Post Body & Social Share */}
        <div className="flex flex-col md:flex-row mt-10 gap-10">
          <div className="relative">
            <div className="sticky top-20 flex md:flex-col gap-3 items-center">
              <div className="md:hidden font-medium">Share this content: </div>
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
        {/* CTA Card */}
        <CTACard />
      </div>
    </PaddingContainer>
  );
};

export default Page;
