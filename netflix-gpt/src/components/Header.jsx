import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, PROFILE_ICON, SUPPORTED_LANG } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.userInfo);
  const { showGPTSearch } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="px-8 bg-black opacity-90 flex justify-between items-center">
      <img className="w-34" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex">
          {showGPTSearch && (
            <select
              className="bg-gray-900 text-white p-2 mx-3"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            GPT Search
          </button>
          <button className="flex pt-2 cursor-pointer" onClick={handleSignOut}>
            <img
              className="ml-3.5 mb-2 mr-2"
              src={PROFILE_ICON}
              alt="sign-out"
            />
            <span className="font-bold text-white">Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
