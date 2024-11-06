import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://volunteer-management-server-omega.vercel.app",
  withCredentials: true,
});

export const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (config) => {
      // console.log(config, "from interceptor");
      return config;
    },
    async (err) => {
      // console.log(err, "From interceptor");
      if (err.response.status === 401 || err.response.status === 403) {
        await logoutUser();
        navigate("/login");
      }
      // console.log(err.response.status);
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};
