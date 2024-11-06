import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const VolunteerPostDetails = () => {
  const axiosCommon = useAxiosCommon();

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["volunteers-details"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(`volunteers/s/${id}`);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  const {
  _id,
    title,
    thumbnail,
    description,
    deadline,
    category,
    location,
    volunteer,
    name,
    email,
  } = data || {};

  return (
    <div className="container">
      <Title title={"Volunteer Post Details"} />
      <div className="max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <figure>
          <img
            className="rounded-t-lg w-full object-cover object-center h-[380px]"
            src={thumbnail}
            alt=""
          />
        </figure>
        <div className="p-5">
          <div className="flex items-center justify-between flex-wrap mb-4">
            <h1 className="text-[clamp(24px,4vw,40px)] font-extrabold text-gray-800 dark:text-white   text-center capitalize">
              <span>{title}</span>
            </h1>
          </div>

          {/*        
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" /> */}
          <div className="space-y-3">
            <p className="dark:text-gray-300 text-gray-700 capitalize">
              <span className="text-lg font-medium">Category:</span> {category}
            </p>
            <p className="dark:text-gray-300 text-gray-700 capitalize">
              <span className="text-lg font-medium ">Location:</span> {location}
            </p>
            <p className="dark:text-gray-300 text-gray-700 capitalize flex items-center gap-2">
              <span className="text-lg font-medium ">volunteer needed:</span>{" "}
              <span className="bg-pink-100/60 text-pink-800 text-sm font-bold px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                {volunteer}
              </span>
            </p>
          </div>

          <p className="font-normal text-gray-700 dark:text-gray-400 mt-4">
            <span className="font-medium dark:text-gray-300">Description:</span>{" "}
            {description}
          </p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="mt-4">
            <h4 className="text-gray-700 dark:text-gray-300 text-lg capitalize font-medium">
              Organizer Info
            </h4>
            <p className="dark:text-gray-300 text-gray-700 capitalize text-sm mt-2">
              <span className=" font-medium ">Name:</span> {name}
            </p>
            <p className="dark:text-gray-300 text-gray-700 capitalize text-sm mt-2">
              <span className=" font-medium ">Name:</span> {email}
            </p>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="flex items-center justify-between flex-wrap">
            <Link to={`/be-a-volunteer/${_id}`}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase"
              >
                Be a volunteer
              </button>
            </Link>
            <p className="dark:text-white text-gray-700 text-sm font-semibold border border-pink-500 px-3 py-1 rounded-full">
              {new Date(deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
VolunteerPostDetails;
export default VolunteerPostDetails;
