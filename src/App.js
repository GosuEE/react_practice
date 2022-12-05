import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './page/Page';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./layout/Layout"

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Page />}></Route>
        <Route exact path="/detail/:todoId" element={<Layout />}></Route>
      </Routes >
  );
}

export default App;