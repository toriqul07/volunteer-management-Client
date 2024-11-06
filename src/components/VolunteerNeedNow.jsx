import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";
import VolunteerCard from "./VolunteerCard";
import LoadingSpinner from "./LoadingSpinner";

const VolunteerNeedNow = () => {
  const axiosCommon = useAxiosCommon();

  const { data: volunteers, isPending } = useQuery({
    queryKey: ["volunteers-now"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get("/volunteers-now");
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <div>
        <h1 className=" text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize max-w-3xl mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Instant
          </span>{" "}
          Impact Initiatives
        </h1>
        <p className="text-center mt-3 max-w-2xl mx-auto text-gray-800 dark:text-gray-400">
          Be the change you wish to see in the world! Our Volunteers Needed Now
          section is your gateway to meaningful involvement and impactful
          action. As a volunteer-driven organization
        </p>
      </div>
      {isPending ? (
       <LoadingSpinner height={'40vh'}/>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {volunteers?.map((volunteer) => {
              const { _id } = volunteer;
              return <VolunteerCard key={_id} volunteer={volunteer} />;
            })}
          </div>
          <div className="flex justify-center mt-8">
            <Link to={"/need-volunteer"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
                  See all
                </span>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default VolunteerNeedNow;
