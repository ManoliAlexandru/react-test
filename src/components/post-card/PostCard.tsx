import React from "react";
import "../../index.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

interface IPostCard {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Props {
  userId: number;
  post: IPostCard[];
}

const PostCard: React.FC<Props> = ({ userId, post }) => {
  const generateRandomColor = (): string => {
    while (true) {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      if (red + green + blue > 680) {
        return (
          "#" +
          padZero(red.toString(16)) +
          padZero(green.toString(16)) +
          padZero(blue.toString(16))
        );
      }
    }
  };
  // Helper function to add leading zero to channel values if they consist of a single digit
  const padZero = (str: string) => {
    return ("0" + str).slice(-2);
  };

  console.log(generateRandomColor());

  return (
    <>
      <h1>{`User ID: ${userId}`}</h1>
      <Card className="wrapper">
        {post.map((item) => (
          <React.Fragment key={item.id}>
            <style>
              {`
              #mainCard-${item.id} {
                animation: slideInFromLeft ${userId * 0.50}s ease-out;
              }
              #mainCard-${item.id}:after{
                background-color: ${generateRandomColor()};

              }`}
            </style>
            <CardActionArea
              component={Link}
              className="mainCard"
              id={`mainCard-${item.id}`}
              to={`/post/${item.id}`}
            >
              <CardContent>
                <Typography>{item.id}</Typography>
                <Typography>{item.title}</Typography>
                <Typography>{item.body}</Typography>
              </CardContent>
            </CardActionArea>
          </React.Fragment>
        ))}
      </Card>
    </>
  );
};

export default PostCard;
