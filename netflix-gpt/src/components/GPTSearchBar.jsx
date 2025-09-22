import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import client from "../utils/openAI";

const GPTSearchBar = () => {
  const { lang } = useSelector((store) => store.config);
  const searchTextRef = useRef(null);

  const handleGPTSearchClick = async (e) => {
    e.preventDefault();

    const gptQuery =
      "Act as Movie Recommendetaion system and suggest some movies for query: " +
      searchTextRef.current.value +
      ". only give me name of 5 movies, comma separated like the example result given ahead. Examaple result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
  };

  return (
    <div className="py-[20%] bg-black h-screen">
      <form className="w-full md:w-[80%] m-auto flex items-center">
        <input
          ref={searchTextRef}
          type="text"
          className="m-4 p-3 w-[80%] bg-amber-100 text-lg "
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button
          className="w-[20%] p-3 bg-red-700 mr-3 text-white rounded-lg "
          onClick={handleGPTSearchClick}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
