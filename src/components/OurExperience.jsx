import ExperienceCard from "./ExperienceCard";

const OurExperience = () => {
  return (
    <div>
      <div>
        <h1 className="text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Check our
          </span>{" "}
          spectrum of <br /> experiences
        </h1>
        <p className="text-center mt-3 max-w-2xl mx-auto text-gray-800 dark:text-gray-400">
          Immerse yourself in a vibrant array of volunteer experiences tailored
          to match your interests, skills, and passions. From community outreach
          to environmental conservation, our spectrum of opportunities offers
          something for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ExperienceCard
          title={"Volunteering in Hospitals"}
          desc={
            "Many Trusts have a voluntary service manager for co-ordinating volunteers."
          }
        >
          <div className="mb-1 text-lg font-medium text-red-700 dark:text-red-500">
            90%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
              style={{ width: "90%" }}
            />
          </div>
        </ExperienceCard>

        <ExperienceCard
          title={"Community project"}
          desc={"Tasks like helping with community-based recycling scheme"}
        >
          <div className="mb-1 text-lg font-medium text-green-700 dark:text-green-500">
            71%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
              style={{ width: "71%" }}
            />
          </div>
        </ExperienceCard>

        <ExperienceCard
          title={"Disaster Volunteering"}
          desc={"Organizing resources to lessen the harm that disasters cause."}
        >
          <div className="mb-1 text-lg font-medium text-yellow-700 dark:text-yellow-500">
            80%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-yellow-400 h-2.5 rounded-full"
              style={{ width: "80%" }}
            />
          </div>
        </ExperienceCard>
        <ExperienceCard
          title={"Work with animals"}
          desc={
            "Duties like looking after injured animals, monitoring local wildlife."
          }
        >
          <div className="mb-1 font-medium text-blue-700 dark:text-blue-500 text-lg">
            70%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "70%" }}
            />
          </div>
        </ExperienceCard>

        <ExperienceCard
          title={"Sports Volunteering"}
          desc={
            "Volunteers in this field may do tasks on average two or three hours a week."
          }
        >
          <div className="mb-1 text-lg font-medium text-indigo-700 dark:text-indigo-500">
            85%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
              style={{ width: "85%" }}
            />
          </div>
        </ExperienceCard>

        <ExperienceCard
          title={"Green Volunteering"}
          desc={
            "wildlife conservation, environmental education, supporting international aid"
          }
        >
          <div className="mb-1 text-lg font-medium text-purple-700 dark:text-purple-500">
            65%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
              style={{ width: "65%" }}
            />
          </div>
        </ExperienceCard>
      </div>
    </div>
  );
};

export default OurExperience;
