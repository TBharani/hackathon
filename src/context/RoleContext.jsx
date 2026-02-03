import { useState } from 'react';
import { RoleContext } from './RoleContextCreate';

/**
 * Role Provider Component
 * Manages user roles, permissions, and authentication state
 * Available roles: student, admin, super_admin, developer
 */
export const RoleProvider = ({ children }) => {
  // Current logged-in user role and details
  const [currentUser, setCurrentUser] = useState({
    role: 'student', // 'student', 'admin', 'super_admin', 'developer'
    name: 'Rajesh Kumar',
    email: 'rajesh@college.edu',
    assignedClass: null, // For admin role: { department, year, section }
  });

  // Admin users list (for developer/super_admin management)
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Admin Ravi',
      email: 'ravi.admin@college.edu',
      assignedClass: {
        department: 'IT',
        year: '2nd Year',
        section: 'A',
      },
    },
    {
      id: 2,
      name: 'Admin Sneha',
      email: 'sneha.admin@college.edu',
      assignedClass: {
        department: 'CSE',
        year: '4th Year',
        section: 'C',
      },
    },
    {
      id: 3,
      name: 'Admin Priya',
      email: 'priya.admin@college.edu',
      assignedClass: {
        department: 'ECE',
        year: '3rd Year',
        section: 'B',
      },
    },
  ]);

  /**
   * Switch user role (for testing/demonstration)
   */
  const switchRole = (role, adminData = null) => {
    if (role === 'admin' && adminData) {
      setCurrentUser({
        role: 'admin',
        name: adminData.name,
        email: adminData.email,
        assignedClass: adminData.assignedClass,
      });
    } else if (role === 'student') {
      setCurrentUser({
        role: 'student',
        name: 'Rajesh Kumar',
        email: 'rajesh@college.edu',
        assignedClass: null,
      });
    } else if (role === 'super_admin') {
      setCurrentUser({
        role: 'super_admin',
        name: 'Super Admin User',
        email: 'superadmin@college.edu',
        assignedClass: null,
      });
    } else if (role === 'developer') {
      setCurrentUser({
        role: 'developer',
        name: 'Developer User',
        email: 'developer@college.edu',
        assignedClass: null,
      });
    }
  };

  /**
   * Add new admin
   */
  const addAdmin = (adminData) => {
    const newAdmin = {
      id: Math.max(...admins.map(a => a.id), 0) + 1,
      ...adminData,
    };
    setAdmins([...admins, newAdmin]);
    return newAdmin;
  };

  /**
   * Update admin details
   */
  const updateAdmin = (adminId, updatedData) => {
    setAdmins(admins.map(admin =>
      admin.id === adminId ? { ...admin, ...updatedData } : admin
    ));
  };

  /**
   * Delete admin
   */
  const deleteAdmin = (adminId) => {
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };

  /**
   * Assign admin to a class
   */
  const assignAdminToClass = (adminId, classData) => {
    updateAdmin(adminId, {
      assignedClass: classData,
    });
  };

  /**
   * Check if user has access to a route
   */
  const hasAccess = (requiredRoles) => {
    if (!Array.isArray(requiredRoles)) {
      requiredRoles = [requiredRoles];
    }
    return requiredRoles.includes(currentUser.role);
  };

  /**
   * Check if user is admin or has higher privileges
   */
  const isAdminOrAbove = () => {
    return ['admin', 'super_admin', 'developer'].includes(currentUser.role);
  };

  /**
   * Check if user is developer or super admin
   */
  const isDeveloperOrSuperAdmin = () => {
    return ['developer', 'super_admin'].includes(currentUser.role);
  };

  const value = {
    currentUser,
    admins,
    switchRole,
    addAdmin,
    updateAdmin,
    deleteAdmin,
    assignAdminToClass,
    hasAccess,
    isAdminOrAbove,
    isDeveloperOrSuperAdmin,
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};
