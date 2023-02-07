import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default class Test extends React.Component {
//   render(){ 
//     return(
//         <BrowserRouter>
//         <NavBar />
//           <Routes>
//             <Route path="/Home" element= {<HomePage/>}></Route>
//             <Route path="/AboutMe" element= {<AboutPage/>}></Route>
//             <Route path="/Hobbies" element= {<HobbyPage/>}></Route>
//             <Route path="*" element={<NoPage/>}/>
//           </Routes>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
