import React, { useState } from 'react';

const BlogPosts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="container mx-auto p-4 pt-28">
      {selectedPost ? (
        <div className="mb-4 p-4 border rounded shadow bg-slate-800">
          <h2 className="text-2xl sm:text-4xl poppins-semibold">{selectedPost.title}</h2>
          <h4 className="text-lg sm:text-xl poppins-extralight">{selectedPost.subTitle}</h4>
          <p className="text-sm sm:text-base text-gray-500">{new Date(selectedPost.created_at).toLocaleString()}</p>
          <p>{selectedPost.blog_data}</p>
          <button onClick={() => setSelectedPost(null)} className="mt-4 p-2 bg-blue-500 text-white rounded">Back to Posts</button>
        </div>
      ) : (
        posts.map((post) => (
          <button key={post.id} onClick={() => setSelectedPost(post)} className="w-full text-left mb-4 p-4 border rounded shadow bg-black">
            <h2 className="text-2xl sm:text-4xl poppins-semibold">{post.title}</h2>
            <h4 className="text-lg sm:text-xl poppins-extralight">{post.subTitle}</h4>
            <p className="text-sm sm:text-base text-gray-500">{new Date(post.created_at).toLocaleString()}</p>
            <p>{post.blog_data}</p>
          </button>
        ))
      )}
    </div>
  );
};

export default BlogPosts;
