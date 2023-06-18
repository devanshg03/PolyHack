import Post from "../components/post";

export default function Dashboard() {
  return (
    <div>
      <div className="px-12 grid grid-cols-3 gap-6 pb-12">
        <div className="col-span-3 lg:col-span-2 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Sentiment Overview</h3>
            <a href="" className="text-xs capitalize text-right">
              view full
            </a>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1 min-w-330 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Sentiment by Channel</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Trending Topics</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Key Posts</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>

          <Post
            site="twitter"
            url="twitter.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />
        </div>
      </div>
    </div>
  );
}
