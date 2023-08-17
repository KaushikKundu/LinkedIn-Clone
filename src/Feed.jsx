import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./feed.css";
import InputOptions from "./InputOptions";
import {
  CalendarViewDay,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import Post from "./Post";

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const sendPost = (e) => {
        e.preventDefault();

    }
  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" name="" id="" placeholder="Start a post" />
            <button onClick={sendPost} type="submit" value="">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOptions Icon={Image} title="Photo" color="#7005F9" />
          <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventNote} title="Event" color="#7FC15E" />
          <InputOptions
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {
        posts.map((post) => {
            <Post />
        })
      }
      <Post
        name="Kaushik kundu"
        description="demo post"
        message="this worked!"
      />
    </div>
  );
};

export default Feed;
