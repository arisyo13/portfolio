import React from "react";
import Article from '../../components/Article';
import { Container, Panel } from "../../components/Styled";
import { ISimpleArticle } from "../../models";
import { urlFor } from "../../utils/imageToUrl";

type Props = {
    posts: ISimpleArticle[]
}

const Posts = ({ posts }:Props) => {
    console.log(posts);

  return (
    <Panel id="posts" style='dark'>
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          { posts && posts.map((post, index) => (
            <Article
              key={index}
              index={index}
              article={post}
            />
          ))}
          { posts && posts[4].images.map((v:any, i:number) =>(<img key={i} src={urlFor(v.asset._ref)} alt="test" />)) }
        </div>
      </Container>
    </Panel>
  );
}

export default Posts