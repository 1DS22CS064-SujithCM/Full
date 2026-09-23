import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/post`)
      .then((res) => {
        setPosts(res.data.posts || []);
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setPosts([]);
      });
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Feed;