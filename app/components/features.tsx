import Image from "next/image";

export default function Features() {
  return (
    <div id="features" className="w-full bg-[#DDE7F9] py-24">
      <a id="about" className="relative mt-[-96px] block invisible">
        a
      </a>
      <div className="mt-24 text-center px-[10%] md:px-[144px]">
        <h4 className="text-black font-bold text-2xl md:text-4xl mb-12">
          We handle every aspect of your social sentiment. We don’t just
          simplify it, we handle it the complete process.
        </h4>
        <a className="text-black" href="">
          Learn More →
        </a>
      </div>

      <div className="mt-12 px-[10%] md:px-[50px] flex flex-col items-center sm:items-center md:flex-row md:justify-center gap-6">
        <div className="rounded-[36px] bg-white max-w-[430px] pt-12 pb-16 px-12 flex flex-col items-center">
          <Image
            src="/assets/audaiq.png"
            width={128}
            height={128}
            alt="AudaIQ"
          ></Image>
          <h6 className="mt-12 self-start text-xl md:text-2xl font-bold text-[#1446A0]">
            AudaIQ
          </h6>
          <p className="mt-3 text-black">
            A comprehensive metric that tracks the public sentiment across
            channels over the last 24 hours.
          </p>
        </div>

        <div className="rounded-[36px] bg-white max-w-[430px] pt-12 pb-16 px-12 flex flex-col items-center">
          <Image
            src="/assets/audaiq.png"
            width={128}
            height={128}
            alt="AudaIQ"
          ></Image>
          <h6 className="mt-12 self-start text-xl md:text-2xl font-bold text-[#1446A0]">
            Trends & feedback
          </h6>
          <p className="mt-3 text-black">
            A curation of the top discussion topics from the target audience and
            useful customer feedback on features.
          </p>
        </div>

        <div className="rounded-[36px] bg-white max-w-[430px] pt-12 pb-16 px-12 flex flex-col items-center">
          <Image
            src="/assets/audaiq.png"
            width={128}
            height={128}
            alt="AudaIQ"
          ></Image>
          <h6 className="mt-12 self-start text-xl md:text-2xl font-bold text-[#1446A0]">
            Actionable-insights
          </h6>
          <p className="mt-3 text-black">
            Real-time alerts and insights on helping dissatisfied customers or
            to capitalize on opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
