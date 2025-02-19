import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BooksCatagories } from '../utils/BooksCatagories'; // Your book data
import Navbar from './Navbar'; // Assuming you have a Navbar component
import { Link } from 'react-router-dom';

const Categories = () => {
  const { category } = useParams(); // Extract the category from the URL
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Filter books based on category when the category changes
  useEffect(() => {
    const booksInCategory = BooksCatagories.filter(book => book.category.toLowerCase() == category.toLowerCase());
    setFilteredBooks(booksInCategory);
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-semibold text-blue-800 text-center mb-6">{category} Books</h2>
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
                  <p className="text-sm text-gray-600 mt-2">{book.description}</p>
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
            <div className="col-span-full p-4 text-gray-500 text-center">No books found in this category</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
