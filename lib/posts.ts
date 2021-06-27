import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { getAllPosts } from "../queries/get-all-posts";
import { getPostById } from "../queries/get-post";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  // // Get file names under /posts
  // const fileNames = fs.readdirSync(postsDirectory);
  // const allPostsData = fileNames.map((fileName) => {
  //   // Remove ".md" from file name to get id
  //   const id = fileName.replace(/\.md$/, "");

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, "utf8");

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents);

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...(matterResult.data as { date: string; title: string }),
  //   };
  // });
  // // Sort posts by date
  // return allPostsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  const posts = await getAllPosts();

  return posts;
}

export async function getAllPostIds() {
  // const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // return fileNames.map((fileName) => {
  //   return {
  //     params: {
  //       id: fileName.replace(/\.md$/, ""),
  //     },
  //   };
  // });
  const posts = await getAllPosts();

  return posts.map((p) => ({ params: { id: p.slug } }));
}

export async function getPostData(id: string) {
  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // // Combine the data with the id and contentHtml
  // return {
  //   id,
  //   contentHtml,
  //   ...matterResult.data,
  // };
  var post = await getPostById(id);
}