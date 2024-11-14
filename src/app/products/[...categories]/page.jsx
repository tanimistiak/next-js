"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Categories({ params }) {
  const router = useRouter();
  const pathName = usePathname();
  //   console.log(params?.categories);
  console.log(router);
  //   console.log(slug);
  return <div></div>;
}
