import { useState } from 'react';
import { useRole } from '../../context/useRoleHook';
import { allHackathons, hackathonParticipation, emailAlertLogs } from '../../data/mockData';
import AdminAssignment from '../../components/AdminAssignment';

/**
 * Developer/Super Admin Dashboard
 * Displays system-wide analytics, admin management, and hackathon insights
 */
const DeveloperAdminDashboard = () => {
  const { currentUser } = useRole();
  const [activeTab, setActiveTab] = useState('overview');

  // Calculate statistics
  const totalHackathons = allHackathons.length;
  const totalAdmins = 3; // Mock data
  const totalStudents = 5000; // Mock total
  const totalGroupParticipations = hackathonParticipation.reduce(
    (sum, h) => sum + h.groupVsIndividual.groupParticipation,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {currentUser.name}! 👋
        </h1>
        <p className="text-blue-100">
          {currentUser.role === 'developer' ? 'Developer' : 'Super Admin'} Access - System-Wide Overview
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Hackathons */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Hackathons</p>
              <p className="text-3xl font-bold text-gray-900">{totalHackathons}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Students */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">{totalStudents.toLocaleString()}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 6a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6v2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Admins */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Admins</p>
              <p className="text-3xl font-bold text-gray-900">{totalAdmins}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Group Participations */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Group Participations</p>
              <p className="text-3xl font-bold text-gray-900">{totalGroupParticipations}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 0H8.646M12 9.646v4m0 0h3.354m-3.354 0H8.646" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {[
            { id: 'overview', label: 'Dashboard Overview' },
            { id: 'hackathons', label: 'Hackathon Analytics' },
            { id: 'admin', label: 'Admin Management' },
            { id: 'system', label: 'System Overview' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'hackathons' && <HackathonsTab />}
          {activeTab === 'admin' && <AdminTab />}
          {activeTab === 'system' && <SystemTab />}
        </div>
      </div>
    </div>
  );
};

/**
 * Overview Tab - Quick statistics and recent activity
 */
const OverviewTab = () => {
  const ongoingHackathons = allHackathons.filter(h => h.status === 'Ongoing');
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Hackathons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ongoingHackathons.map(hackathon => (
            <div key={hackathon.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">{hackathon.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{hackathon.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                <span className="text-sm font-medium text-gray-700">{hackathon.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Ongoing Hackathons</p>
            <p className="text-2xl font-bold text-blue-600">{ongoingHackathons.length}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Upcoming Hackathons</p>
            <p className="text-2xl font-bold text-purple-600">{allHackathons.filter(h => h.status === 'Upcoming').length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Hackathons Tab - Hackathon analytics and participation data
 */
const HackathonsTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Hackathon Participation Analytics</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hackathon</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Teams</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Students</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Group</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Individual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hackathonParticipation.map(hack => (
              <tr key={hack.hackathonId} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{hack.hackathonName}</td>
                <td className="px-6 py-4 text-gray-600">{hack.totalTeams}</td>
                <td className="px-6 py-4 text-gray-600">{hack.totalStudents}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {hack.groupVsIndividual.groupParticipation}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {hack.groupVsIndividual.individualParticipation}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Class-wise Breakdown for a Sample Hackathon */}
      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Class-wise Breakdown (Smart India Hackathon 2024)</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Class</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Teams</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(hackathonParticipation[0].byClass).map(([className, data]) => (
                <tr key={className} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{className}</td>
                  <td className="px-6 py-4 text-gray-600">{data.teams}</td>
                  <td className="px-6 py-4 text-gray-600">{data.students}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/**
 * Admin Tab - Admin assignment and management
 */
const AdminTab = () => {
  return <AdminAssignment />;
};

/**
 * System Overview Tab - Email alerts and general system info
 */
const SystemTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Alert Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Event Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Applied Count</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Sent At</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {emailAlertLogs.map(log => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{log.eventName}</td>
                  <td className="px-6 py-4 text-gray-600">{log.appliedCount}</td>
                  <td className="px-6 py-4 text-gray-600">{log.sentAt}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">System Status</h4>
          <p className="text-gray-600 text-sm mb-4">All systems operational and running smoothly</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-700">Online</span>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Last Updated</h4>
          <p className="text-gray-600 text-sm">Real-time data synchronization active</p>
          <p className="text-sm font-medium text-purple-700 mt-2">Updated now</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperAdminDashboard;
