import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hackathons from './pages/Hackathons';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import Profile from './pages/dashboard/Profile';
import ResumeBuilder from './pages/dashboard/ResumeBuilder';
import HackathonHistory from './pages/dashboard/HackathonHistory';
import Settings from './pages/dashboard/Settings';

/**
 * Main App Component
 * Handles routing for the entire application
 */
export function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Header and Footer */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        
        <Route path="/hackathons" element={
          <>
            <Header />
            <Hackathons />
            <Footer />
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes with Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resume" element={<ResumeBuilder />} />
          <Route path="hackathons" element={<HackathonHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={
          <>
            <Header />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                <a 
                  href="/" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  Go Back Home
                </a>
              </div>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}