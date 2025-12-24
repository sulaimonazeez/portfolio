import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom"
import Store from "./stores.jsx";
import NotFound from "./notfound.jsx";
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
