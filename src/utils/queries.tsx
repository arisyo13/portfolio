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
    "authorName": author -> name,
    "authorImage": author -> image,
    publishedAt
  }`;

  export const queryProjects = `*[_type == "project"]{
    title,
    date,
    place,
    description,
    link
  }`;

  export const queryAuthor = `*[_type == "author"]{
    name,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
  }`;

  export const querySinglePost = (slug: string) => `*[slug.current == "${slug}"]{
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
}`;