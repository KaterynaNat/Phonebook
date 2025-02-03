import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/Home/HomePage";
import LoginPage from "../src/pages/Login/LoginPage";
import RegisterPage from "../src/pages/Register/RegisterPage";
import ContactsPage from "../src/pages/Contacts/ContactsPage";
import PrivateRoute from "../src/routes/PrivateRoute";
import RestrictedRoute from "../src/routes/RestrictedRoute";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log("Refreshing status:", isRefreshing);

  return isRefreshing ? (
    <p className="text-center text-lg mt-10">Loading...</p>
  ) : (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/src/assets/pb-bg-desk.JPG')" }}>
      <AppBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
