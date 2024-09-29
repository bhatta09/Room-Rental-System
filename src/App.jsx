import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import RoomDetail from "./pages/RoomDetails";
import EmailVerification from "./pages/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ShiftHome from "./pages/ShiftHome";
import FindRoom from "./pages/FindRoom";
import TermandCondition from "./pages/TermandCondition";
import PP from "./pages/PP";
import OnlinePayment from "./pages/OnlinePayment";
import PostForFree from "./components/Profile/PostForFree";
import Wishlist from "./components/Profile/Wishlist";
import ChangeProfile from "./components/Profile/ChangeProfile";
import WriteReview from "./components/Profile/WriteReview";
import ChangePassword from "./components/Profile/ChangePassword";
import ForumReplies from "./components/Profile/ForumReplies";
import Dashboard from "./components/Profile/Dashboard";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<Dashboard />} />

          <Route path="post-room" element={<PostForFree />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="change-password" element={<ChangeProfile />} />
          <Route path="write-review" element={<WriteReview />} />
          <Route path="change-profile" element={<ChangePassword />} />
          <Route path="forum-replies" element={<ForumReplies />} />
        </Route>
        <Route path="roomdetail" element={<RoomDetail />} />
        <Route path="emailverification" element={<EmailVerification />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="privacy" element={<PP />} />
        <Route path="terms" element={<TermandCondition />} />
        <Route path="shift-home" element={<ShiftHome />} />
        <Route path="online-payment" element={<OnlinePayment />} />
        <Route path="find-room" element={<FindRoom />} />
      </Route>
    )
  );
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
