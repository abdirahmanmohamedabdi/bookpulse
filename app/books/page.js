"use client";
import { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { fetchBooks } from '../lib/api';
import { addFavorite, getFavorites, updateProgress } from '../services/api';

export default function Books() {
  const [query, setQuery] = useState('bestsellers');
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const results = await fetchBooks(query, page * 20);
        setBooks(results);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch books');
        console.error(err);
        setLoading(false);
      }
    };
    loadBooks();
  }, [query, page]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const userId = 'user1'; // Replace with actual user ID
        const results = await getFavorites(userId);
        setFavorites(results.data);
      } catch (err) {
        setError('Failed to fetch favorites');
        console.error(err);
      }
    };
    loadFavorites();
  }, []);

  const handleAddToFavorites = async (book) => {
    const userId = 'user1'; // Replace with actual user ID
    const newFavorite = {
      userId,
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
      previewLink: book.volumeInfo.previewLink,
    };
    await addFavorite(newFavorite);
    setFavorites([...favorites, newFavorite]);
  };

  const handleCheckProgress = async (bookId, progress) => {
    await updateProgress(bookId, progress);
    setFavorites(favorites.map(book => book._id === bookId ? { ...book, progress } : book));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Discover New Books</h2>
          <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error && <div className="text-red-500 mt-4">{error}</div>}

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mt-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail.replace('http://', 'https://')}
                  alt={book.volumeInfo.title}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {book.volumeInfo.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{book.volumeInfo.authors?.join(', ')}</p>
                <p className="text-sm text-gray-500">Category: {book.volumeInfo.categories?.join(', ')}</p>
                <p className="text-sm text-gray-500">Rating: {book.volumeInfo.averageRating || 'N/A'}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAddToFavorites(book)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Add to Favorites
                    </button>
                    <button
                      onClick={() => handleCheckProgress(book.id, 50)} // Example progress update
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Check Progress
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setPage(page > 0 ? page - 1 : 0)}
            disabled={page === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
