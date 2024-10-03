import axios from 'axios';

const OLD_BIRD_API_HOST = 'old-bird.p.rapidapi.com';
const API_KEY = 'b619695207msh35fa07e6fd999f3p12eb61jsnc745aa7cdbd6';  // Replace with your RapidAPI key

// Search Tweets
export const searchTweets = async (query) => {
  try {
    const response = await axios.get(`https://${OLD_BIRD_API_HOST}/search`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': OLD_BIRD_API_HOST
      },
      params: {
        q: query,
        count: 10, // Number of tweets to return
      }
    });
    return response.data.statuses;  // The array of tweets
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return [];
  }
};

// Get User Info
export const getUserInfo = async (username) => {
  try {
    const response = await axios.get(`https://${OLD_BIRD_API_HOST}/user`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': OLD_BIRD_API_HOST
      },
      params: {
        screen_name: username
      }
    });
    return response.data;  // User info
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
};
