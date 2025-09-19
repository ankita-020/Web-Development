import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate the form data
    const name = nameRef.current?.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const msg = checkValidData(email, password);
    setErrorMessage(msg);
    if (msg) return;

    // Sign In / Sign Up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user) {
            updateProfile(user, {
              displayName: name,
              photoURL: "",
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            navigate("/browse");
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div
      className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg)] 
      min-h-lvh
      "
    >
      <Header />
      <div className="w-5/12 h-[200] m-auto mt-5 bg-black text-white p-12 opacity-80">
        <form className="flex flex-col">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={nameRef}
              className="p-4 mb-6 bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={emailRef}
            className="p-4 mb-6 bg-gray-700"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={passwordRef}
            className="p-4 mb-6 bg-gray-700"
            type="password"
            placeholder="Password"
          />
          <button
            className="p-4 mb-4 bg-red-700 rounded-lg cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="font-bold text-md text-red-600">{errorMessage}</p>
          <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered. Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
