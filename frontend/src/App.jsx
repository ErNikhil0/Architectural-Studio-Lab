import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

import Projectnav from "./components/Projectnav";

import Projectcontent1 from "./components/Projectcontent1";
import Demo2 from "./components/Demo2";
import Mumbaioffice from "./components/Mumbaioffice";

// import Projectcontent1 from "./components/Projectcontent1";

import Career from "./components/Career/career";
import HRBP from "./components/Career/HRBP";
import JobApplication from "./components/Career/JobApplication";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route exact path="/about" element={<About />}>
          {" "}
        </Route>

        <Route exact path="/projects-all" element={<Projectnav />}>
          {" "}
        </Route>

        <Route path="/Projectcontent1" element={<Projectcontent1 />} />
        <Route path="/Demo2" element={<Demo2 />} />
        <Route path="/mumbai-office" element={<Mumbaioffice />} />

        <Route path="/careers" element={<Career />}>
          {" "}
        </Route>
        <Route path="/career/hrbp" element={<HRBP />}>
          {" "}
        </Route>
        <Route path="/job-applications" element={<JobApplication />}>
          {" "}
        </Route>
        <Route exact path="/Blogs" element={<Blog />}>
          {" "}
        </Route>
        <Route exact path="/projects" element={<Projects />}>
          {" "}
        </Route>
        <Route exact path="/gallery" element={<Gallery />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
