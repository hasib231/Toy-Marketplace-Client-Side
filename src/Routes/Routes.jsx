import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/Home/Home/SignUp/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import MyToys from "../pages/MyToys/MyToys";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Blog from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>
      },
      {
        path: "addToys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: <AllToy></AllToy>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "singleToy/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;