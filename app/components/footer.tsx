import Image from "next/image";

export default function Features() {
  return (
    <div className="px-[10%] md:px-[100px] pt-12 pb-24 flex flex-col md:flex-row flex-wrap justify-center">
      <a href="#top">
        <Image
          src="/assets/logo-w.png"
          width={144}
          height={48}
          alt="AudaIQ Logo in Blue"
        ></Image>
      </a>

      <div className="md:ml-48 mt-12 md:mt-0 flex flex-col gap-3 md:flex-row md:gap-16 md:items-center font-normal text-normal text-white">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>

      <p className="flex items-center mt-12 md:mt-0 md:ml-auto md:justify-self-end align-middle">
        Copyright© AudaIQ 2023
      </p>

      <a className="capitalize mt-24 text-center w-full" href="#top">
        Back to top ↑
      </a>
    </div>
  );
}
