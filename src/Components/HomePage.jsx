import React from 'react';
import BookCategories from './BookCategories'; // Ensure this component exists and is correctly implemented
import PopularBooks from './PopularBooks'; // Ensure this component exists and is correctly implemented
import BookDetails from './BookDetails';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-5xl font-extrabold text-indigo-600 mb-8">
          Welcome to the Online Library
        </h1>

        {/* BookCategories component */}
        <BookCategories />

        {/* PopularBooks component */}
        <PopularBooks />
      </div>

    </div>
  );
}

export default HomePage;
