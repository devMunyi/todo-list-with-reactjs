import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import About from './functionBased/pages/About';
import NoMatch from './functionBased/pages/NoMatch';
import Navbar from './functionBased/components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/todo-list-with-reactjs" element={<TodoContainer />} />
        <Route path="/todo-list-with-reactjs/about/*" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
