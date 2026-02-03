import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import Header from './components/Header';
import Footer from './components/Footer';
import RoleSwitcher from './components/RoleSwitcher';
import ProtectedRoute from './components/ProtectedRoute';
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
import DeveloperAdminDashboard from './pages/admin/DeveloperAdminDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

/**
 * Main App Component
 * Handles routing for the entire application with role-based access control
 */
export function App() {
  return (
    <RoleProvider>
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

          {/* Student Dashboard Routes with Dashboard Layout */}
          <Route path="/dashboard" element={
            <ProtectedRoute requiredRoles={['student']}>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="resume" element={<ResumeBuilder />} />
            <Route path="hackathons" element={<HackathonHistory />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Developer/Super Admin Dashboard */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute requiredRoles={['developer', 'super_admin']}>
              <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <DeveloperAdminDashboard />
                </div>
                <Footer />
              </div>
            </ProtectedRoute>
          } />

          {/* Admin (Class-Restricted) Dashboard */}
          <Route path="/admin/class" element={
            <ProtectedRoute requiredRoles={['admin']}>
              <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <AdminDashboard />
                </div>
                <Footer />
              </div>
            </ProtectedRoute>
          } />

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

        {/* Role Switcher for Development/Testing */}
        <RoleSwitcher />
      </Router>
    </RoleProvider>
  );
}