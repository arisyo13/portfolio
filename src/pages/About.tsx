import { useEffect, useState } from "react";
import SanityClient from '../client';
import { SimpleAuthor } from "../models/SimpleAuthor";
import { queryAuthor } from '../utils/queries';


const About = () => {
    const [authorData, setAuthor] = useState<SimpleAuthor>({name: '', image: {asset: {_id: 0, url: ''}, alt: ""}});

    useEffect(() => {
        SanityClient
            .fetch(queryAuthor)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    return (
        <main className="min-h-screen py-20 bg-white    ">
            <div className="container mx-auto px-4 md:px-0">
                { authorData.name !== 'Aris' ? <h1>Loading...</h1> : 
                <div className="flex flex-col md:flex-row gap-4 items-baseline">
                    <img className="w-full md:w-80 shadow-xl rounded-md" src={authorData.image.asset.url} alt={authorData.name} />
                    <h1>{authorData.name}</h1>
                </div> }
            </div>
        </main>
    )
}

export default About