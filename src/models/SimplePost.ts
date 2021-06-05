export interface SimpleArticle {
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
    authorName: string,
    authorImage: string,
    publishedAt: string
}