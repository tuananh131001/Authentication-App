import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigation = useNavigate();

  return (
    <nav className="flex gap-1 items-center text-blue-500">
      <MdNavigateBefore></MdNavigateBefore>
      <button onClick={(x) => navigation("/account")}>Back</button>
    </nav>
  );
}

export default Back;
