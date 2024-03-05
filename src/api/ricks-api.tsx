import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api/c";

export const getCharacters = () => {
  return axios
    .get(`${apiUrl}character`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
