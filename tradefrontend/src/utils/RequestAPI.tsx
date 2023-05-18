import axios from "axios";

const apiUrl = "https://v3.football.api-sports.io";

const RequestAPI = async (apiKey: string, endpoint: string) => {
  const config = {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };
  try {
    const result = await axios.get(`${apiUrl}/${endpoint}`, config);
    console.log("result:", result);
  } catch (error) {
    console.error(error);
  }
};

export default RequestAPI;
