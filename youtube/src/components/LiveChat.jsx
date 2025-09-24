import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.chat);
  const [liveMsg, setLiveMsg] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Ankita kumari",
        msg: liveMsg,
      })
    );
    setLiveMsg("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          msg: generateRandomMsg(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="bg-slate-100 h-full  p-2 mr-5 rounded-lg shadow-lg flex flex-col-reverse overflow-y-scroll">
        {messages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} msg={chat.msg} />
        ))}
      </div>
      <form
        className="w-full py-2.5 px-6 mr-2 h-14 mr-5"
        onSubmit={onFormSubmit}
      >
        <input
          className="h-full px-1.5 border border-black rounded-sm"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="p-2 mx-2 bg-green-200 rounded-lg">Chat</button>
      </form>
    </>
  );
};

export default LiveChat;
