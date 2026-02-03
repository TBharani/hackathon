# Admin Dashboard System Documentation

## Overview
This document describes the implemented admin dashboard system for the Hackathon Management Platform. The system provides role-based access control and allows different user roles to manage hackathons and student participation with appropriate permission levels.

## User Roles & Permissions

### 1. **Student** (Default User)
- Access: Student Dashboard only (`/dashboard/*`)
- Permissions:
  - View and edit own profile
  - Apply for hackathons
  - Participate in teams
  - Build and manage resume
  - View hackathon history
  - Manage account settings

### 2. **Developer** (Highest Authority)
- Access: Developer/Super Admin Dashboard (`/admin/dashboard`)
- Permissions:
  - View all college-wide data
  - View all hackathons and participation statistics
  - View participation count per hackathon across all classes
  - Assign admins to specific classes
  - Manage admin accounts (create, edit, delete)
  - Access system-wide analytics
  - View class-wise breakdown of participation

### 3. **Super Admin** (Equal to Developer)
- Access: Developer/Super Admin Dashboard (`/admin/dashboard`)
- Permissions: **Identical to Developer**
  - Has the same UI and same access level
  - No functional difference from Developer

### 4. **Admin** (Class-Restricted Authority)
- Access: Admin Dashboard (`/admin/class`)
- Permissions (Restricted to assigned class only):
  - View students in assigned class
  - View hackathon participation for assigned class only
  - See participation count only for their class
  - View hackathons list
  - **Cannot access**:
    - Other classes' data
    - College-wide analytics
    - Admin assignment module
    - Developer/Super Admin dashboards

## Project Structure

```
src/
├── context/
│   └── RoleContext.jsx                 # Role management context
├── components/
│   ├── RoleSwitcher.jsx               # Testing tool for role switching
│   ├── ProtectedRoute.jsx             # Access control wrapper
│   └── AdminAssignment.jsx            # Admin creation & assignment UI
├── pages/
│   └── admin/
│       ├── DeveloperAdminDashboard.jsx # Developer/Super Admin dashboard
│       └── AdminDashboard.jsx          # Class-restricted admin dashboard
└── data/
    └── mockData.js                     # Extended with admin data
```

## Key Features

### 1. **Role Context** (`src/context/RoleContext.jsx`)
Manages:
- Current user role and details
- Admin users list
- Admin CRUD operations
- Permission checking functions
- Role switching (for development)

**Key Functions:**
- `switchRole(role, adminData)` - Switch current user role
- `addAdmin(adminData)` - Create new admin
- `updateAdmin(adminId, updatedData)` - Edit admin
- `deleteAdmin(adminId)` - Delete admin
- `assignAdminToClass(adminId, classData)` - Assign admin to class
- `hasAccess(requiredRoles)` - Check if user has access
- `isDeveloperOrSuperAdmin()` - Check elevated privileges

### 2. **Protected Route** (`src/components/ProtectedRoute.jsx`)
- Wraps routes that require specific roles
- Shows "Access Denied" message for unauthorized users
- Provides clear indication of required roles

### 3. **Role Switcher** (`src/components/RoleSwitcher.jsx`)
- Floating component for testing (development only)
- Allows switching between all roles
- Shows current role and admin accounts
- Located at bottom-right corner

### 4. **Admin Assignment Module** (`src/components/AdminAssignment.jsx`)
**Available to:** Developer & Super Admin only

Features:
- Create new admin accounts
- Edit existing admin details
- Delete admins
- Assign admins to classes (one admin = one class)
- Form validation
- Admin list display with class assignments

Form Fields:
- Admin Name
- Email
- Department (CSE, IT, ECE, CIVIL)
- Year (1st, 2nd, 3rd, 4th)
- Section (A, B, C)

### 5. **Developer/Super Admin Dashboard** (`src/pages/admin/DeveloperAdminDashboard.jsx`)
**Access:** `/admin/dashboard`

Tabs:
1. **Dashboard Overview**
   - Summary statistics (total hackathons, students, admins, group participations)
   - Active hackathons list
   - Quick stats cards

2. **Hackathon Analytics**
   - Participation table for all hackathons
   - Group vs individual participation breakdown
   - Class-wise breakdown for each hackathon

3. **Admin Management**
   - Full admin assignment module
   - Create, edit, delete admins
   - Assign admins to classes

4. **System Overview**
   - Email alert logs
   - System status indicator
   - Real-time updates

### 6. **Admin Dashboard** (`src/pages/admin/AdminDashboard.jsx`)
**Access:** `/admin/class`

Tabs:
1. **Overview**
   - Quick statistics for assigned class
   - Class participation summary
   - Hackathons with class participation

2. **Participation**
   - Table showing teams and students from assigned class only
   - Per-hackathon breakdown
   - Read-only data (no filtering by other classes)

3. **Students**
   - List of students in assigned class
   - Register number, name, email
   - Only class members visible

4. **Hackathons**
   - List of all active hackathons
   - Read-only view for reference

## Class Definition Structure

