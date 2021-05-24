import { Link } from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: string): any => {
  return builder.image(source);
}

type Props = {
    title: string,
    index: number,
    slug: string,
    slugIndex: any,
    mainImage: any,
    imageAlt: string,
    authorName: string,
    authorImage: any
}

const Article = (props: Props) => {
    return (
        <article key={props.index}>
            <Link to={"/posts/" + props.slug} key={props.slugIndex}>
                <span
                  className="block h-48 relative rounded-xl shadow bg-white"
                >
                  <img
                    src={props.mainImage}
                    alt={props.imageAlt}
                    className="w-full h-full rounded-lg object-cover absolute"
                  />
                  <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                    <h3 className="text-sm py-2 px-4 bg-red-700 text-red-100 bg-opacity-75 rounded-md">
                      {props.title}
                    </h3>
                  </span>
                </span>
            </Link>
            <span className="flex mt-2 items-center">
                <img className="rounded-full  w-8 h-8" src={urlFor(props.authorImage)} alt={props.authorName}/>
                <p className="pl-1 text-xs text-white">Posted by {props.authorName}</p>
            </span>
        </article>
    )
}

export default Article