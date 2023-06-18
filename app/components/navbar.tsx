'use client'
import Image from "next/image";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";
import useOnBoardModal from "../hooks/useOnBoardModal";

interface NavBarProps{
  currentUser?: SafeUser | null
}

const Navbar:React.FC<NavBarProps> = ({
  currentUser
}) => {
  
  const loginModal = useLoginModal()
  const onBoardModal = useOnBoardModal()

  return (
    <>
      <nav className="px-6 md:px-[100px] w-full bg-white flex fixed flex-row h-24 items-center z-[1]">
        <a href="/">
          <Image
            src="/assets/logo.png"
            width={144}
            height={48}
            alt="AudaIQ Logo in Blue"
          ></Image>
        </a>

        <div className="hidden md:block ml-48 font-normal text-normal text-black">
          <a href="#about">About</a>
          <a className="ml-24" href="#features">
            Features
          </a>
          <a className="ml-24" href="#pricing">
            Pricing
          </a>
        </div>

        <div className="ml-auto justify-self-end">
          {currentUser?
           <button className="bg-black text-white ml-6 py-2 px-6 rounded-full" onClick={onBoardModal.onOpen}>
            Dashboard
          </button>:
          <button className="bg-black text-white ml-6 py-2 px-6 rounded-full" onClick={loginModal.onOpen}>
            Login
          </button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar
