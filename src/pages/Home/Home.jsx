import OurExperience from "../../components/OurExperience";
import Title from "../../components/Title";
import VolunteerNeedNow from "../../components/VolunteerNeedNow";
import WhatWeDo from "../../components/WhatWeDo";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="container">
      <Title title={"Home"} />
      <div className="mt-20">
        <Banner />
      </div>
      <div className="mt-20">
        <WhatWeDo />
      </div>
      <div className="mt-20">
        <VolunteerNeedNow />
      </div>
      <div className="mt-20">
        <OurExperience />
      </div>
    </div>
  );
};

export default Home;
