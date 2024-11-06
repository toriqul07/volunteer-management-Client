import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import useAuth from "../../hooks/useAuth";
import { setDataToLs } from "../../utils/localStorage";

const Register = () => {
  const { user, setUser, createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   console.log(errors);

  const onSubmit = async (data) => {
    const { name, email, password, photoUrl } = data || {};
    try {
      const { user } = await createUser(email, password);

      const userInfo = {
        email: name,
        photo: photoUrl,
      };
      setDataToLs(userInfo);

      //update user profile
      await updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      });

      setUser({ ...user, displayName: name, photoURL: photoUrl });

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Title title={"Register"} />
      <div className="flex w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-md shadow-md  lg:max-w-6xl border border-gray-50 ">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2 order-1
          "
          style={{
            backgroundImage: `url('https://i.ibb.co/6yGNmZs/2126914.jpg')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 dark:bg-gray-800">
          <h1 className="mb-8 text-[clamp(30px,5vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
              Register
            </span>{" "}
            Now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required!",
                })}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Enter name"
              />
              {errors && (
                <small className="text-red-500 ml-1">
                  {errors?.name?.message}
                </small>
              )}
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                autoComplete="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                type="email"
                {...register("email", { required: "Email is required!" })}
                placeholder="Enter email"
              />
              {errors && (
                <small className="text-red-500 ml-1">
                  {errors?.email?.message}
                </small>
              )}
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="photoUrl"
              >
                PhotoUrl
              </label>
              <input
                id="photoUrl"
                placeholder="photo url"
                autoComplete="photoUlr"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                type="url"
                {...register("photoUrl")}
              />
              {errors && <small className="text-error ml-1">{""}</small>}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <input
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                type="password"
                {...register("password", {
                  validate: {
                    length: (value) => {
                      return value.length > 5
                        ? true
                        : "Password  must be at least 6 character";
                    },
                    lowercase: (v) => {
                      return (
                        /^(?=.*[a-z]).+$/.test(v) ||
                        "Password must have an lowercase letter"
                      );
                    },
                    uppercase: (v) => {
                      return (
                        /^(?=.*[A-Z]).+$/.test(v) ||
                        "Password must have an uppercase letter"
                      );
                    },
                  },
                })}
              />
              {errors && (
                <small className="text-red-500 ml-1">
                  {errors?.password?.message}
                </small>
              )}
            </div>
            <div className="mt-6 ">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 w-full uppercase text-sm transition-colors duration-300 "
              >
                register
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs dark:text-gray-300 uppercase  hover:underline"
            >
              or login
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
