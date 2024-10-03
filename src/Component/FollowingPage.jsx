// FollowingPage.jsx
import React, { useState } from 'react';

const FollowingPage = () => {
  const [followers, setFollowers] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    // You will later integrate API here to get the followers
    console.log("Search for:", searchValue);
    
    // For now, just simulate some followers
    const dummyFollowers = [
      { id: 1, name: 'Bruce Wayne', handle: '@batman' },
      { id: 2, name: 'Clark Kent', handle: '@superman' },
      { id: 3, name: 'Diana Prince', handle: '@wonderwoman' }
    ];
    setFollowers(dummyFollowers);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          name="search" 
          placeholder="Search for followers" 
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 rounded text-white">Search</button>
      </form>
      <div className="mt-4">
        {followers.length > 0 ? (
          <ul>
            {followers.map(follower => (
              <li key={follower.id} className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-gray-500 rounded-full"></div> {/* Profile image placeholder */}
                <div>
                  <p className="font-bold">{follower.name}</p>
                  <p className="text-gray-400">{follower.handle}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No followers found. Search for someone!</p>
        )}
      </div>
    </div>
  );
};

export default FollowingPage;
