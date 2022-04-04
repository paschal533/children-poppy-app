import React, { useState, useEffect } from 'react';
import { PostCard, Categories, PostWidget, Loader } from '../components';
import { getDisplayPosts } from '../services';

export default function Articles() {
  const [postsResult, setPostsResult] = useState([]);

  useEffect(() => {
    getDisplayPosts().then((result) => {
      setPostsResult(result);
    });
  }, []);

  return (
    <div className="container mx-auto px-2 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postsResult?.length !== 0 ? postsResult?.reverse().slice(5).map((post, index) => (
            <PostCard key={index} post={post} />
          )) : <Loader />}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
