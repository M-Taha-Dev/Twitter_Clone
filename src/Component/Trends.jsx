import React from 'react';
import { FaTwitter, FaCheckCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

const trends = [
  { id: 1, hashtag: "#SQUID", tweets: "2,066" },
  { id: 2, hashtag: "#Elections2024", tweets: "45.8K" },
  { id: 3, hashtag: "#Crypto", tweets: "12.6K" },
  { id: 4, hashtag: "#Technology", tweets: "8,234" },
  { id: 5, hashtag: "#ClimateChange", tweets: "3,786" },
];

const whoToFollow = [
  {
    id: 1,
    name: "The New York Times",
    handle: "@nytimes",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "CNN",
    handle: "@CNN",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Twitter",
    handle: "@Twitter",
    profilePic: "https://via.placeholder.com/50",
  },
];

const Trends = () => {
  return (
    <div className="w-full h-screen overflow-auto max-w-sm mx-auto bg-slate-900 text-white rounded-lg p-4">
      {/* Search Bar */}
      <div className="flex items-center bg-slate-700 p-3 rounded-full mb-4">
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none text-sm text-gray-300 placeholder-gray-400"
        />
      </div>

      {/* Trends Section */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-lg">Trends for you</h2>
          <BsThreeDots className="text-gray-400 cursor-pointer" />
        </div>

        {trends.map((trend) => (
          <div key={trend.id} className="flex justify-between items-start py-2">
            <div>
              <span className="block text-sm text-gray-400">Trending in Turkey</span>
              <span className="block text-lg font-semibold">{trend.hashtag}</span>
              <span className="block text-sm text-gray-400">{trend.tweets} Tweets</span>
            </div>
            <BsThreeDots className="text-gray-400 cursor-pointer" />
          </div>
        ))}

        <button className="text-blue-400 hover:underline mt-3">Show more</button>
      </div>

      {/* Who to follow Section */}
      <div className="bg-slate-800 rounded-lg p-4">
        <h2 className="font-bold text-lg mb-4">Who to follow</h2>

        {whoToFollow.map((user) => (
          <div key={user.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <img
                src={user.profilePic}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="block font-bold">{user.name} <FaCheckCircle className="text-blue-500 inline-block" /></span>
                <span className="block text-sm text-gray-400">{user.handle}</span>
              </div>
            </div>
            <button className="bg-white text-black font-bold px-3 py-1 rounded-full text-sm hover:bg-slate-300">
              Follow
            </button>
          </div>
        ))}

        <button className="text-blue-400 hover:underline mt-3">Show more</button>
      </div>
    </div>
  );
};

export default Trends;
