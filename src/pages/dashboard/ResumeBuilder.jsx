import { useState } from 'react';
import { studentProfile } from '../../data/mockData';

/**
 * Resume Builder Component
 * Allows students to create and edit their resume
 */
const ResumeBuilder = () => {
  const [selectedSection, setSelectedSection] = useState('personal');
  const [resumeData, setResumeData] = useState(studentProfile);

  // Resume sections
  const sections = [
    { id: 'personal', label: 'Personal Details', icon: '👤' },
    { id: 'objective', label: 'Career Objective', icon: '🎯' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'internships', label: 'Internships', icon: '💼' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
    { id: 'hackathons', label: 'Hackathons', icon: '🏆' }
  ];

  const handleChange = (field, value) => {
    setResumeData({
      ...resumeData,
      [field]: value
    });
  };

  const handleGenerate = () => {
    alert('Resume generation feature will be available soon! For now, you can preview your resume below.');
  };

  // Render section content based on selected section
  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'personal':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={resumeData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={resumeData.collegeEmail}
                  onChange={(e) => handleChange('collegeEmail', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={resumeData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  value={resumeData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        );

      case 'objective':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Objective</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
              <textarea
                value={resumeData.careerObjective}
                onChange={(e) => handleChange('careerObjective', e.target.value)}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Write a brief summary about your career goals and aspirations..."
              />
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      value={edu.year}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {edu.cgpa ? 'CGPA' : 'Percentage'}
                    </label>
                    <input
                      type="text"
                      value={edu.cgpa || edu.percentage}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Skills are automatically imported from your profile. Update your profile to modify skills.
            </p>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={project.description}
                      readOnly
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
                      <input
                        type="text"
                        value={project.technologies}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                      <input
                        type="text"
                        value={project.duration}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'internships':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Internships</h3>
            {resumeData.internships.map((internship, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        value={internship.company}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                      <input
                        type="text"
                        value={internship.role}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <input
                      type="text"
                      value={internship.duration}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={internship.description}
                      readOnly
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Certification Name</label>
                    <input
                      type="text"
                      value={cert.name}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Issuer</label>
                    <input
                      type="text"
                      value={cert.issuer}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="text"
                      value={cert.date}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'hackathons':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hackathons & Achievements</h3>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Achievements</h4>
              <ul className="space-y-2">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-gray-600 mt-1">Create and customize your professional resume</p>
        </div>
        <button
          onClick={handleGenerate}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Generate Resume
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Section List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Resume Sections</h2>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    selectedSection === section.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderSectionContent()}
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Resume Preview</h2>
        <div className="border-2 border-gray-200 rounded-lg p-8 bg-gray-50">
          {/* Preview Header */}
          <div className="text-center mb-6 pb-6 border-b-2 border-gray-300">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.name}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>{resumeData.phoneNumber}</span>
              <span>•</span>
              <span>{resumeData.collegeEmail}</span>
              <span>•</span>
              <span>{resumeData.department}</span>
            </div>
          </div>

          {/* Preview Content */}
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300">OBJECTIVE</h3>
              <p className="text-gray-700">{resumeData.careerObjective}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300">EDUCATION</h3>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="mb-2">
                  <div className="font-semibold text-gray-900">{edu.degree}</div>
                  <div className="text-gray-700">{edu.institution} • {edu.year}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 border-b border-gray-300">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, idx) => (
                  <span key={idx} className="text-gray-700">{skill}{idx < resumeData.skills.length - 1 ? ',' : ''}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;