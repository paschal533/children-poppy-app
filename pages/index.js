import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Loader } from '../components';
import { getDisplayPosts } from '../services';

export default function Home() {
  const [postsResult, setPostsResult] = useState([]);

  useEffect(() => {
    getDisplayPosts().then((result) => {
      setPostsResult(result);
    });
  }, []);

  return (
    <div className="container mx-auto px-2 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postsResult?.length !== 0 ? postsResult?.reverse().slice(0, 3).map((post, index) => (
            <div>
              <PostCard key={index} post={post} />
            </div>
          )) : <Loader />}
        </div>
        <div className="text-center">
          <Link href="/articles">
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">View more articles</span>
          </Link>
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
