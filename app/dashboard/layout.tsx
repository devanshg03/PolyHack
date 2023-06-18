"use client";
import Dashnav from "../components/dashnav";
import Sidebar from "../components/sidebar";
import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  let router = usePathname().split("/").pop();

  switch (router) {
    case "dashboard":
      router = "Home";
      break;
    case "auda":
      router = "AudaIQ Score";
      break;
    case "keys":
      router = "Key Topics / Trends";
      break;
  }

  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="bg-[#DDE7F9] w-full">
          <Dashnav currentRoute={router} />
          {children}
        </div>
      </div>
    </>
  );
}
