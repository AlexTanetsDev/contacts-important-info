"use client";

import { useState, useEffect, useRef } from "react";
import { IoMdCreate, IoIosClose } from "react-icons/io";
import Avatar from "./Avatar";

type Props = {
  modalToggler: () => void;
};

function UserModal({ modalToggler }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: { code: string }) => {
      if (e.code === "Escape") {
        modalToggler();
      }
    };

    const handleClick = (e: { target: any }) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        modalToggler();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick, true);
    };
  }, [modalToggler]);

  return (
    <div
      className=" absolute right-4 top-[60px] flex w-52 justify-center rounded-xl bg-slate-400 p-3"
      ref={tooltipRef}
    >
      <span
        className=" absolute right-[6px] top-[6px] z-20 rounded-full bg-slate-200 p-[1px]"
        onClick={() => modalToggler()}
      >
        <IoIosClose size={20} />
      </span>

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
