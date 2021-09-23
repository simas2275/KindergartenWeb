import React from "react";
import { useQueryClient } from "react-query";
import usePosts from "../hooks/usePosts";

const Posts = () => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();
  console.log(error);
  return (
    <div>
      {status === "loading" ? (
        "Kraunasi"
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        data.map((post) => {
          return (
            <div>
              <p>{post.text}</p>
              <p>{post.title}</p>
            </div>
            
          );
        })
      )}
    </div>
  );
};

export default Posts;
