import { Link, useLocation } from 'react-router-dom';
import { useRole } from '../context/useRoleHook';

/**
 * Header Component
 * Main navigation header for the application
 * Shows logo and navigation links based on user role
 */
const Header = () => {
  const location = useLocation();
  const { currentUser } = useRole();

  // Check if current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HackathonHub
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              } px-1 pb-1 transition-colors duration-200`}
            >
              Home
            </Link>
            <Link 
              to="/hackathons" 
              className={`${
                isActive('/hackathons') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              } px-1 pb-1 transition-colors duration-200`}
            >
              Hackathons
            </Link>

            {/* Student Dashboard */}
            {currentUser.role === 'student' && (
              <Link 
                to="/dashboard" 
                className={`${
                  isActive('/dashboard') || location.pathname.startsWith('/dashboard')
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } px-1 pb-1 transition-colors duration-200`}
              >
                Dashboard
              </Link>
            )}

            {/* Admin Dashboards */}
            {currentUser.role === 'admin' && (
              <Link 
                to="/admin/class" 
                className={`${
                  isActive('/admin/class') || location.pathname.startsWith('/admin/class')
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } px-1 pb-1 transition-colors duration-200`}
              >
                Admin Dashboard
              </Link>
            )}

            {/* Developer/Super Admin Dashboards */}
            {(currentUser.role === 'developer' || currentUser.role === 'super_admin') && (
              <Link 
                to="/admin/dashboard" 
                className={`${
                  isActive('/admin/dashboard') || location.pathname.startsWith('/admin/dashboard')
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                } px-1 pb-1 transition-colors duration-200`}
              >
                Admin Dashboard
              </Link>
            )}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`${
              isActive('/') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </Link>
          <Link 
            to="/hackathons" 
            className={`${
              isActive('/hackathons') 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            } block px-3 py-2 rounded-md text-base font-medium`}
          >
            Hackathons
          </Link>

          {/* Student Dashboard */}
          {currentUser.role === 'student' && (
            <Link 
              to="/dashboard" 
              className={`${
                location.pathname.startsWith('/dashboard')
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
            >
              Dashboard
            </Link>
          )}

          {/* Admin Dashboards */}
          {currentUser.role === 'admin' && (
            <Link 
              to="/admin/class" 
              className={`${
                location.pathname.startsWith('/admin/class')
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
            >
              Admin Dashboard
            </Link>
          )}

          {/* Developer/Super Admin Dashboards */}
          {(currentUser.role === 'developer' || currentUser.role === 'super_admin') && (
            <Link 
              to="/admin/dashboard" 
              className={`${
                location.pathname.startsWith('/admin/dashboard')
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              } block px-3 py-2 rounded-md text-base font-medium`}
            >
              Admin Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;