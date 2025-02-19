import { BooksCatagories } from '../utils/BooksCatagories';
import { Link, useParams } from 'react-router-dom';  // Import Link and useParams for navigation
import Navbar from './Navbar';

function BookDetails() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the book based on the 'id' from the URL params
  const book = BooksCatagories.find(book => book.id == id);

  // If book is not found, show a "Book not found" message
  if (!book) {
    return (
      <>
      <Navbar />
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Book Not Found</h1>
          <Link to="/browse-books" className="mt-4 text-blue-600 hover:underline">Back to Browse</Link>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen ">
        <div className="bg-white border-2 border-blue-600  p-8 rounded-lg shadow-lg max-w-3xl w-full ">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Book Details</h1>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-60 h-80 object-cover mb-4 lg:mb-0 rounded-md"
            />
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{book.title}</h3>
              <p className="text-blue-600 mb-2">Author: {book.author}</p>
              <p className=" mb-2">Description: {book.description}</p>
              <p className="text-blue-600 mb-2">Rating: {book.rating}</p>
              <p className="text-blue-600 mb-4">Category: {book.category}</p>
              <Link to="/browse-books">
                <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Back to Browse
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
