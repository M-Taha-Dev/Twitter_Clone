import Sidebar from "../Component/Sidebar";
import Feed from "../Component/Feed";
import Trends from "../Component/Trends";
import SearchPage from "../Component/SearchPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetailsPage from "./UserDetailsPage";
import SearchUser from "../Component/SearchUser";

const Home = () => {
  return (
    <Router>
      <div className="flex flex-row p-2 justify-stretch gap-28 text-white w-full h-screen bg-black">
        <Sidebar />
        
        <div className="overflow-y-scroll w-full flex-grow"> {/* Adjusted for better layout */}
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/user/:username" element={<UserDetailsPage />} />
            <Route path="/users/" element={<SearchUser />} />
          </Routes>
        </div>

        <Trends />
      </div>
    </Router>
  );
};

export default Home;
