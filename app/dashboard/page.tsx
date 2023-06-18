"use client";
import Post from "../components/post";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import Topic from "../components/topic";
import Sentimentbar from "../components/sentimentbar";
import useDashboard from "../hooks/useDashboard";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

export default function Dashboard() {

  const dashboard = useDashboard()
  
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Instagram",
        data: [30, 22, 17, 37, 42, 55, 67],
        borderColor: "#C536AD",
        pointBorderColor: "#C536AD",
        backgroundColor: "rgba(197, 54, 173, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Twitter",
        data: [50, 12, 45, 67, 12, 35, 67],
        borderColor: "#2D9CDB",
        pointBorderColor: "#2D9CDB",
        backgroundColor: "rgba(45, 156, 219, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Overall",
        data: [50, 37, 18, 25, 59, 85, 79],
        borderColor: "#FFF",
        pointBorderColor: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        color: "#fff",
        ticks: {
          color: "#FFF",
        },
      },
      x: {
        ticks: {
          color: "#FFF",
        },
      },
    },
  };

  return (
    <div>
      <div className="px-12 grid grid-cols-3 gap-6 pb-12">
        <div className="col-span-3 flex flex-col lg:col-span-2 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Sentiment Overview</h3>
            <a href="" className="text-xs capitalize text-right">
              view full
            </a>
          </div>
          <Line
            data={data}
            options={options}
            className="max-h-[240px] w-auto"
          ></Line>
        </div>

        <div className="col-span-3 lg:col-span-1 min-w-330 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Sentiment by Channel</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <Sentimentbar site="weibo" change="+3" value={78} />
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Trending Topics</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>

          <div className="flex flex-row justify-between text-xs font-normal px-6">
            <p className="mr-28">Topic</p>
            <p>Popularity</p>
            <p>Type</p>
            <p>Impact</p>
          </div>

          <Topic
            topic="‘created by’ database property"
            popularity={98}
            type="feature"
            impact="high"
          />

          <Topic
            topic="‘created by’ database property"
            popularity={98}
            type="feature"
            impact="high"
          />
        </div>

        <div className="col-span-3 lg:col-span-1 h-[340px] rounded-[36px] bg-black p-6">
          <div className="flex flex-row justify-between items-baseline mb-6">
            <h3 className="text-xl font-medium">Key Posts</h3>
            <a href="" className="text-xs capitalize text-right">
              view all
            </a>
          </div>

          <Post
            site="facebook"
            url="instagram.com"
            sub="@typeoneerror"
            caption="Oh lala. You can now default a Person property to `Created by`. This is so slick and killer for ..."
          />
        </div>
      </div>
    </div>
  );
}
