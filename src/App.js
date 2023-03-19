import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import MainNavbar from './components/Navbar/Navbar.js';
import Home from './pages/Home';
import Items from './pages/Items';
import NewList from './pages/NewList';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="newlist" element={<NewList />} />
        </Routes>
      </Router>
    </>
  );
}
