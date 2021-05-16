export const queryArticle = `*[_type == "post"]{
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

  

  export const queryProjects = `*[_type == "project"]{
    title,
    date,
    place,
    description,
    link
  }`