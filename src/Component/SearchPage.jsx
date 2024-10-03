import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SearchPage = () => {
  const [tweets, setTweets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const fetchTweets = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${searchQuery}`);
      const data = await response.json();
      setTweets(data);
      console.log('dataaaaaaaaaaaaaaaA: ', data)
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4"
      style={{width: '600px'}}
    >
      <h1 className="text-2xl font-bold mb-4">Search Tweets</h1>
      
      <div className="flex space-x-2 mb-4">
        <input 
          type="text" 
          placeholder="Search Tweets" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          onKeyPress={(e) => {
            if (e.key === 'Enter'){
              fetchTweets()
            }
          }}
          className="border border-gray-700 rounded-md p-2 w-full bg-gray-800 text-white"
        />

        <button 
          onClick={fetchTweets} 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2"
        >
          Search
        </button>
      </div>

      <div className="space-y-4">
        {tweets?.map(tweet => (
          <div key={tweet.tweet_id} className="bg-gray-800 border border-gray-700 rounded-md p-4">
            <div className="flex items-center mb-2">
              <img 
                src={tweet.user.profilePicUrl} 
                alt={`${tweet.user.username}'s profile`} 
                className="w-12 h-12 rounded-full mr-2" 
              />
              <Link to={`/user/${tweet.user.username}`} className="text-white font-bold">
                {tweet.user.name}
              </Link>
            </div>
            <p className="mb-2">{tweet.text}</p>
            {tweet.mediaUrl && <img src={tweet.mediaUrl} alt="Tweet media" style={{ maxWidth: '100%' }} />}
            <div className="text-gray-400 text-sm">
              Likes: {tweet.favorite_count} | Retweets: {tweet.retweet_count} | Views: {tweet.views}
            </div>
            <a 
              href={`https://x.com/${tweet.user.username}/status/${tweet.tweet_id}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View on Twitter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