Classes are defined using:
- **Department:** CSE, IT, ECE, CIVIL
- **Year:** 1st Year, 2nd Year, 3rd Year, 4th Year
- **Section:** A, B, C

Example:
```
CSE – 3rd Year – Section B
IT – 2nd Year – Section A
```

## Authentication Flow

1. User visits the application
2. Default role is `student`
3. Use **Role Switcher** (bottom-right) to switch roles
4. Navigation automatically updates based on role
5. Protected routes block unauthorized access
6. "Access Denied" page shows required permissions

## Mock Data Structure

### Admins
```javascript
{
  id: 1,
  name: 'Admin Ravi',
  email: 'ravi.admin@college.edu',
  assignedClass: {
    department: 'IT',
    year: '2nd Year',
    section: 'A'
  }
}
```

### Hackathon Participation
```javascript
{
  hackathonId: 101,
  hackathonName: '...',
  totalTeams: 15,
  totalStudents: 45,
  byClass: {
    'CSE-3rd-A': { teams: 3, students: 9 },
    'IT-2nd-A': { teams: 2, students: 6 },
    // ...
  },
  groupVsIndividual: {
    groupParticipation: 12,
    individualParticipation: 3
  }
}
```

### Students by Class
```javascript
{
  'CSE-3rd-A': [
    {
      registerNumber: '21CS001',
      name: 'Rajesh Kumar',
      email: 'rajesh@college.edu'
    },
    // ...
  ]
}
```

## Routing Table

| Route | Role(s) | Component | Description |
|-------|---------|-----------|-------------|
| `/` | All | Home | Landing page |
| `/hackathons` | All | Hackathons | View all hackathons |
| `/login` | All | Login | Login page |
| `/register` | All | Register | Registration page |
| `/dashboard/*` | student | DashboardLayout | Student dashboard |
| `/admin/dashboard` | developer, super_admin | DeveloperAdminDashboard | Admin & developer dashboard |
| `/admin/class` | admin | AdminDashboard | Class-restricted admin dashboard |
| `*` | All | 404 | Not found page |

## Key Features Implemented

✅ **Role-Based Access Control**
- Frontend role switching
- Protected routes
- Permission checking

✅ **Admin Management**
- Create, edit, delete admins
- Assign admins to classes
- One admin = one class rule

✅ **Developer/Super Admin Dashboard**
- System-wide analytics
- Admin management interface
- Hackathon participation insights
- Email alert logs simulation

✅ **Admin Dashboard**
- Class-restricted views
- Student lists
- Class-specific participation data
- Secure access control

✅ **Data Isolation**
- Admins cannot see other classes
- Cannot access developer/super admin routes
- Cannot manage other admins

✅ **User-Friendly UI**
- Responsive design
- Multiple tabs for different features
- Summary cards for quick insights
- Tables for detailed data

## Email Alert Simulation

When students apply for hackathons:
1. Success popup shown (UI simulation only)
2. Message: "Confirmation email has been sent to your registered email ID"
3. Admin/Developer can view email logs
4. Shows event name, applied count, and "Email Alert Sent" status
5. No actual email sending (frontend only)

## Testing the System

### Step 1: Switch Roles
Use the **Role Switcher** (bottom-right corner) to change roles:
- Click to view available roles
- Student, Developer, Super Admin
- Select any Admin account to switch

### Step 2: Navigate
Use the **Header Navigation** to access relevant dashboards:
- Students → `/dashboard`
- Admins → `/admin/class`
- Developer/Super Admin → `/admin/dashboard`

### Step 3: Test Permissions
- Try accessing restricted routes
- View "Access Denied" message for unauthorized access
- Verify data isolation for admin dashboards

## Important Notes

⚠️ **Frontend Only Implementation**
- No backend API calls
- All data is mock/static
- State managed with React Context
- Changes persist only during session

⚠️ **Development Mode**
- Role Switcher visible for easy testing
- Remove or hide for production
- In production, implement real authentication

⚠️ **Student Dashboard**
- Completely separate from admin system
- Existing student features untouched
- Admin system is additive, not replacing

## Future Enhancements

1. **Backend Integration**
   - Connect to real database
   - Implement actual role-based authentication
   - API endpoints for admin management

2. **Advanced Analytics**
   - Interactive charts and graphs
   - Export data functionality
   - Real-time data updates

3. **Email System**
   - Implement actual email sending
   - Email templates
   - Bulk email functionality

4. **Audit Logs**
   - Track admin actions
   - Maintain change history
   - Compliance reporting

5. **Search & Filtering**
   - Search for specific hackathons
   - Filter by department, year, section
   - Advanced sorting options

## Support

For questions or issues with the admin dashboard system, refer to:
- [RoleContext.jsx](src/context/RoleContext.jsx) - Role management logic
- [DeveloperAdminDashboard.jsx](src/pages/admin/DeveloperAdminDashboard.jsx) - Developer dashboard
- [AdminDashboard.jsx](src/pages/admin/AdminDashboard.jsx) - Class-restricted dashboard
