import React from "react";
import Article from '../../components/Article';
import { Container, Main } from "../../components/Styled";
import { ISimpleArticle } from "../../models";

type Props = {
    posts: ISimpleArticle[]
}

const Posts = ({ posts }:Props) => {
    console.log(posts);

  return (
    <Main id="posts" style='dark'>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { posts && posts.map((post, index) => (
            <Article
              key={index}
              index={index}
              article={post}
            />
          ))}
        </div>
      </Container>
    </Main>
  );
}

export default Posts