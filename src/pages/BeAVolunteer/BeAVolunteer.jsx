import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import "./style.css";
import Title from "../../components/Title";

const BeAVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [postId, setPostId] = useState("");
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

  const { id } = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const { data } = await axiosCommon.get(`volunteers/s/${id}`);

      const {
        _id,
        volunteer,
        name,
        email,
        deadline,
        category,
        title,
        description,
        thumbnail,
        location,
      } = data || {};

      setStartDate(deadline);
      setPostId(_id);

      return {
        volunteer,
        organizer_info: { organizer_name: name, organizer_email: email },
        category,
        title,
        description,
        thumbnail,
        location,
        suggestion: "",
      };
    },
  });

  const handleRequestVolunteer = async (data) => {
    // console.log(data);
    const organizerEmail = data.organizer_info?.organizer_email;
    const volunteerEmail = data.volunteer_info?.volunteer_email;

    if (organizerEmail === volunteerEmail) {
      return toast.error("Action not permitted!");
    }

    const volunteerReqData = {
      ...data,
      deadline: startDate,
      postId,
      status: "requested",
    };

    try {
      const { data } = await axiosCommon.post("/requests", volunteerReqData);
      // console.log(data);
      if (data.insertedId) {
        toast.success("Request successful");
      }
      if (data.message) {
        toast.error("No need volunteer!");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data);
      }
      console.error(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 px-4 lg:px-0 ">
      <Title title={'Be A Volunteer'}/>
      <div className="max-w-4xl px-4 pt-8 pb-4 md:p-8 mx-auto  border border-slate-300 rounded-md">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl  text-center capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Be a
          </span>{" "}
          volunteer
        </h1>

        <form onSubmit={handleSubmit(handleRequestVolunteer)} noValidate>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="organizer_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Organizer Name
              </label>
              <input
                {...register("organizer_info.organizer_name")}
                type="text"
                id="organizer_name"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="organizer_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Organizer Email
              </label>
              <input
                {...register("organizer_info.organizer_email")}
                type="email"
                id="organizer_email"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="@email"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Volunteer Name
              </label>
              <input
                {...register("volunteer_info.volunteer_name")}
                type="text"
                id="volunteer_name"
                readOnly
                defaultValue={user?.displayName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Volunteer Email
              </label>
              <input
                {...register("volunteer_info.volunteer_email")}
                type="email"
                id="volunteer_email"
                readOnly
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="title"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                {...register("description")}
                type="text"
                id="description"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="description"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                {...register("category")}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:dark:bg-gray-700 disabled:dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social-Service">Social Service</option>
                <option value="Animal-Welfare">Animal Welfare</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                id="location"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="location"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No. Of Volunteer
              </label>
              <input
                type="number"
                name="volunteer"
                id="volunteer"
                {...register("volunteer", { valueAsNumber: true })}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="No of volunteer needed"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Deadline
              </label>
              <DatePicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                readOnly
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="suggestion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Suggestion
              </label>
              <input
                {...register("suggestion")}
                type="text"
                id="suggestion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="suggestion here"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="thumbnail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thumbnail
              </label>
              <input
                {...register("thumbnail")}
                type="url"
                id="thumbnail"
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="thumbnail"
              />
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 w-full uppercase text-sm transition-colors duration-300"
            >
              request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BeAVolunteer;
