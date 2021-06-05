export interface SimpleProject {
    title: string,
    slug: { 
      current: string
    },
    mainImage: {
      asset: { 
        _id: string, 
        url: string
      }, 
      alt: string
    },
    description: string,
    place: string,
    link: string,
    date: string
  }