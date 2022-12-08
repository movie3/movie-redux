import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home } from "./Components";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
