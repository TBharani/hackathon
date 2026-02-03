# 🚀 Hackathon — Hackathon Management Frontend

A frontend-only React app for managing hackathon listings and student dashboards. This README is updated to match the repository's current folder structure and JavaScript/JSX files.

### Quick start
```bash
# install deps
npm install

# start dev server
npm run dev

# open in browser
http://localhost:5173
```

---

## What changed
- README updated to reflect actual files in `src/` (JSX/JS, not TypeScript).
- Project structure section below mirrors the current repository layout.

---

## Tech Stack
- React (JSX)
- Vite
- Tailwind CSS
- React Router DOM
- Plain JavaScript for mock data

---

## Project structure (current)

```
Hackathon/
├── public/
├── src/
│   ├── App.css
+  │   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
   │
│   ├── assets/
│   ├── components/
│   │   ├── AdminAssignment.jsx
│   │   ├── Footer.jsx
│   │   ├── HackathonCard.jsx
│   │   ├── Header.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── RoleSwitcher.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── context/
│   │   ├── RoleContext.jsx
│   │   ├── RoleContextCreate.js
│   │   └── useRoleHook.js
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   │
│   ├── pages/
│   │   ├── Hackathons.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── DeveloperAdminDashboard.jsx
│   │   └── dashboard/
│   │       ├── DashboardHome.jsx
│   │       ├── HackathonHistory.jsx
│   │       ├── Profile.jsx
│   │       ├── ResumeBuilder.jsx
│   │       └── Settings.jsx
│   │
│   └── utils/
│       └── cn.js
|
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

Notes:
- Entry points: `src/main.jsx` and `src/App.jsx`.
- Styles: `src/index.css` and `src/App.css`.

---

## File tree

```
File Tree: hackathon
Generated on: 2/3/2026, 2:12:07 PM
Root path: c:\Users\Bhara\OneDrive\Documents\hackathon

────────────────────────────────────────────────────────────────────────────────

└── 📁 Hackathon/
  ├── 📁 public/
  │   └── 🖼️ vite.svg
  ├── 📁 src/
  │   ├── 📁 assets/
  │   │   └── 🖼️ react.svg
  │   ├── 📁 components/
  │   │   ├── 📄 AdminAssignment.jsx
  │   │   ├── 📄 Footer.jsx
  │   │   ├── 📄 HackathonCard.jsx
  │   │   ├── 📄 Header.jsx
  │   │   ├── 📄 ProtectedRoute.jsx
  │   │   ├── 📄 RoleSwitcher.jsx
  │   │   └── 📄 Sidebar.jsx
  │   ├── 📁 context/
  │   │   ├── 📄 RoleContext.jsx
  │   │   ├── 📄 RoleContextCreate.js
  │   │   └── 📄 useRoleHook.js
  │   ├── 📁 data/
  │   │   └── 📄 mockData.js
  │   ├── 📁 layouts/
  │   │   └── 📄 DashboardLayout.jsx
  │   ├── 📁 pages/
  │   │   ├── 📁 admin/
  │   │   │   ├── 📄 AdminDashboard.jsx
  │   │   │   └── 📄 DeveloperAdminDashboard.jsx
  │   │   ├── 📁 dashboard/
  │   │   │   ├── 📄 DashboardHome.jsx
  │   │   │   ├── 📄 HackathonHistory.jsx
  │   │   │   ├── 📄 Profile.jsx
  │   │   │   ├── 📄 ResumeBuilder.jsx
  │   │   │   └── 📄 Settings.jsx
  │   │   ├── 📄 Hackathons.jsx
  │   │   ├── 📄 Home.jsx
  │   │   ├── 📄 Login.jsx
  │   │   └── 📄 Register.jsx
  │   ├── 📁 utils/
  │   │   └── 📄 cn.js
  │   ├── 🎨 App.css
  │   ├── 📄 App.jsx
  │   ├── 🎨 index.css
  │   └── 📄 main.jsx
  ├── ⚙️ .gitignore
  ├── 📝 ADMIN_DASHBOARD_DOCS.md
  ├── 📝 FINAL_SUMMARY.md
  ├── 📝 IMPLEMENTATION_CHECKLIST.md
  ├── 📝 IMPLEMENTATION_SUMMARY.md
  ├── 📝 INDEX.md
  ├── 📝 QUICKSTART.md
  ├── 📝 README.md
  ├── 📝 README_ADMIN_DASHBOARD.md
  ├── 📝 STATUS.md
  ├── 📝 VERIFICATION_REPORT.md
  ├── 📝 VISUAL_GUIDE.md
  ├── 📄 eslint.config.js
  ├── 🌐 index.html
  ├── ⚙️ package-lock.json
  ├── ⚙️ package.json
  ├── 📄 postcss.config.js
  ├── 📄 tailwind.config.js
  └── 📄 vite.config.js

────────────────────────────────────────────────────────────────────────────────
Generated by FileTree Pro Extension
```

## Where mock data lives
- `src/data/mockData.js` — contains sample student profiles and hackathon objects used across the UI.

---

## Scripts
- `npm run dev` — start dev server
- `npm run build` — create production build
- `npm run preview` — preview production build

---

## Notes & Next steps
- This is a frontend-only project; no backend or real auth is included.
- If you want, I can:
  - Add a small CONTRIBUTING section
  - Generate a shorter developer quickstart in `README.md`
  - Create a `README_ADMIN_DASHBOARD.md` with admin-specific info

---

If you'd like any further edits (formatting, badges, or adding examples/screenshots), tell me which sections to expand.

---

## 📞 Support

For questions or issues:
1. Check the code comments
2. Review this README
3. Examine the mock data structure
4. Test in browser developer tools

---

## 🏆 Credits

Built with ❤️ for students and developers

**Tech Stack:**
- React + Vite
- Tailwind CSS
- React Router DOM

---

## 📜 License

Free to use for educational and personal projects.

---

**Happy Coding! 🚀**"# Hackathon" 
