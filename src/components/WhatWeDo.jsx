import WhatWeDoCard from "./WhatWeDoCard";

const WhatWeDo = () => {
  return (
    <div>
      <div>
        <h1 className=" text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize max-w-3xl mx-auto">
          Join us and make the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            World cleaner
          </span>{" "}
          and better with our team
        </h1>
        <p className="text-center mt-3 max-w-2xl mx-auto text-gray-800 dark:text-gray-400">
          We stand for using natural energy resources, which are solar and wind
          energy. It’ really ensures all people’s needs in electricity. It’s
          very affordable and easy to use, so every person can make its impact
          to planet saving.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          alignItems: "center",
          gap: "26px",
        }}
        className="mt-10"
      >
        <WhatWeDoCard
          title={"Become a Volunteer"}
          desc={
            "If you are a person who supports our ideas and wants to make his  utmost contribution, we welcome you!"
          }
          img="https://i.ibb.co/zXzFZVK/volunteer-3045363.png"
        ></WhatWeDoCard>

        <WhatWeDoCard
          title={"Take Part in Event"}
          desc={
            "Every person can participate in our charity event. We value your impact to our projects and appreciate your help."
          }
          img={"https://i.ibb.co/VSgD4Mz/calendar-7529791.png"}
        ></WhatWeDoCard>
        <WhatWeDoCard
          title={"Support a Campaign"}
          desc={
            "You can support any of our campaigns by either your personal participation or any donation."
          }
          img={"https://i.ibb.co/vdXPpKV/campaign-3867673.png"}
        ></WhatWeDoCard>
        <WhatWeDoCard
          title={"General Donation"}
          desc={
            "Our organization expand the ideas of saving world’s ecology and is grateful for every little donation!"
          }
          img={"https://i.ibb.co/RDPCP97/donate-3430447.png"}
        ></WhatWeDoCard>
      </div>
    </div>
  );
};

export default WhatWeDo;
