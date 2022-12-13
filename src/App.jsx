import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Homepage from './pages/Homepage';
import Technology from './pages/Technology';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}  />
        <Route exact path="/destination" element={<Destination />}  />
        <Route exact path="/crew" element={<Crew />}  />
        <Route exact path="/technology" element={<Technology />}  />
      </Routes>
    </Router>
  )
}
