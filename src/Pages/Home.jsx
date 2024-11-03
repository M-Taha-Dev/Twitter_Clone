import { useState, useEffect } from "react";
import Sidebar from "../Component/Sidebar";
import Feed from "../Component/Feed";
import Trends from "../Component/Trends";
import SearchPage from "../Component/SearchPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetailsPage from "./UserDetailsPage";
import SearchUser from "../Component/SearchUser";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to update screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col md:flex-row p-2 justify-between gap-4 text-white w-full h-screen bg-black">
        
        {/* Sidebar - Hidden on mobile, visible on medium and up */}
        <Sidebar className="hidden md:block" />
        
        {/* Main content area */}
        <div className="overflow-y-scroll w-full flex-grow">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/user/:username" element={<UserDetailsPage />} />
            <Route path="/users/" element={<SearchUser />} />
          </Routes>
        </div>

        {/* Trends section - Only renders if screen width is above 768px */}
        {screenWidth > 768 && <Trends />}
      </div>
    </Router>
  );
};

export default Home;
