import "./App.css";
import Blogpage from "./components/Blogs/Blogpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import Team from "./components/Team/Teampage";
import SingleBlog from "./components/Blogs/SingleBlog";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Footer from "./components/Home/Footer";
import Beginner from "./components/Beginner'sGuide/Beginner";
import Data2Knowledge from "./components/datathon/Data2Knowledge";
import TeamInte from "./components/Team/TeamInte";
import AboutUs from "./components/AboutUs/AboutUs";
import Main from "./components/Projects/Main";
import Achievements from "./components/Achievements/Achievements";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* <div className="mt-[53px]"></div> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs/all" element={<Blogpage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/blogs/:id`} element={<SingleBlog />} />
          <Route path="/ourteam" element={<TeamInte />}></Route>
          <Route path="/beginner's-guide" element={<Beginner />}></Route>
          <Route
            path="/events/data-2-knowledge"
            element={<Data2Knowledge />}
          ></Route>
          <Route path="/single-project" element={<Main />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;