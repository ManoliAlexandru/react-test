import React from "react";
import "../../index.css";

const PostItem = ({ post }: any) => {
  console.log(post);
  return (
    <div key={post.id} className="card">
      <div className="first-content">
        <p>{post.id}</p>
      </div>
      <div className="second-content">
        <div className="text-body">{post.body}</div>
      </div>
    </div>
  );
};

export default PostItem;
