import React from "react";
import { MdNavigateBefore } from "react-icons/md";
function Back({setIsEdit}) {
  return (
    <nav className="flex gap-1 items-center text-blue-500">
      <MdNavigateBefore></MdNavigateBefore>
      <button onClick={(x) => setIsEdit(false)}>Back</button>
    </nav>
  );
}

export default Back;
