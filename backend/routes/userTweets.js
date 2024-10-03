const axios = require('axios');

const fetchUserTweets = async (req, res) => {
    const { username } = req.query;
    console.log(username)
    const options = {
      method: 'GET',
      url: 'https://twitter154.p.rapidapi.com/user/tweets',
      params: {
        username: username,
        limit: 1,
        // The user_id can be fetched dynamically if needed or passed as a parameter.
        include_replies: 'false',
        include_pinned: 'false',
      },
      headers: {
        'x-rapidapi-key': 'b619695207msh35fa07e6fd999f3p12eb61jsnc745aa7cdbd6',
        'x-rapidapi-host': 'twitter154.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching user tweets:', error);
      res.status(500).json({ error: 'Failed to fetch user tweets' });
    }
  }

module.exports = {fetchUserTweets}

