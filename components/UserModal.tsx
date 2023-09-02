"use client";

import { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import Avatar from "./Avatar";

function UserModal() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className=" absolute right-4 top-[60px] flex w-52 justify-center rounded-xl bg-slate-400 p-3">
      <span className="relative inline-flex">
        <Avatar size={45} />

        <label
          htmlFor="chooseFile"
          className="absolute -bottom-1 -right-0.5 inline-flex cursor-pointer rounded-full bg-slate-300 p-0.5"
        >
          <IoMdCreate size={15} />
        </label>
        <input
          type="file"
          className=" -z-10 h-[0.1px] w-[0.1px] opacity-0"
          id="chooseFile"
        />
      </span>
    </div>
  );
}

export default UserModal;
