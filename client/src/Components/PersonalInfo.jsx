import { doc, getDoc } from "firebase/firestore";
import React, { useContext } from "react";

import { UserContext } from "../utils/UserContext";
function PersonalInfo({ setIsEdit }) {
  const { userDetail } =
    useContext(UserContext);

  return (
    <div>
      <h1 className="text-2xl text-center py-2">Personal Info</h1>
      <h2 className="text-center text-sm font-thin">
        Basic info, like your name and photo
      </h2>
      <section className="flex justify-between items-center py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Profile</h1>
          <p className=" text-xs w-36 font-light text-gray-600">
            Some info may be visible to other people
          </p>
        </div>
        <button
          onClick={(x) => setIsEdit(true)}
          className="border-2 rounded-xl border-gray-300 p-5 h-5 flex items-center "
        >
          Edit
        </button>
      </section>
      <div className="flex items-center  border-b py-8 justify-between text-gray-300">
        <h1>PHOTO</h1>
        <img className="w-10" src={userDetail?.image} alt="" />
      </div>
      <div className="flex items-center  border-b py-8 justify-between ">
        <h1 className="text-gray-300">NAME:</h1>
        <h1>{userDetail?.name}</h1>
      </div>
      <div className="flex items-center  border-b py-8 justify-between ">
        <h1 className="text-gray-300">BIO</h1>
        <h1>{userDetail?.bio}</h1>
      </div>
      <div className="flex items-center  border-b py-8 justify-between ">
        <h1 className="text-gray-300">EMAIL</h1>
        <h1>{userDetail?.email}</h1>
      </div>

    </div>
  );
}

export default PersonalInfo;
