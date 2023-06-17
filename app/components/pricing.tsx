export default function Pricing() {
  return (
    <div className="py-24 bg-white text-center">
      <h4 className="text-black px-[10%]md:px-24 font-bold text-3xl md:text-4xl mb-6">
        Pricing
      </h4>
      <p className="text-black px-[10%] md:px-24">
        Scalable plans and features to unlock the full potential of social
        listening for brands of any size, from our simple Entry plan to our
        tailored Pro solution. 14-day free trial so you can decide what's right
        for you
      </p>

      <div className="w-full mt-12 px-[10%] md:px-[50px] flex flex-col items-center md:items-start md:flex-row md:justify-center gap-6">
        <div className="rounded-[36px] bg-[#DDE7F9] max-w-[430px] px-12 py-12 md:py-24 flex flex-col text-left">
          <h6 className="self-start text-xl font-bold text-black">
            Essentials
          </h6>
          <p className="mt-6 text-4xl md:text-6xl text-black font-bold">
            $99<span className="text-2xl font-normal">/month</span>
          </p>
          <p className="mt-6 text-black">
            + Real-time monitoring of keywords, topics and trend <br /> + Basic
            sentiment analysis <br /> + Weekly summary reports <br /> + Limited
            account support
          </p>
        </div>

        <div className="rounded-[36px] bg-[#DDE7F9] max-w-[430px] px-12 py-12 md:py-24 flex flex-col text-left">
          <h6 className="self-start text-xl font-bold text-black">Pro</h6>
          <p className="mt-6 text-4xl md:text-6xl text-black font-bold">
            $199<span className="text-2xl font-normal">/month</span>
          </p>
          <p className="mt-6 text-black">
            <span className="font-bold">All Entry plan features, plus:</span>
            <br />
            + Custom topic and keyword filters
            <br />
            + Benchmarking against competitors
            <br />
            + Custom reports with breakdowns
            <br />
            + Identification of influential accounts and trending posts
            <br />+ Priority account support
          </p>
        </div>
      </div>
    </div>
  );
}
