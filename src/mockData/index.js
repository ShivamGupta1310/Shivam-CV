import {
  biocollection,
  block,
  fmsLogo,
  prana,
  profile,
  shop,
  sports,
} from "../assets/image";

export const main = {
  name: "Shivam Gupta",
  description:
    "Senior Software Engineer with 6+ years of experience in mobile and front-end development, specializing in React Native and React.js. Skilled in building robust applications with expertise in payment systems, in-app purchases, video conferencing, and health data integration. Adept at leading end-to-end delivery of scalable products, enhancing user engagement, and ensuring code quality through automated testing and CI/CD pipelines. Strong problem-solver with a proven track record of delivering high-performance applications in fast-paced environments.",
  image: "profilepic.jpg",
  bio: "I am a passionate and results-driven software engineer who enjoys turning complex ideas into seamless digital experiences. With hands-on expertise in cross-platform mobile and web development, I focus on writing clean, maintainable, and scalable code. I thrive on solving challenging problems, mentoring teams, and driving projects from concept to production. Beyond coding, I am always exploring emerging technologies, staying curious, and continuously pushing myself to learn and grow. My goal is to build impactful applications that make a difference in people’s lives while maintaining technical excellence.",
  contactmessage:
    "Here is where you should write your message to readers to have them get in contact with you.",
  email: "shivam.software.eng@gmail.com",
  phone: "+91 8320681757",
  profilepic: profile,
  github: "https://github.com/ShivamGupta1310/Shivam-Gupta-CV",
  project: "https://github.com/ShivamGupta1310/Shivam-Gupta-CV",
  address: {
    street: "Chandkheda",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "India",
  },
  social: [
    {
      name: "Linked In",
      url: "https://www.linkedin.com/in/shivam-gupta-39b992148",
      className: "fa fa-facebook",
    },
    {
      name: "Github",
      url: "https://github.com/nordicgiant2/react-nice-resume",
      className: "fa fa-github",
    },
  ],
  resume: {
    skillmessage: "",
    education: [
      {
        school: "GLS (Gujarat Law Society) University",
        degree: "Master of Computer Applications (MCA)",
        graduated: "July 2019",
        description: "",
      },
      {
        school: "Gujarat University (Chiman Bhai Patel Institute)",
        degree: "Bachelor of Computer Applications (BCA)",
        graduated: "July 2017",
        description: "",
      },
    ],
    work: [
      {
        company: "Tatvasoft Technologies",
        title: "Senior Software Engineer",
        years: "July 2019 - Present",
        description: "",
      },
    ],
    skills: [
      {
        name: "React Native",
        level: "90",
      },
      {
        name: "React JS",
        level: "90",
      },
      {
        name: "Redux & Redux-Saga",
        level: "80",
      },
      {
        name: "Javascript & TypeScript",
        level: "90",
      },
      {
        name: "Payment Gateway Integration",
        level: "80",
      },
      {
        name: "Push Notifications, Navigation, Performance Optimization",
        level: "80",
      },
      {
        name: "REST & GraphQL APIs",
        level: "80",
      },
      {
        name: "Responsive UI",
        level: "80",
      },
      {
        name: "Third Party Intergration (Zoom SDK, Google Fit, Apple HealthKit, Chart)",
        level: "80",
      },
      {
        name: "SQLite Database & CI/CD Pipeline",
        level: "80",
      },
      {
        name: "Responsive UI",
        level: "80",
      },
    ],
    tools: [
      {
        name: "Visual Studio",
        level: "100",
      },
      {
        name: "Git",
        level: "90",
      },
      {
        name: "Android Studio",
        level: "90",
      },
      {
        name: "Xcode",
        level: "90",
      },
      {
        name: "Postman",
        level: "80",
      },
      {
        name: "Figma",
        level: "80",
      },
      {
        name: "Firebase",
        level: "80",
      },
    ],
  },
  portfolio: {
    projects: [
      {
        title: "Fuel Management System App",
        frontend: "React Native",
        backend: "Node Js",
        points: [
          "Led the mobile application development for iOS and Android in React Native.",
          "Implemented secure authentication with OTP & 2FA, Bio-Metrics authentication.",
          "Built interactive dashboards with Line, Pie, and Bar charts",
          "Enabled chart export in PNG and CSV formats for reporting",
          "Developed reporting module with PDF export",
          "Delivered responsive UI aligned with business requirements",
          "Set up and maintain CI/CD pipelines using github actions and Microsoft App Center integrating E2E tests, unit tests, and code quality checks to follow industry standards",
        ],
        logo: fmsLogo,
        url: null,
      },
      {
        title: "Sports Engagement Platform App",
        frontend: "React Native",
        backend: "Ruby",
        url: "http://www.timbakerdev.com",
        points: [
          "Designed and developed an advanced video player supporting full-screen and portrait/landscape modes.",
          "Integrated real-time live match updates and interactive match player system",
          "Enabled users to create teams, schedule tournaments, and manage scorecards",
          "Built an interactive feature for users to simulate stadium play (select shots, update scores, and outcomes like out/not out)",
          "Developed a profile module with personalization and recommendations",
        ],
        logo: sports,
      },
      {
        title: "Prana AI App",
        frontend: "React Native",
        backend: "Ruby",
        url: "http://www.timbakerdev.com/originalthaifood.github.io",
        points: [
          "Led complete app lifecycle including client communication, delivery, and release management.",
          "Implemented multi-role user management and dynamic assessment system.",
          "Integrated facial scanning to generate health scores (Low, Normal, High) with AI-driven consultation suggestions (Doctor, Coach, or AI).",
          "Enabled doctor video consultations via Zoom SDK, including the ability to generate and share consultation reports with patients.",
          "Successfully integrated Stripe payment gateway with secure subscription management and in-app purchases.",
          "Delivered regular APK/IPA builds for client testing and feedback.",
        ],
        logo: prana,
      },
      {
        title: "Bio Collection App",
        frontend: "React Native",
        backend: "Ruby",
        url: "http://www.timbakerdev.com",
        points: [
          "    Built application infrastructure from scratch.",
          "Integrated barcode scanning for streamlined sample data collection.",
          "Designed system architecture supporting franchises, sub-franchises, and laboratories.",
          "Enabled laboratories to collect and test samples, then share reports digitally.",
          "Ensured high reliability with comprehensive Jest test coverage.",
        ],
        logo: biocollection,
      },
      {
        title: "Builder Internal Block",
        frontend: "React Native & React JS",
        backend: "Ruby",
        url: "http://www.timbakerdev.com",
        points: [
          "Developed reusable UI components for cross-platform usage.",
          "Implemented real-time collaboration tools (whiteboard, comments, socket communication).",
          "Integrated Apple Pay for secure transactions.",
        ],
        logo: block,
      },
      {
        title: "GoShop – E-commerce Website ",
        frontend: "React JS",
        backend: "PHP",
        url: "http://www.timbakerdev.com",
        points: [
          "Built a scalable e-commerce platform with interactive shopping features.",
          "Developed product catalog, advanced search, filters, cart, and wishlist functionality.",
          "Implemented secure checkout flow with multiple payment options.",
          "Created order tracking and history module for better user experience.",
          "Developed “Tap & Win” and “Spin & Win” gamified features with Node.js backend.",
          "Integrated Facebook authentication for seamless onboarding and social login.",
        ],
        logo: shop,
      },
    ],
  },
};
