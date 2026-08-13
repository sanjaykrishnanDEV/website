const rawPosts = import.meta.glob("../posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {} as Record<string, string>, content: raw };
  }

  const [, frontmatter, content] = match;
  const meta: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const lineMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (lineMatch) {
      const [, key, value] = lineMatch;
      meta[key] = value.trim();
    }
  }

  return { meta, content: content.trim() };
}

export const posts: Record<string, Post> = Object.fromEntries(
  Object.entries(rawPosts).map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { meta, content } = parseFrontmatter(raw);

    return [
      slug,
      {
        slug,
        title: meta.title ?? slug,
        description: meta.description ?? "",
        date: meta.date ?? "",
        content,
      },
    ];
  })
);
