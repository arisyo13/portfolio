import { ISimpleImage } from "./SimpleProject";

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