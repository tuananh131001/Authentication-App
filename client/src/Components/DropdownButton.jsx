import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from "./Menu";
import { motion } from "framer-motion";
function DropdownButton({ AccountPageRef }) {
  const [dropDown, setDropDown] = useState(false);
  const { userDetail } = useContext(UserContext);
  const buttonRef = useRef();
  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
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
        className="flex gap-2 items-center"
        onClick={(x) => (!dropDown ? setDropDown(true) : setDropDown(false))}
      >
        <img className="w-10" src={userDetail.image} alt="" />
        <h1 className=" hidden lg:flex">{userDetail.name}</h1>
        <MdKeyboardArrowDown className=" hidden lg:flex"></MdKeyboardArrowDown>
      </button>

      {
        <motion.div animate={dropDown ? "open" : "closed"} variants={variants}>
          {" "}
          <Menu></Menu>{" "}
        </motion.div>
      }
    </div>
  );
}

export default DropdownButton;
