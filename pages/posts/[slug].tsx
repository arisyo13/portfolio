import React from 'react';
import SanityClient from '../../client';
import { querySinglePost } from '../../src/utils/queries';
import { ISimpleArticle } from '../../src/models';

const SinglePost = ({ post }: { post : ISimpleArticle[] }) => {
    
    return (
        <div className="min-h-screen bg-red-300 py-20">
            <div className="container mx-auto">
                { post && post.map((post, index) =>(
                    <h1 key={index}>{post.title}</h1>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const post = await SanityClient.fetch(querySinglePost(context.params.slug)).catch(error => console.error(error));

    return { props: { post }}
}

export default SinglePost