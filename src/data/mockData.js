// Mock data for the Hackathon Management Platform

// Student Profile Data
export const studentProfile = {
  name: "Rajesh Kumar",
  department: "Computer Science and Engineering",
  year: "3rd Year",
  section: "A",
  registerNumber: "21CS001",
  tenthMarks: "95%",
  twelfthMarks: "92%",
  currentCGPA: "8.7",
  phoneNumber: "+91 9876543210",
  collegeEmail: "rajesh.kumar@college.edu",
  secondaryEmail: "rajeshkumar@gmail.com",
  achievements: [
    "First Prize in Smart India Hackathon 2023",
    "Winner of College Project Exhibition 2023",
    "Published research paper in IJCSE",
    "Google Cloud Certified - Associate Cloud Engineer"
  ],
  skills: [
    "React JS",
    "Node.js",
    "Python",
    "Machine Learning",
    "MongoDB",
    "Firebase",
    "Git",
    "Docker"
  ],
  careerObjective: "Aspiring software engineer with strong foundation in full-stack development and machine learning. Seeking opportunities to apply my technical skills and contribute to innovative projects.",
  education: [
    {
      degree: "Bachelor of Engineering - Computer Science",
      institution: "Anna University College of Engineering",
      year: "2021 - 2025",
      cgpa: "8.7"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "St. John's Higher Secondary School",
      year: "2021",
      percentage: "92%"
    },
    {
      degree: "Secondary (10th)",
      institution: "St. John's Higher Secondary School",
      year: "2019",
      percentage: "95%"
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: "React, Node.js, MongoDB, Stripe API",
      duration: "Jan 2024 - Mar 2024"
    },
    {
      title: "AI-Based Disease Prediction System",
      description: "Machine learning model to predict diseases based on symptoms",
      technologies: "Python, TensorFlow, Flask, React",
      duration: "Aug 2023 - Nov 2023"
    },
    {
      title: "College Event Management System",
      description: "Web application for managing college events and registrations",
      technologies: "React, Firebase, Tailwind CSS",
      duration: "Mar 2023 - May 2023"
    }
  ],
  internships: [
    {
      company: "TCS (Tata Consultancy Services)",
      role: "Software Development Intern",
      duration: "May 2023 - Jul 2023",
      description: "Worked on developing web applications using React and Spring Boot"
    }
  ],
  certifications: [
    {
      name: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "Dec 2023"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Coursera - University of Hong Kong",
      date: "Aug 2023"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "Jun 2023"
    }
  ]
};

// Hackathon Participation History
export const hackathonHistory = [
  {
    id: 1,
    hackathonName: "Smart India Hackathon 2024",
    teamName: "Code Warriors",
    track: "Smart Automation",
    year: "2024",
    position: "1st Prize",
    status: "Completed",
    date: "March 15-17, 2024",
    description: "Developed an AI-powered traffic management system"
  },
  {
    id: 2,
    hackathonName: "HackMIT 2023",
    teamName: "Tech Innovators",
    track: "Healthcare",
    year: "2023",
    position: "Finalist",
    status: "Completed",
    date: "September 16-17, 2023",
    description: "Created a telemedicine platform for rural areas"
  },
  {
    id: 3,
    hackathonName: "Google Solution Challenge 2023",
    teamName: "Code Warriors",
    track: "Education",
    year: "2023",
    position: "Top 100",
    status: "Completed",
    date: "January 2023",
    description: "Built an interactive learning platform for students"
  },
  {
    id: 4,
    hackathonName: "DevFest Hackathon 2022",
    teamName: "Tech Ninjas",
    track: "Environment",
    year: "2022",
    position: "2nd Prize",
    status: "Completed",
    date: "November 25-26, 2022",
    description: "Developed a waste management tracking system"
  }
];

