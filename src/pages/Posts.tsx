import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Article from '../components/Article';
import { SimpleArticle } from "../models/SimplePost";
import { queryArticle } from '../utils/queries'

const Posts = () => {
  const [postData, setPost] = useState<SimpleArticle[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(queryArticle)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen py-20 bg-gradient-to-b from-purple-200 to-blue-200">
      <section className="container px-4 md:px-0 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { postData && postData.map((post, index) => (
            <Article
              key={index}
              index={index}
              article={post}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Posts