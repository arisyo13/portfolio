import React, { FC } from 'react';
import SanityClient from '../../client';
import { queryPosts } from '../../src/utils/queries';
import { ISimpleArticle } from '../../src/models';

type Props = {
    posts: ISimpleArticle[]
}

const Posts: FC<Props> = ({ posts }): JSX.Element => {
    return (
        <div className="container mx-auto py-40">
            {posts && posts.map((post, index) => (
                <h1 key={index}>{post.title}</h1>
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const allPosts = await SanityClient.fetch(queryPosts).catch(error => console.error(error));

    return { props: { allPosts }}
}

export default Posts