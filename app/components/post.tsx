"use client";
import Image from "next/image";

interface PostProps {
  site: string;
  sub: string;
  url: string;
  caption: string;
}

export default function Post({ site, sub, url, caption }: PostProps) {
  const logoSrc = `/assets/${site}.png`;
  const logoAlt = `${site} logo`;
  let postAccent;

  switch (site) {
    case "twitter":
      postAccent = "#2D9CDB";
      break;
    case "reddit":
      postAccent = "#FF4500";
      break;
    case "instagram":
      postAccent = "#C536AD";
      break;
    case "facebook":
      postAccent = "#1877F2";
      break;
  }

  return (
    <div className="bg-white text-black p-3 rounded-xl flex flex-col gap-1 flex-1">
      <div className="flex flex-row items-center">
        <div className="w-[16px] h-[16px] relative gap-3">
          <Image src={logoSrc} fill={true} alt={logoAlt}></Image>
        </div>
        <p
          className="ml-2 text-sm font-medium capitalize"
          style={{ color: `${postAccent}` }}
        >
          {site}
        </p>
      </div>

      <p className="text-[10px]">{sub}</p>
      <p className="text-xs">{caption}</p>
    </div>
  );
}
