import axios from "axios";

const BASE_URL = "https://test.create.diagnal.com";

export const fetchPage = async (pageNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/page${pageNumber}.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};

export const getImageUrl = (imageName) => {
  if (!imageName) return "";
  return `${BASE_URL}/images/${imageName}`;
};
