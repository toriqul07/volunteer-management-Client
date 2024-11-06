import axios from "axios";

const axiosCommon = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://volunteer-management-server-omega.vercel.app",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
