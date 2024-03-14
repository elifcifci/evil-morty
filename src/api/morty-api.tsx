import axios from "axios";
import React from "react";

const apiUrl = "https://rickandmortyapi.com/api/";

export const getCharacters = async (
  inputValue: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const response = await axios.get(`${apiUrl}/character/?name=${inputValue}`);
    setIsLoading(false);

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
