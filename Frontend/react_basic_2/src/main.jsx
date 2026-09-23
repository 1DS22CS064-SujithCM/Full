import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './form.jsx'
import Components from './components.jsx'
import Propdrilling from './propdrilling.jsx'
import ApiAxios from './ApiAxios.jsx'
import ReactRouterDOM from './ReactRouterDOM.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from "./Context.jsx";
import UserContext from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  // <Form />
  // <Components />
  // <Propdrilling />
  // <ApiAxios />
  <BrowserRouter>
    <ReactRouterDOM />
  </BrowserRouter>
  // <UserContext>
  //   <Context />
  // </UserContext>
)