import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import RoomDetail from "./pages/RoomDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/roomdetail",
          element: <RoomDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
