import { useContext } from 'react';
import { RoleContext } from './RoleContextCreate';

/**
 * Custom hook to use Role Context
 * Must be used within RoleProvider
 */
export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within RoleProvider');
  }
  return context;
};
