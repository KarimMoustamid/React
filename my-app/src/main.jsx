// Importing the React library to create components and manage state
import React from 'react';

// Importing ReactDOM to interact with the DOM and render React components
import ReactDOM from 'react-dom/client';

// Selecting the root DOM element where the React app will be mounted
const element = document.getElementById('root');

// Creating a root for rendering the React application
const root = ReactDOM.createRoot(element);

// Defining the main App component
function App() {
  return (
    <div>
      {/* Displaying a heading */}
      <h1>Hello, world!</h1>
      {/* Displaying a paragraph */}
      <p>This is a simple React application.</p>
    </div>
  );
}

// Rendering the App component into the root DOM element
root.render(
    <App />
);