const queryArticle = `*[_type == "post"]{
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

  export default queryArticle