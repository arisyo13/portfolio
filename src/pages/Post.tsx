import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from '../client';

interface params {
    slug: string
}

const Post = () => {
    const [post, setPost] = useState<any[]>([]);
    const { slug } = useParams<params>();
    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
        )
        .then((data) => setPost(data))
        .catch(console.error)
    }, [slug]);
    
    return (
        <div className="flex min-h-screen py-20">
            {post.map((post, index) => (
                <h1>{post.title}</h1>)
            )}
        </div>
    )
}

export default Post