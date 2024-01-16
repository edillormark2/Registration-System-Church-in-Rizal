import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useStateContext } from "./context/ContextProvider";
import Home from "./pages/Home";
import Announcement from "./pages/Announcement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/registration/Registration";

const App = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`App ${currentMode === "Dark" ? "dark" : ""}`}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-100 dark:bg-main-dark-bg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Registration pages */}
              <Route path="/registration" element={<Registration />} />

            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
