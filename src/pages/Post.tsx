import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from '../client';
import { querySinglePost } from '../utilities/queries';

interface params {
    slug: string
}

interface mImage {
    asset: {
        _id: number,
        url: string
    }
}

interface SimplePost {
    title: string,
    _id: number,
    slug: string,
    mainImage: mImage,
    body: any,
    name: string,
    authorImage: string
}

const Post = () => {
    const [post, setPost] = useState<SimplePost[]>([]);
    const { slug } = useParams<params>();
    useEffect(() => {
        sanityClient
            .fetch(querySinglePost(slug))
            .then((data) => setPost(data))
            .catch(console.error)
    }, [slug]);
    
    return (
        <div className="flex min-h-screen py-20">
            {post.map((post, index) => (
                <h1 key={index}>{post.title}</h1>)
            )}
        </div>
    )
}

export default Post