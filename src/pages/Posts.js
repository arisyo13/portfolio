import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Article from '../components/Article';
import queryArticle from '../utilities/queries'

const Posts = () => {
  const [postData, setPost] = useState(undefined);

  useEffect(() => {
    sanityClient
      .fetch(queryArticle)
      .then((data) => setPost(data ))
      .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-900 px-8 md:px-0">
      <section className="container pt-20 mx-auto">
        <h1 className="text-5xl text-center text-white mb-6 flex justify-center">
          My Blogs
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { postData && postData.map((post, index) => (
            <Article
              key={index}
              title={post.title} 
              index={index} 
              slug={post.slug.current} 
              slugIndex={post.slug.current.index} 
              mainImage={post.mainImage.asset.url} 
              imageAlt={post.mainImage.alt}
              authorImage={post.authorImage}
              authorName={post.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Posts