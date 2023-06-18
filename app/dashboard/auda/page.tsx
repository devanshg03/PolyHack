"use client";
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
import Sentimentbar from "@/app/components/sentimentbar";
import useDashboard from "@/app/hooks/useDashboard";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function audaiq() {

  const dashboard = useDashboard()

  console.log(dashboard.company)

  const overalldata = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [50, 37, 18, 25, 59, 85, 79],
        borderColor: "#FFF",
        pointBorderColor: "#FFF",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const twitterdata = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [50, 12, 45, 67, 12, 35, 67],
        borderColor: "#2D9CDB",
        pointBorderColor: "#2D9CDB",
        backgroundColor: "rgba(45, 156, 219, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const instagramdata = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [30, 22, 17, 37, 42, 55, 67],
        borderColor: "#C536AD",
        pointBorderColor: "#C536AD",
        backgroundColor: "rgba(197, 54, 173, 0.2)",
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
    <div className="px-12 grid grid-cols-3 gap-6 pb-12">
      <div className="col-span-3 lg:col-span-2 h-auto rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment Overview</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>

        <p>Overall</p>
        <Line
          data={overalldata}
          options={options}
          className="max-h-[240px] w-auto mt-2 mb-6"
        ></Line>
        <p>Twitter</p>
        <Line
          data={twitterdata}
          options={options}
          className="max-h-[240px] w-auto mt-2 mb-6"
        ></Line>
        <p>Instagram</p>
        <Line
          data={instagramdata}
          options={options}
          className="max-h-[240px] w-auto mt-2 mb-6"
        ></Line>
      </div>

      <div className="col-span-3 lg:col-span-1 min-w-330 h-auto rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment by Channel</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <Sentimentbar site="twitter" change="+3" value={22} />
          <Sentimentbar site="instagram" change="+3" value={22} />
          <Sentimentbar site="facebook" change="+3" value={22} />
          <Sentimentbar site="reddit" change="+3" value={22} />
          <Sentimentbar site="youtube" change="+3" value={22} />
          <Sentimentbar site="linkedin" change="+3" value={22} />
          <Sentimentbar site="tiktok" change="+3" value={22} />
          <Sentimentbar site="weibo" change="+3" value={22} />
          <Sentimentbar site="wechat" change="+3" value={22} />
        </div>
      </div>
    </div>
  );
}
