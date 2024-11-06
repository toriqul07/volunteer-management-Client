import "react-tabs/style/react-tabs.css";
import MyPost from "./MyPost";
import RequestPost from "./RequestPost";
import Title from "../../components/Title";

//get user info from local storage

const ManageMyPost = () => {
  //   console.log(volunteers);

  return (
    <div className="container">
      <Title title={'Mange My Post'}/>
      <div>
        <div className="mb-6">
          <h1 className=" text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize max-w-3xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
              My Need
            </span>{" "}
            Volunteer Post
          </h1>
        </div>
        <MyPost />
      </div>
      <div className="mt-20">
        <div className="mb-6">
          <h1 className=" text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize max-w-3xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
              My Volunteer
            </span>{" "}
            Request Post
          </h1>
        </div>
        <RequestPost />
      </div>
    </div>
  );
};

export default ManageMyPost;
