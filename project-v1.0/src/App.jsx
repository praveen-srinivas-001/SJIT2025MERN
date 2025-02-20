// import './App.css'
import Home from "./components/FunctionalComponent/Home.jsx";
import About from "./components/FunctionalComponent/About.jsx";
import Contact from "./components/FunctionalComponent/Contact.jsx";
import Gallery from "./components/FunctionalComponent/Gallery.jsx";
import Signup from "./components/FunctionalComponent/Signup.jsx";
import Navbar from "./components/FunctionalComponent/Navbar.jsx";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffects.jsx";
import UseState from "./components/FunctionalComponent/Hooks/UseState.jsx";
import UseEffectAPI from "./components/FunctionalComponent/Hooks/UseEffectAPI.jsx";
import UseRef from "./components/FunctionalComponent/Hooks/UseRef.jsx";
import UseMemo from "./components/FunctionalComponent/Hooks/UseMemo.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Navbar />{" "}
          {/* navbar should be inside the browser router tag because as the navbar uses the Link from BrowserRouter*/}
          <Routes>
            <Route path="/" element={<Home sjit="st.joseph" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-effect-api" element={<UseEffectAPI />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-memo" element={<UseMemo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
