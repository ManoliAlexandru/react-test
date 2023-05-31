import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostService } from "../../services/post.service";
import PostItem from "../post-item/PostItem";
import CommentItem from "../comment-item/CommentItem";
import { Button } from "@mui/material";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComment] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const data = await PostService.getById(id);
      setPost(data);
    };
    const fetchCommentData = async () => {
      const data = await PostService.getCommentById(id);
      setComment(data);
    };
    fetchCommentData();
    fetchPostData();
  }, [id]);

  return (
    <div>
      <Link to={"/"} className="mainBtn">
        <Button variant="contained">Back</Button>
      </Link>
      <PostItem post={post} />
      <hr />
      <CommentItem comments={comments} />
    </div>
  );
};

export default PostDetail;
