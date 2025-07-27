// pages/posts.tsx
// pages/posts.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
const Posts = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
     useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      const formatted = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formatted);
    };

    fetchPosts();
  }, []);
  return (
    <>
    <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Posts;
