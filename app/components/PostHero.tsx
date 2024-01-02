import Image from "next/image";
import { Post } from "../types/collection";
import PostContent from "./PostContent";

interface PostHeroProps {
  post: Post;
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div className="pt-10">
      <PostContent post={post} isPostDetailPage />
      <Image
        src={post.image}
        alt={post.title}
        width={1280}
        height={500}
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        priority
      />
    </div>
  );
};

export default PostHero;
