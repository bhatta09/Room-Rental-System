import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import RoomDetail from "./pages/RoomDetails";
import EmailVerification from "./pages/EmailVerification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ShiftHome from "./pages/ShiftHome"
import TermandCondition from "./pages/TermandCondition";
import PP from "./pages/PP";
import ProfileDashboard from "./components/ProfileDashboard/ProfileDashboard";
import OnlinePayment from "./pages/OnlinePayment";

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
        {
          path: "/emailverification",
          element: <EmailVerification />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/privacy",
          element: <PP />,
        },
        {
          path: "/terms",
          element: <TermandCondition />,
        },
        {
          path: "/profileDashboard",
          element: <ProfileDashboard />,
        },
        {
          path: "/shift-home",
          element: <ShiftHome />,
        },
        {
          path: "/online-payment",
          element: <OnlinePayment />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
