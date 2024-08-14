import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import BlogCard from "../assets/blogCard.jsx";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const { data, error } = await supabase
          .from('Blog Posts') // Use double quotes for table name with spaces
          .select('*');
  
        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setPosts(data);
        }
      };
  
      fetchPosts();
    }, []);
  

  return (
    <div className="container mx-auto p-4">
      {selectedPost ? (
        <div className="mb-4 p-4 border rounded-xl shadow bg-slate-100 flex flex-col gap-2 overflow-hidden">
          <h2 className="text-2xl sm:text-4xl poppins-semibold">{selectedPost.title}</h2>
          <h4 className="text-lg sm:text-xl poppins-extralight">{selectedPost.subTitle}</h4>
          <p className="text-sm sm:text-base text-gray-500">{new Date(selectedPost.created_at).toLocaleString()}</p>
          <hr className="relative right-5 w-[110%] border-2"/>
          <p>{selectedPost.blog_data}</p>
          <button onClick={() => setSelectedPost(null)} className="w-40 mt-4 p-2 bg-[#80a8bd] text-white rounded-lg">Back to Posts</button>
        </div>
      ) : (
        posts.map((post) => (
          <button key={post.id} onClick={() => setSelectedPost(post)} className="flex flex-col gap-2 w-full text-left mb-4 p-4 border rounded-xl shadow bg-slate-100">
            <h2 className="text-2xl sm:text-4xl poppins-semibold">{post.title}</h2>
            <h4 className="text-lg sm:text-xl poppins-extralight">{post.subTitle}</h4>
            <p className="text-sm sm:text-base text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>

          </button>
        ))
      )}
    </div>
  );
};

export default Blog;
