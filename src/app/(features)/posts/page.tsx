import PostLists from "@/components/features/posts/PostLists";
import { getAllPosts } from "@/features/posts/helper";
import { Post } from "@/features/posts/type";
import { readFile } from "fs";
import React from "react";

const PostPage = async () => {
  const [posts, { success, error }] = await getAllPosts();

  if (!success) {
    return (
      <>
        <p className="text-red-600 p-3"> {error as string}</p>
      </>
    );
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto">
        <div className="flex flex-col gap-4">
          <PostLists posts={posts} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default PostPage;
