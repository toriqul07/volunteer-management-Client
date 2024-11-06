import { createBrowserRouter } from "react-router-dom";
import Profile from "../components/Profile";
import Root from "../layouts/Root";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import PostUpdate from "../pages/PostUpdate/PostUpdate";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/be-a-volunteer/:id",
        element: (
          <PrivateRoute>
            <BeAVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-post-details/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-update/:id",
        element: (
          <PrivateRoute>
            <PostUpdate />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
