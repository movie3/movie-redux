import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Profile from "./Components/Profile";


function App() {
  return (
    <>
        <Header />
      <div className="bg-main text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
