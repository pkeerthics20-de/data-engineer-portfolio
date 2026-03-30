/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "pkeerthics20-de",
  title: "Hi all, I'm PK",
  subTitle: emoji(
    "I am a Data Engineer specializing in building scalable data pipelines,optimizing SQL queries, and designing efficient data warehouse systems." ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pkeerthics20-de",
  linkedin: "https://www.linkedin.com/in/keerthi-p-78953b222/",
  gmail: "pkeerthiyadav2003@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "DATA ENGINEER SPECIALIZING IN BUILDING SCALABLE DATA PIPELINES AND OPTIMIZING DATA SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and build scalable data pipelines to collect, process, and transform large datasets for analytics and business insights"
    ),
    emoji(
      "⚡ Develop and optimize complex SQL queries and data transformations using Snowflake and modern data warehousing practices"
    ),
    emoji(
      "⚡ Integrate data from multiple sources and build reliable ETL workflows to ensure high-quality, analytics-ready data"
    ),
    emoji(
      "⚡ Improve data performance through query optimization, data modeling, and efficient data architecture"
    ),
    emoji(
      "⚡ Support analytics and reporting by delivering clean, structured, and well-documented datasets"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Snowflake",
    fontAwesomeClassname: "fas fa-snowflake"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Databricks",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "PySpark",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "ETL Pipelines",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
  {
    skillName: "Data Modeling",
    fontAwesomeClassname: "fas fa-project-diagram"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RV COLLEGE OF ENGG",
      logo: require("./assets/images/college.jpg"),
      subHeader: "Computer Science and Engg",
      duration: "December 2020 - August 2024"
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ETL Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DATA ARCHITECT",
      progressPercentage: "80%"
    },
    {
      Stack: "DATA SOLUTIONING",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "GENAPCT",
      companylogo: require("./assets/images/download.png"),
      date: "Jan 2024 – Present",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "Python Developer",
      company: "AIRBUS",
      companylogo: require("./assets/images/airbus.png"),
      date: "Jun 2023 – Aug 2023",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: null,
      projectName: "END TO END DIGITAL COCKPIT",
      projectDesc: "Designed and developed a data-driven digital cockpit for supply chain management, enabling real-time visibility, performance tracking, and data-driven decision-making using advanced data engineering practices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: null,
      projectName: "Data Pipeline Optimization",
      projectDesc: "Optimized large-scale SQL pipelines and improved query performance, reducing execution time and enhancing data processing efficiency for analytics workloads.",
      footerLink: [
        {
          name: "Visit Website",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Professional certifications and milestones in Data Engineering.",

  achievementsCards: [
    {
      title: "SnowPro Core Certification",
      subtitle:
        "Certified Snowflake professional with expertise in data warehousing, query optimization, data sharing, and scalable data pipelines.",
      image: require("./assets/images/snowflake.png"),
      imageAlt: "Snowflake Certification Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://achieve.snowflake.com/a187f87f-8ba5-4dd0-883e-3a3d548dffc9#acc.BhFG3zs8"
        }
      ]
    },
    {
      title: "Databricks Data Engineer Associate",
      subtitle:
        "Certified in building data pipelines using Apache Spark, Delta Lake, and scalable data engineering workflows in Databricks.",
      image: require("./assets/images/databricks.png"),
      imageAlt: "Databricks Certification Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://credentials.databricks.com/cfe078c4-5581-4a06-80fb-d525b6189134#acc.m6EeaIpG"
        }
      ]
    }
  ],
  display: true // Set false to hide this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8050044134",
  email_address: "pkeerthiyadav2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
