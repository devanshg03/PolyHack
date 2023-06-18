import Post from "../../components/post";

export default function keys() {
  return (
    <div className="px-12 grid grid-cols-3 gap-6 pb-12">
      <div className="col-span-3 lg:col-span-2 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment Overview</h3>
          <a href="" className="text-xs capitalize text-right">
            view full
          </a>
        </div>
      </div>

      <div className="col-span-3 lg:col-span-1 min-w-330 h-[680px] rounded-[36px] text-black p-6 overflow-hidden">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment by Channel</h3>
          <a href="" className="text-xs capitalize text-right">
            view all
          </a>
        </div>
        <div className="flex flex-col justify-start items-start gap-6 overflow-scroll max-h-[628px] pb-12">
          <Post
            site="twitter"
            url="twitter.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />

          <Post
            site="twitter"
            url="twitter.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />

          <Post
            site="twitter"
            url="twitter.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />

          <Post
            site="twitter"
            url="twitter.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />

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
