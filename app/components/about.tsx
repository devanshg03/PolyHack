import Image from "next/image";

export default function About() {
  return (
    <div className="w-full px-[10%] md:px-[144px] bg-white pb-24">
      <div className="text-center">
        <h4 className="text-[#1446A0] font-bold text-3xl md:text-4xl">
          Managing a brand across platforms is hard.
        </h4>
        <p className="mt-3 text-black text-normal md:text-2xl">
          It’s why we built an all-in-one platform that helps you identify,
          manage and track how your audience perceives your brand across
          platforms.
        </p>
      </div>
      <a id="about" className="relative mt-[-96px] block invisible">
        a
      </a>
      <div className="mt-48 w-full flex flex-col md:flex-row items-center">
        <div className="md:w-6/12">
          <h5 className="text-2xl md:text-4xl font-bold text-[#1446A0] capitalize">
            Improved Corporate Decision-making
          </h5>
          <p className="mt-3 text-black text-normal md:text-xl mb-6">
            AudaIQ provides significant insights into client mood by analyzing
            social media conversations about a company and gives feedback
            enabling them to form better judgements regarding product
            development, customer service, and marketing.
          </p>
          <a className="text-black" href="">
            Learn More →
          </a>
        </div>

        <div className="mt-12 md:mt-0 md:ml-24 h-[550px] w-[550px] relative rounded-xl">
          <Image
            className="rounded-[36px]"
            src="/assets/decision.jpeg"
            alt="a team making decisions"
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </div>

      <div className="mt-24 w-full flex flex-col md:flex-row items-center">
        <div className="h-[550px] w-[550px] relative rounded-xl">
          <Image
            className="rounded-[36px]"
            src="/assets/engagement.jpg"
            alt="a team making decisions"
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>

        <div className="mt-12 md:mt-0 md:ml-24 md:w-6/12">
          <h5 className="text-2xl md:text-4xl font-bold text-[#1446A0] capitalize">
            Improved Brand Engagement
          </h5>
          <p className="mt-3 text-black text-normal md:text-xl mb-6">
            Your customers will have a better experience interacting with your
            brand on social media when you are able to tailor to their needs and
            expectations. AudaIQ improves their overall social media experience,
            reducing anxiety and elevating overall mental health.
          </p>
          <a className="text-black" href="">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
