import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/Store/BooksSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    coverImage: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.coverImage) newErrors.coverImage = 'Cover Image URL is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    // If no errors, dispatch addBook action and navigate
    if (Object.keys(formErrors).length === 0) {
      dispatch(addBook(formData)); // Dispatching action to Redux store
      navigate('/browse-books'); // Redirect to Browse Books page
    } else {
      setErrors(formErrors); // Show validation errors
    }
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-semibold text-blue-800 mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Author Input */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-lg font-semibold text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        {/* Category Input */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-semibold text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Cover Image URL Input */}
        <div className="mb-4">
          <label htmlFor="coverImage" className="block text-lg font-semibold text-gray-700">Cover Image URL</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add Book
        </button>
      </form>
    </div>
    </>
  );
};

export default AddBook;
