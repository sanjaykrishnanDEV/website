import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";
import { posts } from "../content/utils/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <article className="prose dark:prose-invert mx-auto p-8">
        <h1>Post not found</h1>
      </article>
    );
  }

  return (
    <article className="prose dark:prose-invert prose-headings:text-header prose-a:text-accent prose-strong:text-text mx-auto p-8">
      <h1>{post.title}</h1>
      {post.date && (
        <p className="text-sm text-text/60 -mt-4">{post.date}</p>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
