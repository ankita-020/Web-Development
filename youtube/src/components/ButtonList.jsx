import React from "react";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Valentines",
  ];
  return (
    <div className="flex flex-wrap">
      {buttonList.map((button) => (
        <button key={button} className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
