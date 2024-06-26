import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App_Page } from './routes/App_page'
import { Deck_route } from './routes/Deck';
import { hiRoute } from './routes/Hi';


// create the router -- paths are configured here
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      App_Page,
      Deck_route,
      hiRoute,
    ],
    errorElement: <span>oops</span>
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
