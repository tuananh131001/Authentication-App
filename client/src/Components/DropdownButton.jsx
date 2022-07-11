import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import Menu from "./Menu";
function DropdownButton({ AccountPageRef }) {
  const [dropDown, setDropDown] = useState(false);
  const {  userDetail } =
    useContext(UserContext);
  const buttonRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        AccountPageRef.current &&
        AccountPageRef.current.contains(event.target)
      ) {
        !buttonRef.current.contains(event.target) ? setDropDown(false) : null;
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [AccountPageRef]);
  return (
    <div ref={buttonRef}>
      <button
        onClick={(x) => (!dropDown ? setDropDown(true) : setDropDown(false))}
      >
        <img className="w-10" src={userDetail.image} alt=""  />
      </button>
      
      {dropDown ? <Menu></Menu> : null}
    </div>
  );
}

export default DropdownButton;
