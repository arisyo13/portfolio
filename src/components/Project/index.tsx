import Link from "next/link";
import { ISimpleProject } from "../../models";
import { urlFor } from "../../utils/imageToUrl";


interface Props {
  project: ISimpleProject,
  index: number
}

const Project = ({ project, index }: Props) => {
  return (
    <article key={index}>
      <div>
        <Link href={"posts/" + project.slug} key={index}>
          <span
            className="block h-48 cursor-pointer relative rounded-xl shadow-2xl bg-white"
          >
            <img
              src={project.mainImage.asset.url}
              alt={project.mainImage.asset._id}
              className="w-full h-full rounded-xl shadow-2xl object-cover absolute"
            />
            <span className="relative h-full flex justify-end items-end pr-4 pb-4">
              <h3 className="text-sm py-2 px-4 bg-red-700 text-red-100 bg-opacity-75 rounded-md">
                {project.title}
              </h3>
            </span>
          </span>
        </Link>
      </div>
    </article>
  )
}

export default Project