"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/service",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  const router = useRouter();

  return (
    <>
      <div className="px-4 bg-red-300 py-4 ">
        <ul className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-5xl">Logo</h1>
          </Link>
          {links?.map((link) => (
            <Link key={link?.path} href={link?.path}>
              <p className={`${pathName === link?.path && "text-cyan-200"}`}>
                {link.title}
              </p>
            </Link>
          ))}
          <button onClick={() => router.push("/login")}>Login</button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
