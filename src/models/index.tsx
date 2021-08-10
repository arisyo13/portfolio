export interface ISimpleAuthor {
    name: string,
    image: ISimpleImage,
    bio: any
}

export interface ISimpleArticle {
    title: string,
    slug: { 
        current: string
    },
    mainImage: ISimpleImage,
    authorName: string,
    authorImage: string,
    publishedAt: string
}

export interface ISimpleImage {
    asset: { 
      _id: string, 
      url: string
    }, 
    alt: string
}
  
export interface ISimpleProject {
    title: string,
    slug: { 
        current: string
    },
    mainImage: ISimpleImage,
    description: string,
    place: string,
    link: string,
    date: string
}