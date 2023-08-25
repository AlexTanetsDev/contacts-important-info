import Link from "next/link";

function AppBar() {
  return (
    <header className=" h-12 bg-slate-400 p-2 ">
      <nav className=" flex justify-between">
        <Link
          href="/"
          className=" rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
        >
          Home
        </Link>
        <div className="flex gap-2">
          <Link
            href="/add-contacts"
            className=" rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
          >
            Add contact
          </Link>
          <Link
            href="/contacts"
            className=" rounded-full bg-orange-400 pb-1 pl-2 pr-2 pt-1 text-base text-fuchsia-100 shadow-md"
          >
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppBar;
