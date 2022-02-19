import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthProvider } from './hook/useAuth';
import ForTest from './forTest';


ReactDOM.render(

  // <React.StrictMode>

  //   <Provider store={store}>
  //     <AuthProvider>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </AuthProvider>
  //   </Provider>

  // </React.StrictMode>
  <ForTest />
  ,
  document.getElementById('root')
);




