import Link from "next/link";
import { ISimpleArticle } from "../../models";
import { urlFor } from "../../utils/imageToUrl";


interface Props {
  article: ISimpleArticle,
  index: number
}

const Article = ({ article, index }: Props) => {
  return (
    <article key={index}>
      <div>
        <Link href={"posts/" + article.slug.current} key={index}>
          <span
            className="block h-48 cursor-pointer relative rounded-xl shadow-2xl bg-white"
          >
            <img
              src={article.mainImage.asset.url}
              alt={article.mainImage.asset._id}
              className="w-full h-full rounded-xl shadow-2xl object-cover absolute"
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