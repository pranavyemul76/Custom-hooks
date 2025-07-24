import PostCard from "../commonCompoments/PostCard";

export default function Home() {
  const posts = [
    { title: "OutSideClick", url: "out-side-click" },
    { title: "UseDebounce", url: "debounce" },
    { title: "UseHorizontalScroll", url: "horizontal-scroll" },
    { title: "UseInfiniteScroll", url: "infinite-scroll" },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <h3 className="text-center text-4xl mb-3">
          Simplify Development With Smart React Hooks
        </h3>
        <p className="text-center text-xl italic mb-3  text-indigo-700">
          Supercharge your React app with optimized utilities.
        </p>
        <div className="flex flex-wrap gap-3 min-h-screen min-w-full">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
