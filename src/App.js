import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Profile from "./Components/Profile";
import FavoritesMovies from "./Components/Profile/FavoritesMovies";
import Password from "./Components/Profile/Password";
import UserInfo from "./Components/Profile/UserInfo";
import ContactUs from "./Components/Contact";
import AboutUs from "./Components/about";
import Iptv from "./Components/iptv/Iptv";

function App() {
  return (
    <>
      <Header />
      <div className="bg-black text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/favorites" element={<FavoritesMovies />} />
          <Route path="/password" element={<Password />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Iptv" element={<Iptv />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
