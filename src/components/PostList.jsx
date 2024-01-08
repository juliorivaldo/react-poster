import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // THIS CODE CAUSE INFINITE LOOP !!!!!
  // fetch("http://localhost:8050/posts").then((response) =>
  //   response.json().then((data) => {
  //     setPosts(data.posts);
  //   })
  // );
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.body}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
