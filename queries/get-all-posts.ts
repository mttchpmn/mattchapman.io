import { request } from "../lib/datocms";
import { Post } from "../types/post";

export const QUERY_ALL_POSTS = `{
	allPosts {
		id
		slug
		title
		body
	}
}`;

export const getAllPosts = async (): Promise<Post[]> => {
  var posts = await request({
    query: QUERY_ALL_POSTS,
  });

  return posts.allPosts;
};
