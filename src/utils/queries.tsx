export const queryPosts = `*[_type == "post"]{
    title,
    slug,
    images,
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
    bio
  }`;

  export const querySinglePost = (slug: string) => `*[slug.current == "${slug}"]{
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