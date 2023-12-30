import { Post } from "../types/collection";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  layout: "vertical" | "horizontal";
}

const PostList = ({ posts, layout }: PostListProps) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
