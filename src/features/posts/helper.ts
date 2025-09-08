import { type Post } from "./type";

export interface ErrorType {
    success?: boolean;
    error?: string;
}

export async function getAllPosts(): Promise<[Post[] | undefined, status: ErrorType]> {
    try {
        const response = await fetch(`https://dummyjson.com/posts`);
        const { posts } = await response.json();
        if (!posts) {
            return [undefined, { success: false, error: 'post not found!' }]
        }
        return [posts, { success: true, error: undefined }]
    } catch (error) {
        if (error instanceof Error) {
            return [undefined, { success: false, error: error?.message }]
        }
        return [undefined, { success: false, error: 'unknown error!' }];
    }
}