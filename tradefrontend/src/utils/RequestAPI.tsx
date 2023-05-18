import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const apiUrl = "https://v3.football.api-sports.io";

const RequestAPI = async (
  apiKey: string,
  endpoint: string,
  navigate: NavigateFunction
) => {
  const config = {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };

  try {
    const result = await axios.get(`${apiUrl}/${endpoint}`, config);
    console.log("result:", result);

    if (result.data.errors.length === 0) {
      navigate("/home");
    } else {
      navigate("/404");
    }
  } catch (error) {
    console.error(error);
  }
};

export default RequestAPI;
