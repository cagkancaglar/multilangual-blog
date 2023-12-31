import { Post } from "../types/collection";
import Link from "next/link";
import Image from "next/image";
import PostContent from "./PostContent";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCard = ({ post, layout = "horizontal", reverse }: PostProps) => {
  return (
    <div>
      <Link
        className={`${
          layout === "horizontal"
            ? "grid grid-cols-2 gap-10 items-center"
            : "space-y-2"
        }`}
        href={`/post/${post.slug}`}
      >
        {/* image */}
        <Image
          className={`rounded-md w-full object-cover object-center max-h-[300px] ${
            reverse ? "order-last" : ""
          }`}
          src={post.image}
          width={600}
          height={300}
          alt={post.title}
          priority
        />
        {/* content */}
        <PostContent post={post} />
      </Link>
    </div>
  );
};

export default PostCard;
