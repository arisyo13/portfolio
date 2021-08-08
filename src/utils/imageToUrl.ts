import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: string): any => {
  return builder.image(source);
}