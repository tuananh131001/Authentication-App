import { updateProfile } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import { MdNavigateBefore } from "react-icons/md";
import Back from "./Back";

function EditForm({setIsEdit}) {
  const { register, handleSubmit } = useForm();
  const { userDetail } = useContext(UserContext);
  const onSubmit = async (data) => {
    setDoc(doc(db, "users", auth.currentUser.uid), {
      name: data.name,
      bio: data.bio,
      email: data.email,
      image: data.image
    })
      .then(() => {
        setIsEdit(false)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col gap-4">
      <Back setIsEdit={setIsEdit}/>
      <main className=" border-2 p-10 flex flex-col gap-4">
        <h1 className=" text-2xl font-semibold">Change Info</h1>
        <p>Changes will be reflected to every services</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 rounded-lg">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="text"
              defaultValue={userDetail.name}
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Bio</label>
            <textarea placeholder="Bio" defaultValue={userDetail.bio} {...register("bio")} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              defaultValue={userDetail.email}
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">IMAGE</label>
            <input
              type="text"
              placeholder="Image"
              defaultValue={userDetail.image}
              {...register("image")}
            />
          </div>

          <button className=" bg-blue-500 text-white py-1 px-2 rounded-md w-24">
            Save
          </button>
        </form>
      </main>
    </div>
  );
}

export default EditForm;
