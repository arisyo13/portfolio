import React from 'react';
import SanityClient from '../../client';
import { querySinglePost, queryPosts } from '../../src/utils/queries';
import { ISimpleArticle } from '../../src/models';

type Props = {
    post: ISimpleArticle[]
}

const SinglePost = ({ post }: Props) => {
    
    return (
        <div className="min-h-screen  bg-red-300 py-20">
            <div className="container mx-auto">
                { post && post.map((post, index) =>(
                    <h1 key={index}>{post.title}</h1>
                ))}
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const posts = await SanityClient.fetch(queryPosts).catch(error => console.error(error));
    const paths = posts.map((v: ISimpleArticle) => {
        return {
            params: { slug: v.slug.current.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {
    const post = await SanityClient.fetch(querySinglePost(context.params.slug)).catch(error => console.error(error));

    return { props: { post }}
}

export default SinglePost