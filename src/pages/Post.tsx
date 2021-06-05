import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from '../client';
import { SimpleArticle } from '../models/SimplePost';
import { querySinglePost } from '../utils/queries';

interface params {
    slug: string
}

const Post = () => {
    const [post, setPost] = useState<SimpleArticle[]>([]);
    const { slug } = useParams<params>();
    useEffect(() => {
        sanityClient
            .fetch(querySinglePost(slug))
            .then((data) => setPost(data))
            .catch(console.error)
    }, [slug]);
    
    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto flex">
                {post.map((post, index) => (
                    <h1 key={index}>{post.title}</h1>)
                )}
            </div>
        </div>
    )
}

export default Post