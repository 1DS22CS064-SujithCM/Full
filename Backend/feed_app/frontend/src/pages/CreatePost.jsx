import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !caption.trim()) {
      alert('Please select an image and enter a caption.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/create-post`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post created:', res.data);
      alert('Post uploaded successfully');
      setImage(null);
      setCaption('');
      e.target.reset();
    } catch (error) {
      console.error('Error creating post:', error.response?.data || error.message);
      alert('Failed to upload post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <input
          type='text'
          name='caption'
          placeholder='enter caption'
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
