import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="px-6 md:px-[100px] w-full bg-white flex fixed flex-row h-24 items-center z-[1]">
        <Image
          src="/assets/logo.png"
          width={144}
          height={48}
          alt="AudaIQ Logo in Blue"
        ></Image>

        <div className="hidden md:block ml-48 font-normal text-normal text-black">
          <a href="">About</a>
          <a className="ml-24" href="">
            Pricing
          </a>
          <a className="ml-24" href="">
            Contact
          </a>
        </div>

        <div className="ml-auto justify-self-end">
          <button className="hidden md:inline bg-[#2E97C1] py-2 px-6 rounded-full">
            Login
          </button>
          <button className="bg-black text-white ml-6 py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
