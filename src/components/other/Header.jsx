import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{props.data.firstName}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-md text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
