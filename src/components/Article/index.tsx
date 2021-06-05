import { Link } from "react-router-dom";
import { SimpleArticle } from "../../models/SimplePost";
import { urlFor } from "../../utils/imageToUrl";


interface Props {
  article: SimpleArticle,
  index: number
}

const Article = ({ article, index }: Props) => {
  return (
    <article key={index}>
      <div>
        <Link to={"/post/" + article.slug.current} key={index}>
          <span
            className="block h-48 relative rounded-xl shadow bg-white"
          >
            <img
              src={article.mainImage.asset.url}
              alt={article.mainImage.asset._id}
              className="w-full h-full rounded-lg object-cover absolute"
            />
            <span className="relative h-full flex justify-end items-end pr-4 pb-4">
              <h3 className="text-sm py-2 px-4 bg-red-700 text-red-100 bg-opacity-75 rounded-md">
                {article.title}
              </h3>
            </span>
          </span>
        </Link>
        <span className="flex mt-2 text-xs gap-1 text-white items-center">
          <img className="rounded-full  w-6 h-6" src={urlFor(article.authorImage)} alt={article.authorName}/>
          <p>Published at: {new Date(article.publishedAt).toLocaleDateString()} by {article.authorName}</p>
        </span>
      </div>
    </article>
  )
}

export default Article