import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Profile from "./Components/Profile";
import FavoritesMovies from "./Components/Profile/FavoritesMovies";
import Password from "./Components/Profile/Password";
import UserInfo from "./Components/Profile/UserInfo";

function App() {
  return (
    <>
      <Header />
      <div className="bg-main text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/favorites" element={<FavoritesMovies />} />
          <Route path="/password" element={<Password />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
