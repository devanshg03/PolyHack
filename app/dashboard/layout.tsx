import Dashnav from "../components/dashnav";
import Sidebar from "../components/sidebar";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import NotAvailableModal from "../components/modals/NotAvailableModal";

export default async function Layout({ children }: { children: React.ReactNode}) {

  const currentUser = await getCurrentUser()

  return (
    <>
      <NotAvailableModal/>
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
