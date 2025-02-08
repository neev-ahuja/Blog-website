import Header from "./Components/Header";
import Home from "./Components/Home";
import Heading from "./Components/Heading";
import NewBlog from "./Components/NewBlog";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";
import Team from "./Components/Team";
import History from "./Components/History";
import Children from "./Components/Children";
import Youth from "./Components/Youth";
import Adults from "./Components/Adults";
import Join from "./Components/Join";
import Volunteer from "./Components/Volunteer";
import Donate from "./Components/Donate";
import OneTimeDonation from "./Components/OneTimeDonation";
import MonthlyDonation from "./Components/MonthlyDonation";
import Sponsor from "./Components/Sponsor";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<><Heading /><Home blogs={blogs} /></>} />
        <Route exact path="/new-blog" element={<NewBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/ministries/children" element={<Children />} />
        <Route exact path="/ministries/youth" element={<Youth />} />
        <Route exact path="/ministries/adults" element={<Adults />} />
        <Route exact path="/next-steps/join" element={<Join />} />
        <Route exact path="/next-steps/volunteer" element={<Volunteer />} />
        <Route exact path="/next-steps/donate" element={<Donate />} />
        <Route exact path="/donate/one-time" element={<OneTimeDonation />} />
        <Route exact path="/donate/monthly" element={<MonthlyDonation />} />
        <Route exact path="/donate/sponsor" element={<Sponsor />} />
        <Route exact path="/Blog-website" element={<Navigate to='/'/>} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;