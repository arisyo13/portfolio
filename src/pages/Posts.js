import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
}

const Post = () => {
  const [postData, setPost] = useState(undefined);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          "name": author -> name,
          "authorImage": author -> image,
          publishedAt
        }`
      )
      .then((data) => setPost(data ))
      .catch(console.error);
  }, []);

  

  return (
    <main className="flex min-h-screen bg-gray-900 px-8 md:px-0">
      <section className="container py-8 mx-auto">
        <h1 className="text-5xl text-center text-white mb-6 flex justify-center">
          My Blogs
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          { postData && postData.map((post, index) => (
              <article className="">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded-xl shadow bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-lg object-cover absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
                <span className="flex mt-2 items-center">
                  <img className="rounded-full  w-8 h-8" src={urlFor(post.authorImage).url()} alt={post.name}/>
                  <p className="pl-1 text-xs text-white">Posted by {post.name}</p>
                </span>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post