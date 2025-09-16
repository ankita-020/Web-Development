import { useState, useContext } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <a href="/about">About</a>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <button
              className="block"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
            {name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
