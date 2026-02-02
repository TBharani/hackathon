import { useState } from 'react';
import { allHackathons } from '../data/mockData';
import HackathonCard from '../components/HackathonCard';

/**
 * Hackathons Page Component
 * Displays all hackathons with filtering options
 */
const Hackathons = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter hackathons based on selected status
  const filteredHackathons = selectedFilter === 'All' 
    ? allHackathons 
    : allHackathons.filter(h => h.status === selectedFilter);

  // Count hackathons by status
  const counts = {
    All: allHackathons.length,
    Ongoing: allHackathons.filter(h => h.status === 'Ongoing').length,
    Upcoming: allHackathons.filter(h => h.status === 'Upcoming').length,
    Completed: allHackathons.filter(h => h.status === 'Completed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All Hackathons</h1>
          <p className="text-xl text-blue-100">
            Discover and participate in exciting hackathons from around the world
          </p>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {['All', 'Ongoing', 'Upcoming', 'Completed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter} ({counts[filter]})
              </button>
            ))}
          </div>
        </div>

        {/* Hackathons Grid */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredHackathons.length}</span> hackathon(s)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>

        {/* No Results */}
        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <svg 
              className="w-16 h-16 text-gray-400 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="text-gray-500 text-lg">No hackathons found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathons;