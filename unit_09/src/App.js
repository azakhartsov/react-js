import "./App.css";
import React from "react";
import Comment2 from "./Comment2";
import PlaceholderPostHook from "./PlaceholderPostHook";
import CommentHook from "./CommentHook";
import Comment2Hook from "./Comment2Hook";

function App() {
  return (
    <>
      <PlaceholderPostHook />
      {/* <Comment2Hook /> */}
      <CommentHook />
      <Comment2 />
    </>
  );
}

export default App;
