import React from "react";
import Article from '../../components/Article';
import { Main } from "../../components/Styled";
import { ISimpleArticle } from "../../models";

type Props = {
    posts: ISimpleArticle[]
}

const Posts = ({ posts }:Props) => {
    console.log(posts);

  return (
    <Main id="posts" style='dark'>
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
    </Main>
  );
}

export default Posts