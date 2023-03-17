import './App.css';
import HomePage from './pages/HomePage.jsx'
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import NoPage from './pages/NoPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route index element = {<HomePage/>} />
        <Route path="/Home" element = {<HomePage/>} />
        <Route path = "*" element = {<NoPage/>}/>
    </Route>
  ) 
)

function App() {
  return (
    // <BrowserRouter>  
    //   <Layout/>
    // </BrowserRouter>
    <RouterProvider router={router}/>
 
  );
}

export default App;
