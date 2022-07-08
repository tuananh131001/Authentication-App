import React from "react";
import { MdEmail, MdLock } from "react-icons/md";

function Form({ register, handleSubmit, onSubmit }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex items-center gap-2 p-2 border border-gray-400 rounded-md">
        <MdEmail className=" text-gray-500 text-2xl"></MdEmail>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className=" border-0"
          {...register("email")}
        />
      </div>
      <div className="flex items-center border-gray-400 gap-2 p-2 border rounded-md">
        <MdLock className="text-gray-500 text-2xl"></MdLock>
        <input
          className=" border-0"
          type="text"
          placeholder="Password"
          {...register("password")}
        />
      </div>

      <button className=" bg-blue-500 text-white py-1 px-2 rounded-md">
        Login
      </button>
    </form>
  );
}

export default Form;
