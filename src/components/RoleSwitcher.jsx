import { useRole } from '../context/useRoleHook';

/**
 * Role Switcher Component
 * Allows easy switching between roles for testing/demonstration
 * Hidden in production but visible for development
 */
const RoleSwitcher = () => {
  const { currentUser, switchRole, admins } = useRole();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs">
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-600 uppercase">Current Role</p>
          <p className="text-sm font-bold text-gray-900 capitalize">{currentUser.role}</p>
          {currentUser.assignedClass && (
            <p className="text-xs text-gray-600 mt-1">
              {currentUser.assignedClass.department} – {currentUser.assignedClass.year}
            </p>
          )}
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto">
          <button
            onClick={() => switchRole('student')}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
              currentUser.role === 'student'
                ? 'bg-blue-100 text-blue-900 font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            👨‍🎓 Student
          </button>

          <button
            onClick={() => switchRole('developer')}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
              currentUser.role === 'developer'
                ? 'bg-blue-100 text-blue-900 font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            👨‍💼 Developer
          </button>

          <button
            onClick={() => switchRole('super_admin')}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
              currentUser.role === 'super_admin'
                ? 'bg-blue-100 text-blue-900 font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🔐 Super Admin
          </button>

          <div className="border-t border-gray-200 pt-2 mt-2">
            <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Admin Accounts</p>
            {admins.map(admin => (
              <button
                key={admin.id}
                onClick={() => switchRole('admin', admin)}
                className={`w-full text-left px-3 py-2 rounded text-xs transition-colors ${
                  currentUser.role === 'admin' && currentUser.name === admin.name
                    ? 'bg-yellow-100 text-yellow-900 font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                👤 {admin.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSwitcher;
