import Image from "next/image";

interface DashnavProps {
  currentRoute?: string;
}

export default function Dashnav({ currentRoute }: DashnavProps) {
  return (
    <div className="w-full h-24 px-12 flex flex-row items-center justify-end">
      <h2 className="text-3xl font-bold text-black justify-self-start mr-auto">
        {currentRoute}
      </h2>
      <button className="bg-black py-2 px-6 rounded-full mr-6">
        Export Report
      </button>
      <div className="flex flex-row gap-3">
        <Image
          src="/assets/user.png"
          width={36}
          height={36}
          alt="user profile"
        ></Image>
        <p className="flex items-center text-black">Notion Team</p>
      </div>
    </div>
  );
}
