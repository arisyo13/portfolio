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