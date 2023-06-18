import Dashnav from "../components/dashnav";
import Sidebar from "../components/sidebar";
import React from "react";
import { usePathname } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser()

  return (
    <>
      <div className="flex flex-row">
        <Sidebar/>
        <div className="bg-[#DDE7F9] w-full">
          <Dashnav currentUser={currentUser}/>
          {children}
        </div>
      </div>
    </>
  );
}
