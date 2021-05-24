import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Article from '../components/Article';
import { queryArticle } from '../utilities/queries'

const Posts = () => {
  const [postData, setPost] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(queryArticle)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen py-20 bg-gray-400">
      <section className="container px-4 md:px-0 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { postData && postData.map((post, index) => (
            <Article
              key={index}
              title={post.title} 
              index={index} 
              slug={post.slug.current} 
              slugIndex={index} 
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