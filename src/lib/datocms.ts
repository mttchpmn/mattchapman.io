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