// All Hackathons (for homepage)
export const allHackathons = [
  // Ongoing Hackathons
  {
    id: 101,
    title: "Smart India Hackathon 2024 - Finals",
    date: "April 10-12, 2024",
    status: "Ongoing",
    category: "National",
    description: "Grand finale of Smart India Hackathon with 36-hour coding challenge",
    registrationDeadline: "April 5, 2024",
    prize: "₹1,00,000",
    participants: "500+"
  },
  {
    id: 102,
    title: "HackNITR 5.0",
    date: "April 8-10, 2024",
    status: "Ongoing",
    category: "College",
    description: "Annual hackathon of NIT Rourkela focusing on social impact",
    registrationDeadline: "April 6, 2024",
    prize: "₹50,000",
    participants: "300+"
  },
  {
    id: 103,
    title: "Google Cloud Innovator Challenge",
    date: "April 5-15, 2024",
    status: "Ongoing",
    category: "Corporate",
    description: "Build innovative solutions using Google Cloud Platform",
    registrationDeadline: "April 4, 2024",
    prize: "$10,000",
    participants: "1000+"
  },

  // Upcoming Hackathons
  {
    id: 104,
    title: "HackMIT 2024",
    date: "September 14-15, 2024",
    status: "Upcoming",
    category: "International",
    description: "MIT's premier hackathon bringing together innovative minds",
    registrationDeadline: "August 30, 2024",
    prize: "$25,000",
    participants: "Expected 1000+"
  },
  {
    id: 105,
    title: "ETHIndia 2024",
    date: "August 2-4, 2024",
    status: "Upcoming",
    category: "Blockchain",
    description: "India's largest Ethereum hackathon",
    registrationDeadline: "July 20, 2024",
    prize: "$50,000",
    participants: "Expected 800+"
  },
  {
    id: 106,
    title: "Microsoft Imagine Cup 2024",
    date: "July 15-20, 2024",
    status: "Upcoming",
    category: "Corporate",
    description: "Global student technology competition",
    registrationDeadline: "June 30, 2024",
    prize: "$100,000",
    participants: "Expected 2000+"
  },
  {
    id: 107,
    title: "NASA Space Apps Challenge 2024",
    date: "October 5-6, 2024",
    status: "Upcoming",
    category: "International",
    description: "International hackathon by NASA",
    registrationDeadline: "September 25, 2024",
    prize: "Global Recognition",
    participants: "Expected 5000+"
  },
  {
    id: 108,
    title: "AngelHack Global 2024",
    date: "June 22-23, 2024",
    status: "Upcoming",
    category: "International",
    description: "World's largest hackathon series",
    registrationDeadline: "June 15, 2024",
    prize: "$20,000",
    participants: "Expected 1500+"
  },

  // Past Hackathons
  {
    id: 109,
    title: "Smart India Hackathon 2023",
    date: "March 15-17, 2023",
    status: "Completed",
    category: "National",
    description: "Successfully completed national level hackathon",
    winner: "Team Code Warriors",
    prize: "₹1,00,000",
    participants: "450"
  },
  {
    id: 110,
    title: "HackMIT 2023",
    date: "September 16-17, 2023",
    status: "Completed",
    category: "International",
    description: "MIT's annual hackathon completed successfully",
    winner: "Team InnovateMIT",
    prize: "$20,000",
    participants: "900"
  },
  {
    id: 111,
    title: "Google Solution Challenge 2023",
    date: "March 2023",
    status: "Completed",
    category: "Corporate",
    description: "Google's global development challenge",
    winner: "Team TechForGood",
    prize: "$5,000",
    participants: "1200"
  },
  {
    id: 112,
    title: "DevFest Hackathon 2022",
    date: "November 25-26, 2022",
    status: "Completed",
    category: "Community",
    description: "Annual DevFest community hackathon",
    winner: "Team EcoTech",
    prize: "₹30,000",
    participants: "200"
  },
  {
    id: 113,
    title: "MLH Localhost 2023",
    date: "February 18-19, 2023",
    status: "Completed",
    category: "Community",
    description: "Major League Hacking community event",
    winner: "Team DataDriven",
    prize: "$5,000",
    participants: "350"
  },
  {
    id: 114,
    title: "Junction 2022",
    date: "November 11-13, 2022",
    status: "Completed",
    category: "International",
    description: "Europe's leading hackathon",
    winner: "Team Nordic Solutions",
    prize: "€10,000",
    participants: "1500"
  }
];