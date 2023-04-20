import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './SignUp';
import FinalPage from './FinalPage';
import Login from './Login';
import store from './store';
import ClassDescriptionPage from './components/ClassDescriptionPage/ClassDescriptionPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
  ,{
    path: '/final',
    element: <FinalPage/>
  }
  ,{
    path: '/login',
    element: <Login/>
  }
  ,{
    path: '/description',
    element: <ClassDescriptionPage/>
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
