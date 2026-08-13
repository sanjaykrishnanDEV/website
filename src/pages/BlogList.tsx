// BlogList.tsx

import { Link } from "react-router-dom";
import { posts } from "../content/utils/posts";

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-header">
        Browser Engineer's Handbook
      </h1>

      <div className="space-y-4">
        {Object.values(posts).map((post) => (
          <Link
            key={post.slug}
            to={`/posts/${post.slug}`}
            className="block border border-zinc-200/20 rounded-lg p-6 hover:bg-sidebar transition-colors"
          >
            <h2 className="text-xl font-semibold text-text">
              {post.title}
            </h2>

            <p className="text-text/60 mt-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}