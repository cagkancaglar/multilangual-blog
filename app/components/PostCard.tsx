import { Post } from "../types/collection";
import Link from "next/link";
import Image from "next/image";
import PostContent from "./PostContent";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <Link
      className="grid grid-cols-2 gap-10 items-center"
      href={`/post/${post.slug}`}
    >
      {/* image */}
      <Image
        className="rounded-md w-full object-cover object-center max-h-[300px]"
        src={post.image}
        width={600}
        height={300}
        alt={post.title}
        priority
      />
      {/* content */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
