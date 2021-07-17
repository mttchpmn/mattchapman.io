import { GraphQLClient, gql } from "graphql-request";
import contact from "../pages/api/contact";

export const request = ({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}) => {
  const ENDPOINT = "https://graphql.datocms.com/preview";
  const token = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
  // if (!token) throw new Error("No API token found in environment");

  const client = new GraphQLClient(ENDPOINT, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return client.request(query, variables);
};

export type BannerContent = {
  url: string;
  blurUpThumb: string;
};

export const getBannerContent = async (): Promise<BannerContent> => {
  const query = gql`
    {
      banner {
        image {
          url
          blurUpThumb
        }
      }
    }
  `;

  const {
    banner: {
      image: { url, blurUpThumb },
    },
  } = await request({ query });

  return { url, blurUpThumb };
};

export type ContactContent = {
  title: string;
  description: string;
};

export const getContactContent = async (): Promise<ContactContent> => {
  const query = gql`
    {
      contact {
        title
        description
      }
    }
  `;

  const { contact } = await request({ query });

  return contact;
};

export type AboutContent = {
  tagline: string;
  description: string;
  url: string;
};
export const getAboutContent = async (): Promise<AboutContent> => {
  const query = gql`
    {
      about {
        tagline
        description
        image {
          url
        }
      }
    }
  `;

  const {
    about: {
      tagline,
      description,
      image: { url },
    },
  } = await request({ query });

  return { tagline, description, url };
};

type Json = string;

export type BlogPost = {
  title: string;
  description: string;
  category: string;
  headerImage: string;
  isLargeHeader: boolean;
  content: Json;
  slug: string;
  tags: string[];
};

export const getAllPostSlugs = async (): Promise<string[]> => {
  const query = gql`
    {
      allBlogPosts {
        slug
      }
    }
  `;

  const { allBlogPosts } = await request({ query });

  return allBlogPosts.map((p) => ({ params: { slug: p.slug } }));
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const query = gql`
    {
      allBlogPosts {
        title
        description
        category {
          title
        }
        headerImage {
          url
        }
        isLargeHeader
        slug
        tags {
          name
        }
        content {
          blocks {
            id
            __typename
            ... on ImageBlockRecord {
              title
              image {
                url
              }
              caption
              isLargeImage
            }
          }
          value
        }
      }
    }
  `;

  const { allBlogPosts } = await request({ query });

  const blogPosts = allBlogPosts.map((data) => ({
    title: data.title,
    description: data.description,
    category: data.category.title,
    headerImage: data.headerImage.url,
    isLargeHeader: data.isLargeHeader,
    content: data.content,
    slug: data.slug,
    tags: data.tags.map((t) => t.name),
  }));

  return blogPosts;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  const query = gql`
    query GetPostBySlug {
      blogPost(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        category {
          title
        }
        headerImage {
          url
        }
        isLargeHeader
        slug
        tags {
          name
        }
        content {
          blocks {
            id
            __typename
            ... on ImageBlockRecord {
              title
              image {
                url
              }
              caption
              isLargeImage
            }
          }
          value
        }
      }
    }
  `;

  const { blogPost: data } = await request({ query });

  console.log(data);

  const blogPost = {
    title: data.title,
    description: data.description,
    category: data.category.title,
    headerImage: data.headerImage.url,
    isLargeHeader: data.isLargeHeader,
    content: data.content,
    slug: data.slug,
    tags: data.tags.map((t) => t.name),
  };

  return blogPost;
};
