import axios from "axios";

const apiUrl = "https://v3.football.api-sports.io";

const RequestAPI = async (apiKey: string, endpoint: string) => {
  const config = {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  const result = await axios.get(`${apiUrl}/${endpoint}`, config);
  return result;
};

export default RequestAPI;
