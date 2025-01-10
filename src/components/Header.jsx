import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-6 py-2 z-10 flex justify-between">
      <img className="w-32" src={LOGO} alt="logo" />
      {user ? (
        <div className="flex">
          <button
            onClick={handleSignOutClick}
            className="cursor-pointer bg-red-500 h-10 w-16 rounded-lg text-white font-semibold justify-center text-sm content-center"
          >
            Sign Out
          </button>
          
          <img className="h-10 mx-2" src={USER_AVATAR} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
