import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->name,
    body
  }
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->{
      name,
      image,
      bio
    },
    body
  }
`;
