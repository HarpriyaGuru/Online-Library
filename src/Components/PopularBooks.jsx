import React from 'react';
import { Link } from 'react-router-dom'; 
import { BooksCatagories } from '../utils/BooksCatagories';

const PopularBooks = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl font-semibold text-blue-800 mb-6 text-center">Popular Books</h2>
        <ul className="space-y-4 flex flex-wrap justify-center gap-2"> 
          {
            BooksCatagories.filter(book => book.id <= 5).map((data) => {
              return (
                <li 
                  key={data.id} 
                  className="bg-white hover:bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 w-60" // Adjusted card styling
                >
                  <div className="block text-xl font-semibold text-indigo-700 hover:text-indigo-600">
                    <img 
                      src={data.coverImage} 
                      alt={data.title} 
                      className="rounded-t-lg w-full h-60 object-cover" 
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-bold text-gray-800">{data.title}</h3>
                      <p className="text-sm text-gray-600">{data.description}</p> 
                    </div>
                  </div>

                  {/* Link to BookDetails with book id */}
                  <Link to={`/book/${data.id}`} className="block text-xl font-semibold text-indigo-700 hover:text-indigo-600">
                    <button className="mt-4 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                      View More Details
                    </button>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
};

export default PopularBooks;
