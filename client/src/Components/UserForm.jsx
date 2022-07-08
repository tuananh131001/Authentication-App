import { updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../firebase-config";

function UserForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    updateProfile(auth.currentUser, {
      name: data.name,
      bio: data.bio
    })
      .then(() => {
        console.log("Profile udpated");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Change Info</h1>
      <p>Changes will be reflected to every services</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="text"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Bio</label>
          <textarea placeholder="Bio" {...register("bio")} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="Phone" {...register("phone")} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" {...register("email")} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" {...register("password")} />
        </div>

        <button className=" bg-blue-500 text-white py-1 px-2 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserForm;
