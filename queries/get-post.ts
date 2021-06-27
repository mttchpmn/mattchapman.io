import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import { Post } from "../types/post";

export const QUERY_GET_POST = gql`
  query post($id: ItemId) {
    post(filter: { id: { eq: $id } }) {
      id
      title
      body
      slug
    }
  }
`;

export const getPost = async (id: string): Promise<Post> => {
  const variables = {
    id,
  };

  const post = await request({
    query: QUERY_GET_POST,
    variables: variables,
  });

  return post;
};
