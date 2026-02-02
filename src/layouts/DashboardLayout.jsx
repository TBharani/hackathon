
import { Outlet, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { studentProfile } from '../data/mockData';

/**
 * Dashboard Layout Component
 * Wrapper layout for all dashboard pages
 * Includes sidebar and top bar with navigation to main pages
 */
const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="bg-white shadow-sm z-10">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo and Navigation Links */}
              <div className="flex items-center gap-6">
                {/* Mobile Menu Button */}
                <button className="lg:hidden text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Logo - Visible on Desktop */}
                <Link to="/" className="hidden lg:flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    HackathonHub
                  </span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-4">
                  <Link 
                    to="/" 
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/hackathons" 
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Hackathons
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium"
                  >
                    Dashboard
                  </Link>
                </nav>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search hackathons, projects..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <svg 
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Right Side - Notifications & Profile */}
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile Dropdown */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-gray-900">{studentProfile.name}</p>
                    <p className="text-xs text-gray-600">{studentProfile.year}</p>
                  </div>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {studentProfile.name.charAt(0)}
                    </div>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="hidden md:block px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay (for future implementation) */}
      <div className="lg:hidden fixed inset-0 z-50 hidden">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        <div className="fixed inset-y-0 left-0 w-64">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;