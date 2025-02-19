import { BooksCatagories } from '../utils/BooksCatagories';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Navbar from './Navbar';

function BookDetails() {
  return (
    <>
    <Navbar />

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Browse Books</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BooksCatagories.map(book => (
          <li key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to={`/book/${book.category}`} className="block p-4">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{book.title}</h3>
              <p className="text-blue-600 mb-2">Author: {book.author}</p>
              <p className="text-blue-600 mb-2">Description: {book.description}</p>
              <p className="text-blue-600 mb-2">Rating: {book.rating}</p>
              <p className="text-blue-600">Category: {book.category}</p>
            </Link>

            {/* Button to go back to Browse Books */}
            <Link to="/browse-books">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Back to Browse
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default BookDetails;
