import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";

const RequestPost = () => {
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const email = localStorage.getItem("userEmail");

  const {
    data: volunteers,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["my-request-volunteers"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/requests/${email}`);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCancelRequest = async (id, postId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosCommon.delete(`/requests/${id}?postId=${postId}`);

          Swal.fire({
            title: "Request cancel!",
            icon: "success",
          });
        }
        // refetch data again for ui update
        refetch();
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-48">
        <svg
          aria-hidden="true"
          className="inline w-10 md:w-16 h-10 md:h-16 text-gray-200 animate-spin dark:text-gray-600 fill-violet-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div>
      {!volunteers?.length > 0 ? (
        <section className="bg-white dark:bg-gray-800  flex items-center justify-center">
          <div className="flex items-center  mx-auto">
            <div className="flex flex-col items-center max-w-md mx-auto text-center">
              <p className="p-3 text-sm font-medium text-pink-500 rounded-full bg-pink-50 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Request not available!
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Sorry, there is no request available now!
              </p>
              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <Link to="/" className="flex justify-center w-full">
                  <button className="relative  inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                      Back To Home
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Deadline
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {volunteers?.map((volunteer) => {
                const {
                  _id,
                  volunteer_info,
                  title,
                  category,
                  deadline,
                  postId,
                } = volunteer;

                return (
                  <tr
                    key={_id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td scope="row" className="px-6 py-4 capitalize">
                      {volunteer_info.volunteer_name}
                    </td>
                    <td scope="row" className="px-6 py-4 capitalize">
                      {volunteer_info.volunteer_email}
                    </td>
                    <td className="px-6 py-4 capitalize">{title}</td>
                    <td className="px-6 py-4 capitalize">{category}</td>
                    <td className="px-6 py-4 capitalize">
                      {new Date(deadline).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 capitalize text-sm whitespace-nowrap">
                      <button
                        onClick={() => handleCancelRequest(_id, postId)}
                        type="button"
                        className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                      >
                        <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Cancel
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestPost;
