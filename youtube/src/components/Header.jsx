import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    // Make api for every keystroke
    // but if the difference between 2 api call is less than 200ms then decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <button
          className="h-10 w-10 cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        <img
          alt="logo"
          className="h-10 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 relative">
        <div>
          <input
            type="text"
            className="w-[80%] border border-gray-400 p-2 px-4 rounded-l-full"
            onChange={handleSearchQuery}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className="w-[10%] border border-l-0 border-gray-400 p-2 rounded-r-full bg-gray-100">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggestion && suggestions.length && (
          <div className="absolute bg-white py-5 w-[80%] border border-gray-100 rounded-b-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  className="p-3 shadow-sm hover:bg-gray-100"
                  key={suggestion}
                >
                  <i className="fa-solid fa-magnifying-glass mr-1"></i>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <button className="h-10 w-10">
          <i className="fa-solid fa-user text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
