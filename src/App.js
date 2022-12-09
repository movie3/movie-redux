import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";
import Login from "./Components/Auth/Login";


function App() {
  return (
    <>
      <div className="bg-main text-white ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
