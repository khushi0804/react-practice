import React from "react";
import ChildComponent from "./ChildComponent";

const Parent = ({ familyName }) => {
  return (
    <div>
      <h2>🧑 Parent received the name, passing it down...</h2>
      <ChildComponent familyName={familyName} />
    </div>
  );
};

export default Parent;
