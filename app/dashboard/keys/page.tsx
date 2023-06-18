'use client'
import useDashboard from "@/app/hooks/useDashboard";
import Post from "../../components/post";
import Topic from "../../components/topic";
import data from '@/BetterHealthData'

export default function keys() {

  return (
    <div className="px-12 grid grid-cols-3 gap-6 pb-12">
      <div className="col-span-3 lg:col-span-2 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium text-white">Sentiment Overview</h3>
        </div>

        <div className="flex flex-row justify-between text-xs font-normal px-6">
          <p className="mr-28 text-white">Topic</p>
          <p className=" text-white">Popularity</p>
          <p className=" text-white">Type</p>
          <p className=" text-white">Impact</p>
        </div>

        <Topic
          topic="BetterHelp Endorsements"
          popularity={63}
          type="Marketing"
          impact="high"
        />

        <Topic
          topic="Mental Health Awareness"
          popularity={88}
          type="Community"
          impact="high"
        />
      </div>

      <div className="col-span-3 lg:col-span-1 min-w-330 h-[680px] rounded-[36px] text-black p-6 overflow-hidden">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium text-black">Sentiment by Channel</h3>
        </div>
        <div className="flex flex-col justify-start items-start gap-6 overflow-scroll max-h-[628px] pb-12">
          {data.map((tweet)=>{
            return(
              <Post
                site={tweet.site}
                url={tweet.url}
                sub={tweet.sub}
                caption={tweet.caption}
              />
            )
          })}

        </div>
      </div>
    </div>
  );
}
