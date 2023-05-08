const axios = require('axios');
const { Movies } = require('./entities/Movies');
const { API_KEY } = process.env;

const getPopular = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
  );

  return new Movies(res.data);
};

module.exports = {
  getPopular,
};
