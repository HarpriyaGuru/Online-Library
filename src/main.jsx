import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './utils/store/store.js';
import BrowseBooks from './Components/BrowseBooks.jsx';
import AddBook from './Components/AddBook.jsx';
import BookDetails from './Components/BookDetails.jsx';
import NotFoundPage from './Components/NotFoundPage.jsx'; 
import Categories from './Components/Catagories.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/browse-books",
    element: <BrowseBooks />
  },
  {
    path: "/books/:category",
    element: <Categories />
  },
  {
    path: "/book/:id",
    element: <BookDetails />
  },
  {
    path: "/add-book",
    element: <AddBook />
  },
  {
    path: "*", 
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <RouterProvider router={appRouter} />
    
  </Provider>
);
