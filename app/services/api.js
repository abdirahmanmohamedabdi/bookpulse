import axios from 'axios';

export const getFavorites = async (userId) => {
  try {
    const response = await axios.get(`/api/favorites?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};
