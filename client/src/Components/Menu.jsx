import React from "react";
import { MdAccountCircle, MdPeople, MdOutlineExitToApp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Menu() {
  const navigate = useNavigate();

  const signOutFunc = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <section className=" rounded-md shadow-sm absolute flex flex-col gap-5 p-4 right-5 top-12 border-2 bg-white">
      <section className="p-2 flex gap-2 items-center hover:bg-slate-200 hover:rounded-lg">
        <MdAccountCircle className="text-xl"></MdAccountCircle>
        <a href="">My Profile</a>
      </section>

      <section className="p-2 flex gap-2 items-center hover:bg-slate-200 hover:rounded-lg">
        <MdPeople className="text-xl" />
        <a href="">Group Chat</a>
      </section>

      <section className="p-2 text-red-500 flex gap-2 items-center hover:bg-slate-200 hover:rounded-lg">
        {" "}
        <MdOutlineExitToApp className="text-xl"></MdOutlineExitToApp>
        <button
          href=""
          onClick={(x) => {
            signOutFunc();
          }}
        >
          Logout
        </button>
      </section>
    </section>
  );
}

export default Menu;
