import { useEffect, useState } from "react";
import SanityClient from '../client';
import { queryAuthor } from '../utilities/queries';

interface SimpleAuthor {
    name: string
}

const About = () => {
    const [authorData, setAuthor] = useState<SimpleAuthor>({name: ""});

    useEffect(() => {
        SanityClient
            .fetch(queryAuthor)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    return (
        <main className="min-h-screen py-20 bg-white">
            <div className="container mx-auto px-4 md:px-0">
                { !authorData ? <h1>Loading...</h1> : <h1>{authorData.name}</h1> }
            </div>
        </main>
    )
}

export default About