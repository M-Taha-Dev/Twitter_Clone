const axios = require('axios');

// Search Tweets Controller
const searchTweets = async (req, res) => {
  const { q, min_retweets = '1', min_likes = '1', limit = '5', start_date = '2022-01-01', language = 'en' } = req.query;

  const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/search/search',
    params: {
      query: q || 'default search', // Make sure 'q' is a required query parameter
      min_retweets,
      min_likes,
      limit,
      start_date,
      language
    },
    headers: {
      'x-rapidapi-key': 'b619695207msh35fa07e6fd999f3p12eb61jsnc745aa7cdbd6',
      'x-rapidapi-host': 'twitter154.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    // Parse and map the response to only send relevant fields
    const parsedTweets = response.data.results.map(tweet => ({
      tweetId: tweet.tweet_id,
      creationDate: tweet.creation_date,
      text: tweet.text,
      mediaUrl: tweet.media_url ? tweet.media_url[0] : null,
      user: {
        userId: tweet.user.user_id,
        username: tweet.user.username,
        name: tweet.user.name,
        profilePicUrl: tweet.user.profile_pic_url,
        followerCount: tweet.user.follower_count,
        isVerified: tweet.user.is_verified
      },
      favoriteCount: tweet.favorite_count,
      retweetCount: tweet.retweet_count,
      views: tweet.views,
      tweetUrl: tweet.expanded_url
    }));

    res.json(parsedTweets);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch tweets' });
  }
};

module.exports = searchTweets;
