import { Post } from "../types/collection";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} layout={layout} />
      ))}
    </div>
  );
};

export default PostList;
