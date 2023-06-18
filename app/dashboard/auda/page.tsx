import Sentimentbar from "@/app/components/sentimentbar";

export default function audaiq() {
  return (
    <div className="px-12 grid grid-cols-3 gap-6 pb-12">
      <div className="col-span-3 lg:col-span-2 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment Overview</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>
      </div>

      <div className="col-span-3 lg:col-span-1 min-w-330 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment by Channel</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <Sentimentbar site="twitter" change="+3" value={22} />
          <Sentimentbar site="instagram" change="+3" value={78} />
          <Sentimentbar site="facebook" change="+3" value={78} />
          <Sentimentbar site="reddit" change="+3" value={78} />
          <Sentimentbar site="youtube" change="+3" value={78} />
          <Sentimentbar site="linkedin" change="+3" value={78} />
          <Sentimentbar site="tiktok" change="+3" value={78} />
          <Sentimentbar site="weibo" change="+3" value={78} />
          <Sentimentbar site="wechat" change="+3" value={78} />
        </div>
      </div>
    </div>
  );
}
