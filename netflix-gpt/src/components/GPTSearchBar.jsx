import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const { lang } = useSelector((store) => store.config);

  return (
    <div className="py-[20%] bg-black">
      <form className="w-[80%] m-auto flex items-center">
        <input
          type="text"
          className="m-4 p-3 w-[80%] bg-amber-100 text-lg "
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button className="w-[20%] p-3 bg-red-700 text-white rounded-lg ">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
