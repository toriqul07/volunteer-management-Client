import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Title from "../../components/Title";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import "./style.css";

const AddVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
    },
  });

  const handleAddPost = async (data) => {
    if (startDate.getTime() < new Date().getTime()) {
      return toast.error("Date must be bigger than todays date! ");
    }

    const volunteerData = {
      ...data,
      deadline: startDate,
    };

    // console.table(volunteerData);

    try {
      const { data } = await axiosCommon.post("/add-volunteer", volunteerData);

      if (data.insertedId) {
        toast.success("Your post added!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-800 lg:px-0 ">
      <Title title={"Update Volunteer Post"} />
      <div className="md:max-w-4xl px-4 pt-8 pb-4 md:p-8 mx-auto  border border-slate-300 rounded-md w-full">
        <h1 className="mb-8 text-[clamp(30px,5vw,48px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Add
          </span>{" "}
          Post
        </h1>

        <form onSubmit={handleSubmit(handleAddPost)} noValidate>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                readOnly
                {...register("name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                readOnly
                {...register("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="@email"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
                {...register("volunteer", { valueAsNumber: true })}
                type="number"
                id="volunteer"
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
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="thumbnail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Thumbnail
            </label>
            <input
              type="url"
              id="thumbnail"
              {...register("thumbnail")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="thumbnail"
            />
          </div>
          <div className="pt-8">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 w-full uppercase text-sm transition-colors duration-300"
            >
              add post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddVolunteerPost;
