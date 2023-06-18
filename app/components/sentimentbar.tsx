interface BarProps {
  site: string;
  value: number;
  change: string;
}

export default function Sentimentbar({ site, value, change }: BarProps) {
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
    case "youtube":
      postAccent = "#E6162D";
      break;
    case "wechat":
      postAccent = "#09B83E";
      break;
    case "linkedin":
      postAccent = "#0077B5";
      break;
    case "weibo":
      postAccent = "#E6162D";
      break;
    case "tiktok":
      postAccent = "#25F4EE";
      break;
  }

  return (
    <div>
      <div className="flex flex-row justify-between text-sm font-normal">
        <p className="capitalize">{site}</p>
        <p>{change}%</p>
      </div>

      <div className="flex mt-2 flex-row justify-between w-full items-center">
        <div
          className={`bg-[${postAccent}] bg-white bg-opacity-30 h-3 w-full rounded-full`}
        >
          <div
            className={`bg-[${postAccent}] bg-white h-3 w-[${value}%] rounded-full`}
            style={{ backgroundColor: postAccent, width: `${value}%` }}
          ></div>
        </div>
        <p className="text-xs ml-3">{value}</p>
      </div>
    </div>
  );
}
