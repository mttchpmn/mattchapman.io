import { GraphQLClient } from "graphql-request";

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
