import axios from "axios";
export const fetchData = async () => {

  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
export const fetchSingleData = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
