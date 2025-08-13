import React, { useState } from 'react';
import Header from '@/components/layout/Header'; // add this import

import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Welcome!', content: 'This is your homepage with dynamic posts.' }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header /> {/* add Header component here */}

      <div>
        <h1>Home Page</h1>
        <p>This is the home page content.</p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add New Post
          </button>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card
            title="Welcome to Our Site"
            content="This is the first reusable card on the homepage."
          />
          <Card
            title="Why Use Components?"
            content="Components make your app modular and easier to maintain."
          />
          <Card
            title="Powered by Tailwind"
            content="Tailwind CSS makes styling fast and consistent across your app."
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onPostSubmit={handleAddPost}
        />
      </div>
    </>
  );
};

export default HomePage;
