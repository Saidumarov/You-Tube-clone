import axios from "axios";
const BASE_URI = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": "9d761d3068msh3bb30d13f85fab7p13a4e2jsn85bad2ea3862",
    // "X-RapidAPI-Key": "51afd5f772mshc30ea056f01cbe4p1680e8jsn7ee1856aba3d",
    // "X-RapidAPI-Key": "644d5de62amshd6d32462afaec6ap1f9487jsnb8a6f3f7b724",
    "X-RapidAPI-Key": "7d9231d2d5mshc833e82ec3907e1p146ee4jsn5f900cfa734a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const Apiservice = {
  async fetching(url) {
    const reponse = await axios.get(`${BASE_URI}/${url}`, options);
    return reponse.data;
  },
};
