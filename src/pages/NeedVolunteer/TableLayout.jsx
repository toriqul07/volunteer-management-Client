import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TableLayout = ({ volunteers }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-scroll">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Deadline
            </th>
            <th scope="col" className="px-6 py-3">
              Volunteer
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {volunteers?.map((volunteer) => {
            const {
              _id,
              title,
              category,
              location,
              deadline,
              volunteer: count,
            } = volunteer;

            return (
              <tr
                key={_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td scope="row" className="px-6 py-4 capitalize">
                  {title}
                </td>
                <td className="px-6 py-4 capitalize">{category}</td>
                <td className="px-6 py-4 capitalize">{location}</td>
                <td className="px-6 py-4 capitalize">
                  {new Date(deadline).toLocaleDateString()}
                </td>
                <td className="px-4 py-4 capitalize text-sm whitespace-nowrap">
                  {count}
                </td>
                <Link  to={`/volunteer-post-details/${_id}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  rounded  px-3 py-1.5 text-center text-xs mt-4"
                  >
                    View Details
                  </button>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TableLayout.propTypes = {
  volunteers: PropTypes.array,
};

export default TableLayout;
