import { Post } from "@/features/posts/type";
import React from "react";
import PostCard from "./PostCard";

interface Props {
  posts?: Post[];
}

const PostLists = ({ posts }: Props) => {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full p-4 bg-green-100 rounded-2xl">
        {posts &&
          (posts as Post[])?.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </section>
    </React.Fragment>
  );
};

export default PostLists;
