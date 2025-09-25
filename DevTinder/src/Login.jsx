import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <div className="max-w-3xl flex justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 mt-[10%]">
        <h1 className="font-bold text-3xl m-auto">Login</h1>
        <label className="label font-bold text-lg">Email</label>
        <input
          type="email"
          className="input mb-5"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label font-bold text-lg">Password</label>
        <input
          type="password"
          className="input mb-5"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
