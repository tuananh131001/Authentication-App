import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import {
  signInWithGoogle,
  signInWithGithub,
  signInWithFacebook,
  signInWithTwitter,
} from "../firebase-config";
function ProviderLogin() {
  return (
    <>
      {" "}
      <figure className="flex items-center justify-center gap-4 ">
        <figure
          onClick={signInWithGoogle}
          className=" hover:cursor-pointer hover:bg-blue-200 rounded-full border border-gray-400 p-2  "
        >
          <FaGoogle className="text-gray-500 "></FaGoogle>
        </figure>
        <figure
          onClick={signInWithFacebook}
          className="hover:cursor-pointer rounded-full border border-gray-400 p-2  hover:bg-blue-200"
        >
          <FaFacebook className="text-gray-500 "></FaFacebook>
        </figure>
        <figure
          onClick={signInWithTwitter}
          className="hover:cursor-pointer rounded-full border border-gray-400 p-2  hover:bg-blue-200 "
        >
          <FaTwitter className="text-gray-500 "></FaTwitter>
        </figure>
        <figure
          onClick={signInWithGithub}
          className="hover:cursor-pointer rounded-full border border-gray-400 p-2  hover:bg-blue-200"
        >
          <FaGithub className="text-gray-500 "></FaGithub>
        </figure>
      </figure>
    </>
  );
}

export default ProviderLogin;
