import { useState } from 'react';
import { useRole } from '../../context/useRoleHook';
import { hackathonParticipation, allHackathons, studentsByClass } from '../../data/mockData';

/**
 * Admin Dashboard
 * Class-restricted dashboard for admins assigned to specific classes
 * Admins can only see data for their assigned class
 */
const AdminDashboard = () => {
  const { currentUser } = useRole();
  const [activeTab, setActiveTab] = useState('overview');

  // Verify admin has assigned class
  if (!currentUser.assignedClass) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">No class assigned to your admin account</p>
        </div>
      </div>
    );
  }

  const classKey = `${currentUser.assignedClass.department}-${currentUser.assignedClass.year.split(' ')[0]}-${currentUser.assignedClass.section}`;
  const classStudents = studentsByClass[classKey] || [];

  // Filter hackathon participation for this class only
  const classParticipation = hackathonParticipation.map(hack => ({
    ...hack,
    classData: hack.byClass[classKey] || { teams: 0, students: 0 },
  }));

  const totalTeams = classParticipation.reduce((sum, h) => sum + h.classData.teams, 0);
  const totalStudents = classParticipation.reduce((sum, h) => sum + h.classData.students, 0);

  return (
    <div className="space-y-6">
      {/* Header with Assigned Class */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {currentUser.name}! 👋
        </h1>
        <p className="text-blue-100 text-lg">
          Assigned Class: <span className="font-semibold">{currentUser.assignedClass.department} – {currentUser.assignedClass.year} – Section {currentUser.assignedClass.section}</span>
        </p>
        <p className="text-blue-100 mt-2">
          You have restricted access to data for your assigned class only
        </p>
      </div>

      {/* Stats Cards - Only for Assigned Class */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Hackathons */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Hackathons</p>
              <p className="text-3xl font-bold text-gray-900">{allHackathons.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Class Students */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Class Students</p>
              <p className="text-3xl font-bold text-gray-900">{classStudents.length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 6a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6v2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Class Participation Teams */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Class Teams</p>
              <p className="text-3xl font-bold text-gray-900">{totalTeams}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Class Total Participants */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Class Participants</p>
              <p className="text-3xl font-bold text-gray-900">{totalStudents}</p>
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
            { id: 'overview', label: 'Overview' },
            { id: 'participation', label: 'Participation' },
            { id: 'students', label: 'Students' },
            { id: 'hackathons', label: 'Hackathons' },
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
          {activeTab === 'overview' && <OverviewTab classParticipation={classParticipation} />}
          {activeTab === 'participation' && <ParticipationTab classParticipation={classParticipation} />}
          {activeTab === 'students' && <StudentsTab classStudents={classStudents} />}
          {activeTab === 'hackathons' && <HackathonsTab />}
        </div>
      </div>

      {/* Restricted Access Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div className="text-sm">
          <p className="font-semibold text-yellow-800">Restricted Access</p>
          <p className="text-yellow-700">You can only view data for your assigned class: {currentUser.assignedClass.department} – {currentUser.assignedClass.year} – Section {currentUser.assignedClass.section}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Overview Tab
 */
const OverviewTab = ({ classParticipation }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Hackathons with Class Participation</p>
            <p className="text-2xl font-bold text-blue-600">
              {classParticipation.filter(h => h.classData.teams > 0).length}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Class Participants</p>
            <p className="text-2xl font-bold text-purple-600">
              {classParticipation.reduce((sum, h) => sum + h.classData.students, 0)}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Participation Summary</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-3">Hackathons with your class participation:</p>
          <div className="space-y-2">
            {classParticipation
              .filter(h => h.classData.teams > 0)
              .slice(0, 3)
              .map(hack => (
                <div key={hack.hackathonId} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm text-gray-700">{hack.hackathonName}</span>
                  <span className="text-sm font-semibold text-gray-900">{hack.classData.students} students</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Participation Tab - Shows class participation data
 */
const ParticipationTab = ({ classParticipation }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Hackathon Participation (Your Class Only)</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hackathon</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Teams from Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Students from Class</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classParticipation.map(hack => (
              <tr key={hack.hackathonId} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{hack.hackathonName}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {hack.classData.teams}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {hack.classData.students}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {classParticipation.every(h => h.classData.teams === 0) && (
        <div className="text-center py-8">
          <p className="text-gray-500">No participation data available for your class</p>
        </div>
      )}
    </div>
  );
};

/**
 * Students Tab - Shows list of students in the class
 */
const StudentsTab = ({ classStudents }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Students in Your Class ({classStudents.length})</h3>
      
      {classStudents.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No student data available for your class</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Register Number</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {classStudents.map(student => (
                <tr key={student.registerNumber} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{student.registerNumber}</td>
                  <td className="px-6 py-4 text-gray-600">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/**
 * Hackathons Tab - Shows all available hackathons
 */
const HackathonsTab = () => {
  const ongoingHackathons = allHackathons.filter(h => h.status === 'Ongoing');
  
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Active Hackathons</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {ongoingHackathons.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No active hackathons at the moment</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
