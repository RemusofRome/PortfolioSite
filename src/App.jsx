import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import MyWork from "./pages/myWork";
import AboutMe from "./pages/aboutMe";
import Modal from "./Functions/functions";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="MyWork" element={<MyWork />} />
          <Route path="AboutMe" element={<AboutMe />} />
        </Route> 
      </Routes>
      <Footer/>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
