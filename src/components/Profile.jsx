import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { LuFileEdit } from "react-icons/lu";
import { MdSave } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";
const Profile = () => {
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [isImageSelect, setIsImageSelect] = useState(false);

  const { user, reload, loading, setReload, updateUserProfile, resetPassword } =
    useAuth();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(user?.displayName, image);
      setReload(!reload);
      setIsImageSelect(false);
      toast.success("Image is updated!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleNameUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    try {
      await updateUserProfile(name, user?.photoURL);
      setIsNameEdit(false);
      toast.success("Name is updated");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleImageSelect = async (e) => {
    const image = e.target.files[0];
    setImagePreview(URL.createObjectURL(image));
    const formData = new FormData();
    formData.append("image", image);
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_UPLOAD_API_KEY
        }`,
        formData
      );
      setIsImageSelect(true);
      if (data.success) {
        const image_url = data.data.display_url;
        setImage(image_url);
        // console.log(image_url);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword();
      toast.success("Check your email address");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (loading) return <LoadingSpinner height={"50vh"} />;

  return (
    <>
      <div className="pt-20">
        <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10">
            <div className="relative">
              <img
                className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg dark:bg-gray-200"
                src={imagePreview ? imagePreview : user?.photoURL}
                alt="Bonnie image"
              />
              <form onSubmit={handleImageUpload}>
                <div className="absolute bottom-5 -right-2  cursor-pointer">
                  {!isImageSelect ? (
                    <label htmlFor="image">
                      <span className="inline-block bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full p-2">
                        {" "}
                        <LuFileEdit className="text-white" />
                      </span>
                      <input
                        onChange={handleImageSelect}
                        type="file"
                        id="image"
                        name="image"
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <button className="inline-block bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full p-2">
                      <MdSave className="text-white" />
                    </button>
                  )}
                </div>
              </form>
            </div>
            <>
              {!isNameEdit ? (
                <div className="flex items-center mt-1">
                  <h5 className=" text-xl font-medium text-gray-900 dark:text-white ml-2 mb-2">
                    {user?.displayName}
                  </h5>

                  <button onClick={() => setIsNameEdit(true)} className="-3">
                    <CiEdit className="text-2xl dark:text-gray-200" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleNameUpdate}
                  className="w-full max-w-72 mb-3"
                >
                  <div className="relative">
                    <input
                      name="name"
                      defaultValue={user?.displayName}
                      id="name"
                      autoComplete="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-purple-600 focus:border-purple-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      type="text"
                    />
                    <button className="absolute right-3 top-2">
                      <MdSave className="text-2xl dark:text-gray-200" />
                    </button>
                  </div>
                </form>
              )}
            </>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user?.email}
            </span>
            <div className="flex  items-center mt-4 md:mt-6 gap-4">
              <button
                type="button"
                onClick={handleResetPassword}
                className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Reset Password
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
