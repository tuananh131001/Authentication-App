import { doc, getDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../utils/UserContext";
import InfoElement from "./InfoElement";
function PersonalInfo({ setIsEdit }) {
  const { userDetail } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-3xl text-center">Personal Info</h1>
      <h2 className="text-center text-sm font-thin">
        Basic info, like your name and photo
      </h2>
      <section className="flex flex-col justify-between border rounded-md sm:w-8/12  ">
        <section className="flex items-center justify-between border-b px-10 py-4 ">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl">Profile</h1>
            <p className=" text-xs w-36 lg:w-full font-light text-gray-600">
              Some info may be visible to other people
            </p>
          </div>
          <button
            onClick={(x) => navigate("/edit")}
            className="border-2 rounded-xl border-gray-300 p-5 h-5 flex items-center "
          >
            {" "}
            Edit
          </button>
        </section>
        <InfoElement name={"Photo"} valueElement={userDetail?.image}/>

        <InfoElement name={"Name"} valueElement={userDetail?.name}/>
        <InfoElement name={"Bio"} valueElement={userDetail?.bio}/>
        <InfoElement name={"Phone"} valueElement={userDetail?.phone}/>
        <InfoElement name={"Email"} valueElement={userDetail?.email}/>
        <InfoElement name={"Password"} valueElement={"*******"} border={false}/>

      </section>
    </div>
  );
}

export default PersonalInfo;
