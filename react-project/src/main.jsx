import ReactDOM from 'react-dom/client';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./components/home/App";
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Layout from "./components/layout/Layout";
// import Weather from './components/Project/Weather';
import Weather from './components/task/Weather';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/weather",
        element: <Weather/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
    <CssBaseline />
    
   </ThemeProvider>
  </React.StrictMode>
);

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
 
//   <React.StrictMode>
//   <RouterProvider router={router} />
     
//  
//   </React.StrictMode>



