import React from 'react';
import SanityClient from '../../client';
import { queryPosts } from '../../src/utils/queries';
import { ISimpleArticle } from '../../src/models';

type Props = {
    Posts: ISimpleArticle[]
}

const Posts = ({ Posts }: Props) => {
    return (
        <div className="container mx-auto py-40">
            {Posts && Posts.map((post, index) => <h1 key={index}>{post.title}</h1>)}
        </div>
    )
}

export const getStaticProps = async () => {
    const Posts = await SanityClient.fetch(queryPosts).catch(error => console.error(error));

    return { props: { Posts }}
}

export default Posts