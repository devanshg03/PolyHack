import Image from "next/image";

export default function Main() {
  return (
    <div className="pt-24 w-full px-[10%] md:px-[50px] bg-white pb-24 flex justify-center ">
      <div className="bg-[#1446A0] rounded-[36px] min-h-[600px] md:h-[600px] max-w-[1440px] flex flex-col md:flex-row">
        <div className="py-12 md:py-0 flex h-full flex-col justify-center px-[24px]">
          <h4 className="uppercase">Social Sentiment Analytics</h4>
          <h2 className="mt-12 capitalize text-3xl md:text-5xl font-bold">
            Elevating Brands with AI Social Sentiment Insights
          </h2>
          <p className="mt-1 max-w-[600px]">
            We continuously monitors customer conversations and sentiment across
            channels to spot problems and opportunities in real time.
          </p>
          <a href="">
            <div className="mt-12 flex flex-row justify-between max-w-[600px] border-b-2">
              <p className="uppercase">book a demo</p>
              <img className="h-[22px]" src="/assets/mail.svg" alt="" />
            </div>
          </a>
        </div>

        <div className="w-full min-h-[40vh] md:h-full relative">
          <Image
            className="rounded-[36px]"
            src="/assets/banner.png"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Man"
          ></Image>
        </div>
      </div>
    </div>
  );
}
