import { type Post } from "./type";

export async function getAllPosts(): Promise<Post[] | undefined> {
    const response = await fetch(`https://dummyjson.com/posts`);
    const { posts }: { posts: Post[] | undefined } = await response.json();
    return posts;
}