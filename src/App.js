import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home, MovieDetails, Movies } from "./Components";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Profile from "./Components/Profile";
import FavoritesMovies from "./Components/Profile/FavoritesMovies";
import ContactUs from "./Components/Contact";
import AboutUs from "./Components/about";
import Feed from "./Components/feed/Feed";
import Iptv from "./Components/iptv/Iptv";

function App() {
  return (
    <>
      <Header />
      <div className="bg-blak text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/favorites" element={<FavoritesMovies />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/Iptv" element={<Iptv />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
