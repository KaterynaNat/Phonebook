import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/assets/pb-bg-desk.JPG')" }}>
      <AppBar />
      <div className="flex-grow p-4">
        <Outlet /> {}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;