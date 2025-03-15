import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderAnimation from "./components/Loader";
import ResetPassword from "./pages/ResetPassword";
import ConfirmNewPassword from "./pages/ConfirmNewPassword";
import AgentProfile from "./pages/AgentProfile";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const RoomDetail = lazy(() => import("./pages/RoomDetails"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const BlogDetails = lazy(() => import("./components/Blog/BlogDetails"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ShiftHome = lazy(() => import("./pages/ShiftHome"));
const FindRoom = lazy(() => import("./pages/FindRoom"));
const TermandCondition = lazy(() => import("./pages/TermandCondition"));
const PP = lazy(() => import("./pages/PP"));
const OnlinePayment = lazy(() => import("./pages/OnlinePayment"));
const PostForFree = lazy(() => import("./components/Profile/PostForFree"));
const Wishlist = lazy(() => import("./components/Profile/Wishlist"));
const ChangeProfile = lazy(() => import("./components/Profile/ChangeProfile"));
const WriteReview = lazy(() => import("./components/Profile/WriteReview"));
const ChangePassword = lazy(() =>
  import("./components/Profile/ChangePassword")
);
const ForumReplies = lazy(() => import("./components/Profile/ForumReplies"));
const Dashboard = lazy(() => import("./components/Profile/Dashboard"));
const AllRoom = lazy(() => import("./pages/AllRoom"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />

        <Route path="confirm-new-password" element={<ConfirmNewPassword />} />

        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<Dashboard />} />
          <Route path="post-room" element={<PostForFree />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="write-review" element={<WriteReview />} />
          <Route path="change-profile" element={<ChangeProfile />} />
          <Route path="forum-replies" element={<ForumReplies />} />
        </Route>
        <Route path="roomdetail" element={<RoomDetail />} />
        <Route path="emailverification" element={<EmailVerification />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="privacy" element={<PP />} />
        <Route path="terms" element={<TermandCondition />} />
        <Route path="shift-home" element={<ShiftHome />} />
        <Route path="online-payment" element={<OnlinePayment />} />
        <Route path="find-room" element={<FindRoom />} />
        <Route path="all-room" element={<AllRoom />} />
        <Route path="agentdetail" element={<AgentProfile />} />
      </Route>
    )
  );

  return (
    <>
      <Suspense
        fallback={
          <div>
            <LoaderAnimation />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
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
