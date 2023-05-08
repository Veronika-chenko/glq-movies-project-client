const { getPopular } = require('../modules/movies');

async function movies(parent, args) {
  const data = await getPopular();
  // console.log('🚀 ~ data:', data);
  return data;
}

module.exports = {
  movies,
};
