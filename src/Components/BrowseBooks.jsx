import React, { useState } from 'react';
import { BooksCatagories } from '../utils/BooksCatagories';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const BrowseBooks = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredBooks = BooksCatagories.filter((book) => {
    // Convert all fields to lowercase for case-insensitive comparison
    const searchLower = searchText.toLowerCase();
    
    return (
      book.title.toLowerCase().includes(searchLower) ||
      (book.author && book.author.toLowerCase().includes(searchLower)) || // Check if author is present and includes the search term
      (book.category && book.category.toLowerCase().includes(searchLower)) // Check if category is present and includes the search term
    );
  });

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center space-x-4 p-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-96"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by title, author, or category"
          aria-label="Search books by title, author, or category"
        />
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">Author: {book.author}</p>
                  <p className="text-sm text-gray-600 mt-2">Category: {book.category}</p>
                  <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                  {/* Use Link instead of <a> for internal navigation */}
                  <Link
                    to={`/book/${book.id}`}
                    className="mt-4 block w-full py-2 text-center bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-4 text-gray-500 text-center">No books found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BrowseBooks;
