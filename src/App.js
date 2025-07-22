import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/FixedComponents/Navbar";
import {Footer} from "./components/FixedComponents/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
