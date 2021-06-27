import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import { Post } from "../types/post";

export const QUERY_GET_POST_BY_ID = gql`
  query post($id: ItemId) {
    post(filter: { id: { eq: $id } }) {
      id
      title
      body
      slug
    }
  }
`;

export const QUERY_GET_POST_BY_SLUG = gql`
  query post($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      id
      title
      body
      slug
    }
  }
`;

export const getPostById = async (id: string): Promise<Post> => {
  const variables = {
    id,
  };

  const { post } = await request({
    query: QUERY_GET_POST_BY_ID,
    variables: variables,
  });

  return post;
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const variables = {
    slug,
  };

  const { post } = await request({
    query: QUERY_GET_POST_BY_SLUG,
    variables: variables,
  });

  return post;
};
