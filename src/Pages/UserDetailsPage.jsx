// UserDetailsPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdVerified } from "react-icons/md";

const BlueTickIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      fill="currentColor" 
      className="bi bi-check-circle-fill" 
      viewBox="0 0 16 16" 
      style={{ color: '#1DA1F2' }} // Twitter blue color
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.75 7.5a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.5-3.5a.5.5 0 0 1 .7 0z"/>
    </svg>
  );
const UserDetailsPage = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [userTweets, setUserTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {

        //http://localhost:5000/api/search/user?username=Babrazam358
        const response = await fetch(`http://localhost:5000/api/search/user?username=${username}`);
        const data = await response.json();
        setLoading(false);

        console.log(data)
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const fetchUserTweets = async () => {
        // Sleep function that returns a Promise that resolves after a given number of milliseconds
        const sleep = (milliseconds) => {
          return new Promise((resolve) => setTimeout(resolve, milliseconds));
        };
      
        try {
          // Call the sleep function to wait for 5 seconds (5000 milliseconds)
          await sleep(5000);
      
          // Fetch user tweets after the delay
          const response = await fetch(`http://localhost:5000/api/user/tweets?username=${username}`);
          const data = await response.json();
          setUserTweets(data.results);
        } catch (error) {
          console.error('Error fetching user tweets:', error);
        } 
      };
      

    fetchUserDetails();
     fetchUserTweets();
  }, [username]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {userDetails && (
        <div>

          <img src={userDetails.profile_pic_url} alt={`${userDetails.name}'s profile`} className="w-32 h-32 rounded-full mb-4" />
          <h1 className="text-2xl font-bold mb-4 w-full">
          <span className='flex flex-row gap-4'>{userDetails.name}  {userDetails.is_blue_verified && <MdVerified />} (@{userDetails.username})</span>
         
          </h1>
          <p>Description: {userDetails.description}</p>
        
          <p>Followers: {userDetails.following_count}</p>
          <p>Verified: {userDetails.is_blue_verified ? 'Yes' : 'No'}</p>

          <h2 className="text-xl font-semibold mt-6">Recent Tweets</h2>
          <div className="space-y-4">
            
            {userTweets?.map(tweet => (
              <div key={tweet.tweet_id} className="bg-gray-800 border border-gray-700 rounded-md p-4">
                <p className="mb-2">{tweet.text}</p>
{tweet.media_url && (
  tweet.media_type === 'video' ? (
    <video controls style={{ maxWidth: '100%' }}>
      <source src={tweet.media_url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={tweet.media_url} alt="Tweet media" style={{ maxWidth: '100%' }} />
  )
)}                <div className="text-gray-400 text-sm">
                  Likes: {tweet.favoriteCount} | Retweets: {tweet.retweetCount} | Views: {tweet.views}
                </div>
                <a 
                  href={`https://x.com/${tweet.user.username}/status/${tweet.tweetId}`} 
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
      )}
    </div>
  );
};

export default UserDetailsPage;
