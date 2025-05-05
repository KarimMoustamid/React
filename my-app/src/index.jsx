// Importing the React library to create components and manage state
import React from 'react';

// Importing ReactDOM to interact with the DOM and render React components
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

// Selecting the root DOM element where the React app will be mounted
const element = document.getElementById('root');

// Creating a root for rendering the React application
const root = ReactDOM.createRoot(element);


// Rendering the App component into the root DOM element
root.render(
    <App />
);