import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom"
import Store from "./stores.js";
import NotFound from "./notfound.js";
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Store/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
