import React from 'react';
import { Link } from 'react-router-dom'; // To use React Router for navigation

const BookCategories = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">Book Categories</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Fiction Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/fiction" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/free-photo/turn-page-collage_23-2149876327.jpg?semt=ais_hybrid"
                alt="Fiction"
                className="mb-4"
              />
              Fiction
            </Link>
          </li>

          {/* Non-Fiction Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/non-fiction" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/premium-photo/close-up-old-books-feather-inkwell-wooden-table_146936-1395.jpg?semt=ais_hybrid"
                alt="Non-Fiction"
                className="mb-4"
              />
              Non-Fiction
            </Link>
          </li>

          {/* Sci-Fi Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/sci-fi" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-woman-with-futuristic-sunglasses-digital-illustration_715271-595.jpg?semt=ais_hybrid"
                alt="Sci-Fi"
                className="mb-4"
              />
              Sci-Fi
            </Link>
          </li>

          {/* Mystery Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/mystery" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/premium-photo/portrait-boy-reading-book-spooky-stories_653183-324.jpg?semt=ais_hybrid"
                alt="Mystery"
                className="mb-4"
              />
              Mystery
            </Link>
          </li>

          {/* Dystopian Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/dystopian" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/premium-photo/woman-stands-front-waterfall-with-sun-shining-her-face_910712-1.jpg?semt=ais_hybrid"
                alt="Dystopian"
                className="mb-4"
              />
              Dystopian
            </Link>
          </li>

          {/* Fantasy Category */}
          <li className="bg-indigo-100 hover:bg-indigo-200 p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-all duration-200">
            <Link to="/books/fantasy" className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              <img
                src="https://img.freepik.com/premium-photo/magic-book-3d-illustration_533101-910.jpg?semt=ais_hybrid"
                alt="Fantasy"
                className="mb-4"
              />
              Fantasy
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default BookCategories;
