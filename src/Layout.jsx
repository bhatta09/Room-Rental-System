import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const Layout = () => {
  const location = useLocation();
  const noNavbarFooterRoutes = ["/profile"];
  const isNoNavbarFooterRoute = noNavbarFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {!isNoNavbarFooterRoute && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isNoNavbarFooterRoute && <Footer />}
    </div>
  );
};

export default Layout;
