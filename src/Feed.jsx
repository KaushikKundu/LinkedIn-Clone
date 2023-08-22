import React, { useEffect, useState } from "react";
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
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const colRef = collection(db, "posts");
  // console.log(colRef);
  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(colRef, {
      name: "Kaushik kundu",
      description: "demo test",
      message: input ,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    setInput("");

  };

  useEffect(() => {
    const cleanUp = onSnapshot(colRef, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      cleanUp();
    };
  }, []);

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(() =>e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">Send</button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name} 
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
      ))
    }
    
    </div>
  );
};

export default Feed;
