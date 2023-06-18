import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white text-black min-h-screen min-w-[292px] px-3 flex flex-col items-center">
      <Image
        src="/assets/logo.png"
        width={144}
        height={48}
        alt="AudaIQ Logo in Blue"
        className="mt-24"
      ></Image>

      <a href="" className="text-black flex mt-6 p-3 flex-row w-full">
        <img className="mr-3" src="/assets/search.svg" alt="search icon" />
        Search
      </a>

      <h4 className="font-medium uppercase text-sm w-full mt-6">main</h4>

      <a href="/dashboard" className="text-black flex mt-4 p-3 flex-row w-full">
        <img className="mr-3" src="/assets/home.svg" alt="home icon" />
        Home
      </a>

      <a
        href="/dashboard/auda"
        className="text-black flex mt-4 p-3 flex-row w-full"
      >
        <img className="mr-3" src="/assets/bulb.svg" alt="audaiq score icon" />
        AudaIQ Score
      </a>

      <a
        href="/dashboard/keys"
        className="text-black flex mt-4 p-3 flex-row w-full"
      >
        <img className="mr-3" src="/assets/key.svg" alt="key icon" />
        Key Topics / Trends
      </a>

      <h4 className="font-medium uppercase text-sm w-full mt-6">account</h4>

      <a href="" className="text-black flex mt-4 p-3 flex-row w-full">
        <img className="mr-3" src="/assets/account.svg" alt="account icon" />
        Manage Account
      </a>

      <a href="" className="text-black flex mt-4 p-3 flex-row w-full">
        <img className="mr-3" src="/assets/card.svg" alt="credit card icon" />
        Manage Subscription
      </a>
    </div>
  );
}
