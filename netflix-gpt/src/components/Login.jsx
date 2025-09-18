import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div
      className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg)] 
      min-h-lvh
      "
    >
      <Header />
      <div className="w-4/12 h-[200] m-auto mt-5 bg-black text-white p-12 opacity-80">
        <form className="flex flex-col">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 mb-6 bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-4 mb-6 bg-gray-700"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 mb-6 bg-gray-700"
            type="password"
            placeholder="Password"
          />
          <button className="p-4 mb-4 bg-red-700 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
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
