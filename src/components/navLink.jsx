"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.url;

  return (
    <Link
      href={link.url}
      className={`relative text-sm font-medium px-1 py-0.5 transition-colors duration-200 ${
        isActive
          ? "text-violet-600"
          : "text-slate-700 hover:text-slate-900"
      }`}
    >
      {link.title}
      {isActive && (
        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-violet-600 rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;
