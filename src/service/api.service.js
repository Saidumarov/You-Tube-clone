import axios from "axios";
const BASE_URI = "https://youtube-v31.p.rapidapi.com";
const RapidAPI_KEY = process.env.REACT_APP_PUBLIC_API_KEY;
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": RapidAPI_KEY.toString(),
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const Apiservice = {
  async fetching(url) {
    const reponse = await axios.get(`${BASE_URI}/${url}`, options);
    return reponse.data;
  },
};
