"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import UserModal from "./UserModal";
import { useState } from "react";

function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isloggedIn = true;

  const handleModalTogle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <header className=" relative bg-slate-400 px-6 py-2">
      <nav className=" flex items-center justify-between">
        <Link
          href="/"
          className=" h-8 rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
        >
          Home
        </Link>
        {isloggedIn && (
          <div className="flex items-center gap-2">
            <Link
              href="/add-contacts"
              className="h-8 rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
            >
              Add contact
            </Link>
            <Link
              href="/contacts"
              className="h-8 rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
            >
              Contacts
            </Link>
            <span
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="
              cursor-pointer"
            >
              <Avatar size={30} />
            </span>
          </div>
        )}
      </nav>
      {isModalOpen && <UserModal modalToggler={handleModalTogle} />}
    </header>
  );
}

export default AppBar;
