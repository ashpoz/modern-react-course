import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 1:15am"
        text="Cool post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Adrian"
        timeAgo="Today at 2:25am"
        text="I'm a troll."
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Juanita"
        timeAgo="Today at 3:35am"
        text="I don't like myself"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
