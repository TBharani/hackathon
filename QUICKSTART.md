# Admin Dashboard System - Quick Start Guide

## 🚀 Getting Started

### 1. **Installation**
All necessary files have been created. No additional installation required.

```bash
npm install  # Already done
npm run dev  # Start development server
```

### 2. **Project Structure**
New files created:
```
src/
├── context/
│   ├── RoleContextCreate.js      # Context definition
│   ├── RoleContext.jsx           # Provider component
│   └── useRoleHook.js            # Custom hook
├── components/
│   ├── AdminAssignment.jsx       # NEW - Admin CRUD module
│   ├── ProtectedRoute.jsx        # NEW - Access control
│   └── RoleSwitcher.jsx          # NEW - Role testing tool
└── pages/admin/
    ├── DeveloperAdminDashboard.jsx  # NEW - Dev/SuperAdmin dashboard
    └── AdminDashboard.jsx           # NEW - Class-restricted dashboard
```

## 🎯 Testing the System

### **Step 1: Start the Application**
```bash
npm run dev
```

### **Step 2: Open Role Switcher**
Look for the floating panel in the **bottom-right corner** showing:
- Current role
- Available roles to switch to
- List of admin accounts

### **Step 3: Switch Roles and Explore**

#### **As a Student (Default)**
```
- Click "Student" in Role Switcher
- Navigate to Dashboard via header
- View student profile, resume, hackathons
```

#### **As Developer**
```
- Click "Developer" in Role Switcher
- Navigate to "Admin Dashboard" in header
- View system-wide analytics
- Create and manage admins
- See all hackathon participation data
```

#### **As Super Admin**
```
- Click "Super Admin" in Role Switcher
- Navigate to "Admin Dashboard" in header
- Same access as Developer
```

#### **As Admin (Class-Restricted)**
```
- Click any admin name (e.g., "Admin Ravi") in Role Switcher
- Navigate to "Admin Dashboard" in header
- View ONLY your assigned class data
- See your class's student list and participation
```

## 📊 Dashboards Overview

### **Developer/Super Admin Dashboard** (`/admin/dashboard`)
- **Overview Tab**: Total stats and quick summary
- **Hackathon Analytics**: All hackathons with full participation data
- **Admin Management**: Create, edit, delete admins + assign to classes
- **System Overview**: Email logs and system status

### **Admin Dashboard** (`/admin/class`)
- **Overview**: Quick stats for assigned class
- **Participation**: Teams and students from your class in each hackathon
- **Students**: List of students in your assigned class
- **Hackathons**: View active hackathons (reference only)

## 🔑 Key Features to Test

### **1. Admin Assignment**
1. Login as Developer/Super Admin
2. Go to Admin Management tab
3. Click "Create New Admin"
4. Fill in:
   - Admin Name: "Test Admin"
   - Email: "test@college.edu"
   - Department: CSE
   - Year: 3rd Year
   - Section: A
5. Click "Create Admin"
6. Verify admin appears in the list

### **2. View Participation Data**
1. As Developer, go to "Hackathon Analytics" tab
2. See all hackathons with team counts
3. Check class-wise breakdown
4. Compare with Admin view (only their class visible)

### **3. Test Access Control**
1. Switch to Admin role
2. Try accessing `/admin/dashboard` (blocked)
3. See "Access Denied" page
4. Navigation shows only "Admin Dashboard" link
5. Switch to Developer - now can access

### **4. Data Isolation**
1. Note the assigned class for an admin
2. Switch to that admin role
3. Verify only their class data is visible
4. Try viewing other classes (not possible)

## 📝 Mock Data Available

### **Pre-loaded Admins**
- **Ravi**: IT – 2nd Year – Section A
- **Sneha**: CSE – 4th Year – Section C
- **Priya**: ECE – 3rd Year – Section B

### **Mock Hackathons**
- Smart India Hackathon 2024
- HackNITR 5.0
- Google Cloud Innovator Challenge
- And more...

### **Mock Classes**
- CSE 1st-4th Year (Sections A, B)
- IT 1st-4th Year (Section A)
- ECE 1st-4th Year (Sections A, B)
- CIVIL 1st-4th Year (Section A)

## 🔍 Useful URLs

| Role | URL | Path |
|------|-----|------|
| Student | Home | `/` |
| Student | Dashboard | `/dashboard` |
| Developer | Admin Dashboard | `/admin/dashboard` |
| Super Admin | Admin Dashboard | `/admin/dashboard` |
| Admin | Class Dashboard | `/admin/class` |

## 🎮 Interactive Testing Checklist

- [ ] Switch between all roles using Role Switcher
- [ ] Navigate to each dashboard
- [ ] Try accessing restricted routes
- [ ] Create a new admin
- [ ] Edit admin details
- [ ] Delete an admin
- [ ] View participation data as Developer
- [ ] View only class data as Admin
- [ ] Check data isolation
- [ ] Verify navigation changes by role
- [ ] Test "Access Denied" page

## 🐛 Troubleshooting

### **Role Switcher Not Visible**
- Scroll to bottom-right of page
- It's a floating panel
- Check if it's behind other content

### **Dashboard Not Loading**
- Verify you're logged in as correct role
- Check browser console for errors
- Ensure role has access to that route

### **Data Not Showing**
- Check if admin is assigned to a class
- Verify class has participation data
- Switch to Developer to see all data

## 📚 Documentation

See full documentation in:
- [ADMIN_DASHBOARD_DOCS.md](ADMIN_DASHBOARD_DOCS.md) - Comprehensive guide
- [RoleContext.jsx](src/context/RoleContext.jsx) - Role logic
- Component files have detailed comments

## 🚀 Next Steps

1. **Test all features** using the checklist above
2. **Review mock data** in [mockData.js](src/data/mockData.js)
3. **Explore components** - each has detailed comments
4. **Read full docs** - [ADMIN_DASHBOARD_DOCS.md](ADMIN_DASHBOARD_DOCS.md)

## ⚙️ Customization

### **Change Default Role**
In `src/context/RoleContext.jsx` line ~17:
```javascript
const [currentUser, setCurrentUser] = useState({
  role: 'student', // Change this
  // ...
});
```

### **Add New Admin Account**
In `src/context/RoleContext.jsx` line ~31:
```javascript
const [admins, setAdmins] = useState([
  // Add new admin object here
]);
```

### **Add Mock Classes**
In `src/data/mockData.js`:
```javascript
export const availableClasses = [
  // Add new class here
];
```

## 📞 Support

For issues or questions:
1. Check the full documentation
2. Review component comments
3. Check RoleContext for logic
4. Test with different roles

---

**Happy Testing! 🎉**
