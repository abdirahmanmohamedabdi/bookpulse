// // pages/index.js
// "use client";
// // pages/index.js
// import { useState, useEffect } from 'react';
// import { fetchBooks } from '../lib/api';
// import { SearchIcon } from '@heroicons/react/solid'

// import { addFavorite, getFavorites, updateProgress } from '../services/api';

// export default function Example() {
//   const [query, setQuery] = useState('bestsellers');
//   const [books, setBooks] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [progress, setProgress] = useState({}); // Store progress inputs

//   useEffect(() => {
//     const loadBooks = async () => {
//       const results = await fetchBooks(query);
//       setBooks(results);
//     };
//     loadBooks();
//   }, [query]);

//   useEffect(() => {
//     const loadFavorites = async () => {
//       const userId = 'user1'; // Replace with actual user ID
//       const results = await getFavorites(userId);
//       setFavorites(results.data);
//     };
//     loadFavorites();
//   }, []);

//   const handleAddToFavorites = async (book) => {
//     const userId = 'user1'; // Replace with actual user ID
//     const newFavorite = {
//       userId,
//       googleId: book.id,
//       title: book.volumeInfo.title,
//       authors: book.volumeInfo.authors,
//       thumbnail: book.volumeInfo.imageLinks?.thumbnail,
//       previewLink: book.volumeInfo.previewLink,
//     };
//     await addFavorite(newFavorite);
//     setFavorites([...favorites, newFavorite]);
//   };

//   const handleCheckProgress = async (bookId) => {
//     const userProgress = progress[bookId] || 0;
//     await updateProgress(bookId, userProgress);
//     // Update local state to reflect progress change
//     setFavorites(favorites.map(book => book._id === bookId ? { ...book, progress: userProgress } : book));
//   };

//   const handleProgressChange = (bookId, value) => {
//     setProgress({
//       ...progress,
//       [bookId]: value,
//     });
//   };

//   const getHighResImage = (imageLinks) => {
//     if (imageLinks) {
//       return (
//         imageLinks.extraLarge ||
//         imageLinks.large ||
//         imageLinks.medium ||
//         imageLinks.small ||
//         imageLinks.thumbnail
//       ).replace('http://', 'https://');
//     }
//     return '/placeholder-image.png'; // Provide a placeholder image URL
//   };

//   return (
//     <div className="bg-white">
//       <div className="max-w-lg w-full lg:max-w-xs">
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>
//         <div className="">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </div>
//           <input
//             id="search"
//             name="search"
//             className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             placeholder="Search"
//             type="search"
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
    

//         <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
//           {books.map((book) => (
//             <div key={book.id} className="group relative">
//               <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
//                 <img
//                   src={getHighResImage(book.volumeInfo.imageLinks)}
//                   alt={book.volumeInfo.title}
//                   className="w-full h-full object-center object-cover"
//                 />
//               </div>
//               <h3 className="mt-4 text-base font-semibold text-gray-900">
//                 <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
//                   <span className="absolute inset-0" />
//                   {book.volumeInfo.title}
//                 </a>
//               </h3>
//               <p className="mt-1 text-sm text-gray-500">{book.volumeInfo.authors?.join(', ')}</p>
//               <div className="mt-2 flex space-x-4">
//                 <button
//                   onClick={() => handleAddToFavorites(book)}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//                 >
//                   Add to Favorites
//                 </button>
//                 <input
//                   type="number"
//                   value={progress[book.id] || ''}
//                   onChange={(e) => handleProgressChange(book.id, e.target.value)}
//                   placeholder="Progress"
//                   className="px-2 py-1 border rounded-md"
//                 />
//                 <button
//                   onClick={() => handleCheckProgress(book.id)}
//                   className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//                 >
//                   Check Progress
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6">
//           <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your Favorites</h2>
//           <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
//             {favorites.map((book) => (
//               <div key={book.googleId} className="group relative">
//                 <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
//                   <img
//                     src={book.thumbnail.replace('http://', 'https://')}
//                     alt={book.title}
//                     className="w-full h-full object-center object-cover"
//                   />
//                 </div>
//                 <h3 className="mt-4 text-base font-semibold text-gray-900">
//                   <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
//                     <span className="absolute inset-0" />
//                     {book.title}
//                   </a>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">{book.authors?.join(', ')}</p>
//                 <p className="mt-1 text-sm text-gray-500">Progress: {book.progress || 0}%</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
