import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' p-4 bg-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex justify-between items-center'>
      <div className=' mx-10 text-3xl font-bold'>
        Online Library
      </div>
      
      {/* Navigation Links */}
      <ul className='mx-10 flex gap-6'>
        <li className="p-2 hover:text-blue-900 hover:bg-white rounded-lg transform hover:scale-105 transition-transform duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 hover:text-blue-900 hover:bg-white rounded-lg transform hover:scale-105 transition-transform duration-200">
          <Link to="/browse-books">Browse Books</Link>
        </li>
        <li className="p-2 hover:text-blue-900 hover:bg-white rounded-lg transform hover:scale-105 transition-transform duration-200">
          <Link to="/add-book">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
