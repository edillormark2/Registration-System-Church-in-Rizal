import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useStateContext } from "./context/ContextProvider";
import Home from "./pages/Home";
import Announcement from "./pages/Announcement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/registration/Registration";
import SSOT from "./pages/registration/SSOT";
import BibleReading from "./pages/registration/BibleReading";
import TOLT from "./pages/registration/TOLT";
import FAC from "./pages/registration/FAC";
import CoorMeeting from "./pages/registration/CoorMeeting";
import CombinedYPM from "./pages/registration/CombinedYPM";
import CombinedLTM from "./pages/registration/CombinedLTM";
import FamilyDay from "./pages/registration/FamilyDay";

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
              <Route
                path="/registration/bible-reading"
                element={<BibleReading />}
              />
              <Route
                path="/registration/tour-of-a-lifetime"
                element={<TOLT />}
              />
              <Route path="/registration/family-day" element={<FamilyDay />} />
              <Route
                path="/registration/fellowship-among-the-churches"
                element={<FAC />}
              />
              <Route
                path="/registration/coordinators-meeting"
                element={<CoorMeeting />}
              />
              <Route
                path="/registration/summer-school-of-truth"
                element={<SSOT />}
              />
              <Route
                path="/registration/combined-young-peoples-meeting"
                element={<CombinedYPM />}
              />
              <Route
                path="/registration/combined-Lords-table-meeting"
                element={<CombinedLTM />}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
