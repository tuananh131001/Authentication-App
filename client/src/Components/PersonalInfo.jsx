import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../firebase-config";
import { UserContext } from "../utils/UserContext";

function PersonalInfo({ setIsEdit }) {
  const { user,setUser } = useContext(UserContext);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <h1 className="text-2xl text-center py-2">Personal Info</h1>
      <h2 className="text-center text-sm font-thin">
        Basic info, like your name and photo
      </h2>
      <section className="flex justify-between items-center py-8">
        <div>
          <h1>Profile</h1>
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
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21.8088" cy="21.5981" r="20.5" stroke="#828282" />
          <g clip-path="url(#clip0)">
            <path
              d="M28.7963 13.4419H16.0697C14.6159 13.4419 13.433 14.596 13.433 16.0143V28.4305C13.433 29.8488 14.6159 31.0029 16.0697 31.0029H21.3783V24.7948H19.2689V21.7079H21.3783V19.6157C21.3783 17.9135 22.7976 16.5288 24.5424 16.5288H27.7416V19.6157H24.5424V21.7079H27.7416L27.2142 24.7948H24.5424V31.0029H28.7963C30.25 31.0029 31.433 29.8488 31.433 28.4305V16.0143C31.433 14.596 30.25 13.4419 28.7963 13.4419Z"
              fill="#828282"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="18"
                height="17.561"
                fill="white"
                transform="translate(13.433 13.4419)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex items-center  border-b py-8 justify-between text-gray-300">
        <h1>NAME:</h1>
        <h1>{user?.name}</h1>
      </div>
      <div className="flex items-center  border-b py-8 justify-between text-gray-300">
        <h1>BIO</h1>
        <h1>{user?.bio}</h1>
      </div>
      <div className="flex items-center  border-b py-8 justify-between ">
        <h1 className="text-gray-300">EMAIL</h1>
        <h1>{user?.email}</h1>
      </div>
    </div>
  );
}

export default PersonalInfo;
