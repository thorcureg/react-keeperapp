import React from "react";
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

reportWebVitals();

/*
1. ✅Create a new React App
2. ✅Create a App.jsx component
3. ✅Create a Header.jsx component that renders a <header> element
to show the Keeper app name in <h1>
4. ✅Create a Footer.jsx component that renders a <footer> element
to show a copyright message in a <p> with dynamically updated year.
5. ✅Create a Note.jsx component to show a <div> element with a
<h1> for a title and a <p> for the content.
6. Make sure that the final webiste si styled like the example shown

*/