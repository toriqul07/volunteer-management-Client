import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const { _id, title, thumbnail, category, description, deadline } =
    volunteer || {};
  //   console.log(thumbnail);
  //   console.log(volunteer);
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="relative">
        <img
          referrerPolicy="no-referrer"
          className="rounded-t-lg w-full object-cover h-[260px] text-gray-400"
          src={thumbnail}
          alt="Not found!"
      />
      </figure>

      <div className="p-5 flex flex-col justify-between h-[310px]">
        <div>
          <h4 className="dark:text-gray-200 text-xs mb-2 uppercase font-semibold tracking-wide">
            {category.replace("-", " ")}
          </h4>
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-800 flex items-center gap-2 dark:text-gray-300">
            <span>
              <IoMdTime className="text-2xl" />
            </span>

            <span className="text-sm">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>

          <p className=" mt-4 font-normal text-gray-700 dark:text-gray-400">
            {description.length < 140
              ? description
              : description.substring(0, 135) + "..."}
          </p>
        </div>
        <div className="">
          <Link
            to={`/volunteer-post-details/${_id}`}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
