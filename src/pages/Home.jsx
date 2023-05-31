import React, { useEffect, useState } from "react";
import { PostService } from "../services/post.service";
import PostCard from "../components/post-card/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const data = await PostService.getAll();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const groupedData = posts.reduce((acc, item) => {
    const { userId } = item;
    if (!acc[userId]) {
      acc[userId] = [];
    }
    acc[userId].push(item);
    return acc;
  }, {});
  return (
    <>
      <div>
        <h1>All posts</h1>
        <div>
          {Object.entries(groupedData).map(([userId, postItem]) => (
            <React.Fragment key={userId}>
              <PostCard userId={userId} post={postItem} />
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
