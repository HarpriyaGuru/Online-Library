import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 text-lg hover:text-blue-800 transition">
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
