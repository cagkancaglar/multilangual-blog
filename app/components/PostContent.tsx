import { ArrowRight } from "lucide-react";
import { Post } from "../types/collection";
import { getReadingTime, getRelativeDate } from "../lib/helper";

interface PostContentProps {
  post: Post;
  isPostDetailPage?: boolean;
}

const PostContent = ({ post, isPostDetailPage = false }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* tags */}
      <div
        className={`flex items-center gap-2 text-neutral-400 whitespace-nowrap flex-wrap ${
          isPostDetailPage ? "text-sm" : "text-xs @md:text-sm"
        }`}
      >
        <div
          className={`font medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* title */}
      <h2
        className={`${
          isPostDetailPage
            ? "text-2xl md:text-3xl lg:text-4xl font-bold"
            : "text-xl @md:text-2xl @lg:text-3xl font-medium"
        }`}
      >
        {post.title}
      </h2>
      {/* description */}
      <p className="text-base @lg:text-lg leading-snug text-neutral-600">
        {post.description}
      </p>
      {/* read more */}
      {!isPostDetailPage && (
        <div className="flex items-center gap-2 pt-3">
          Read more <ArrowRight size={14} />
        </div>
      )}
    </div>
  );
};

export default PostContent;
