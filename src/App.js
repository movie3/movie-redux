import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";


function App() {
  return (
    <>
      <div className="bg-main text-white ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
