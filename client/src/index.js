import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import './index.css';
import { UserProvider } from './Components/Context';


const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
`;


ReactDOM.render(
  <UserProvider>
    <Router>
      {/* <GlobalStyle /> */}
      <App />
    </Router>
  </UserProvider>,
  document.getElementById("root")
);
