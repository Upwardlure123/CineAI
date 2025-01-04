import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSignInForm = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
          alt=""
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isClicked ? "Sign Up" : "Sign In"}
        </h1>
        {isClicked ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email "
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isClicked ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isClicked
            ? "Already a user? Sign In Now"
            : "New to Netflix? SignUp Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
