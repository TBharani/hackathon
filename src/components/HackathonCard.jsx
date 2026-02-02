import { Link } from 'react-router-dom';

/**
 * HackathonCard Component
 * Reusable card component to display hackathon information
 * 
 * @param {Object} hackathon - Hackathon data object
 */
const HackathonCard = ({ hackathon }) => {
  // Determine badge color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {hackathon.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(hackathon.status)}`}>
            {hackathon.status}
          </span>
        </div>

        {/* Date */}
        <div className="flex items-center text-gray-600 mb-3">
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="text-sm">{hackathon.date}</span>
        </div>

        {/* Description */}
        {hackathon.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {hackathon.description}
          </p>
        )}

        {/* Additional Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          {hackathon.category && (
            <div className="flex items-center text-gray-500">
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" 
                />
              </svg>
              <span>{hackathon.category}</span>
            </div>
          )}
          {hackathon.prize && (
            <div className="flex items-center text-gray-500">
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>{hackathon.prize}</span>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <Link 
          to={`/hackathons/${hackathon.id}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard;