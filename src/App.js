import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/detail/:todoId" element={<Layout />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;