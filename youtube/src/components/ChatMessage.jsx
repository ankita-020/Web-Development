import React from "react";

const ChatMessage = ({ name, msg }) => {
  return (
    <div className="flex hover:bg-gray-200 p-2">
      <i className="fa-solid fa-user text-xl" />
      <span className="font-bold px-2">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessage;
