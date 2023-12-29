import PaddingContainer from "./components/PaddingContainer";
import PostCard from "./components/PostCard";
import { MOCK_POSTS } from "./mock/posts";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="space-y-10 py-10">
        <PostCard post={MOCK_POSTS[0]} />
      </main>
    </PaddingContainer>
  );
}
