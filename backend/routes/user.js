const axios = require('axios');

const fetchUser = async (req, res) => {
  const { username } = req.query;
  
    const options = {
      method: 'GET',
      url: 'https://twitter154.p.rapidapi.com/user/details',
      params: {
        username: username,
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
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Failed to fetch user details' });
    }
  }

module.exports = {fetchUser}