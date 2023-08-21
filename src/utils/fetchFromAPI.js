import axios from "axios";

//const axios = require('axios');

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  //method: 'GET',
  url: base_url,
  params: {
//    part: 'snippet',
  //  videoId: 'M7FIvfx5J10',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${base_url}/${url}`, options);
   return data;
};