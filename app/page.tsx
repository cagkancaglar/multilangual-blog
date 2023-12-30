import PaddingContainer from "./components/PaddingContainer";
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";
import { MOCK_POSTS } from "./mock/posts";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="space-y-10 py-10">
        <PostCard post={MOCK_POSTS[0]} />
        <PostList
          posts={MOCK_POSTS.filter((_, i) => i > 0 && i < 3)}
          layout="vertical"
        />
      </main>
    </PaddingContainer>
  );
}
