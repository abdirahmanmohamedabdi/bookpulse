// lib/api.js
import axios from 'axios';

export const fetchBooks = async (query, startIndex = 0) => {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query,
        startIndex,
        maxResults: 20, // Adjust the number of results per page as needed
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
