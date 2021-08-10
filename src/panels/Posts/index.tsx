import React from "react";
import Article from '../../components/Article';
import { ISimpleArticle } from "../../models";

type Props = {
    posts: ISimpleArticle[]
}

const Posts = ({ posts }:Props) => {

  return (
    <main className="flex min-h-screen py-20 bg-gradient-to-b from-purple-200 to-blue-200">
      <section className="container px-4 md:px-0 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { posts && posts.map((post, index) => (
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