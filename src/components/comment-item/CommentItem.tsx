import React from "react";
import "../../index.css";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";

interface Comment {
  id: number;
  email: string;
  body: string;
}

interface Props {
  comments: Comment[];
}

const CommentItem: React.FC<Props> = ({ comments }) => {
  const avatarName = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <div>
      {comments.map((item, index) => (
        <React.Fragment>
          <style>{`
            .element${index} {
              animation : slideInFromLeft ${index / 2 + 0.5}s ease-out;

            }
            `}</style>
          <Paper
            key={item.id}
            id="mainComment"
            className={`element${index}`}
            elevation={8}
          >
            <Avatar className="commentAvatar">{avatarName(item.email)}</Avatar>
            <div className="commentBody">
              <div className="commentEmail">{item.email} </div>
              <div>{item.body}</div>
            </div>
          </Paper>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CommentItem;
