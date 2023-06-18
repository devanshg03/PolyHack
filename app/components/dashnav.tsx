'use client'
import Image from "next/image";
import { SafeUser } from "../types";
import {usePathname } from "next/navigation";

interface DashnavProps {
  currentUser?:SafeUser | null
}

export default function Dashnav({ currentUser }: DashnavProps) {

  let pathName = usePathname()

  switch (pathName) {
    case "/dashboard":
      pathName = "Home";
      break;
    case "/dashboard/auda":
      pathName = "AudaIQ Score";
      break;
    case "/dashboard/keys":
      pathName = "Key Topics / Trends";
      break;
  }

  return (
    <div className="w-full h-24 px-12 flex flex-row items-center justify-end">
      <h2 className="text-3xl font-bold text-black justify-self-start mr-auto">
        {pathName}
      </h2>
      <div className="flex flex-row gap-3">
        {/* <Image
          src="/assets/user.png"
          width={36}
          height={36}
          alt="user profile"
        ></Image> */}
        <p className="flex items-center text-black">{currentUser?.name}</p>
      </div>
    </div>
  );
}
