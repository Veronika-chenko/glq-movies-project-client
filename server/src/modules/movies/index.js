const axios = require('axios');
const { Movies } = require('./entities/Movies');

const { API_KEY, BASE_URL } = process.env;

const getPopular = async (page) => {
  const res = await axios.get(
    `${BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
  );

  return new Movies(res.data);
};

const getDetails = (movieId) => {
  return axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

module.exports = {
  getPopular,
  getDetails,
};
