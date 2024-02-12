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
  username: "Mayursinh Parmar",
  title: "Hi all, I'm Mayursinh",
  subTitle: emoji("I'm a 📱 mobile developer with four years of experience and a passionate for creating amazing apps.My goal is to create apps 🙌 that are both efficient and user-friendly, and that make a difference in people's lives."),
  resumeLink:"https://drive.google.com/file/d/1O8Cjy73a7oT81KSPzAu_xDh--4sRWvFc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mayur228",
  linkedin: "https://www.linkedin.com/in/mayursinh-parmar/",
  gmail: "mayurshih001.mp@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Mobile DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("My Skills as an Android Developer💡"),
    emoji("🔸 Programming languages: Java | Kotlin"),
    emoji("🔸 Android UI toolkit: Android jetpack compose"),
    emoji("🔸 Design Pattern: MVC | MVVM | Clean architecture"),
    emoji("🔸 Network Lib: Retrofit | Volly"),
    emoji("🔸 Dependency Injection: Hilt | koin"),
    emoji("🔸 Locally data store: RoomDb | Shared Preferences"),
    emoji("🔸 Cloud integration: Firebase | Google"),
    emoji("🔸 Testing: Unit Testing | Integration Testing"),
    emoji("·····················································································································"),
    emoji("My Skills as a Flutter Developer💡"),
    emoji("🔸 Programming languages: Dart"),
    emoji("🔸 Design Pattern: MVC | MVVM | Bloc | Clean architecture"),
    emoji("🔸 State management lib: BloC | Provider"),
    emoji("🔸 Network Lib: Dio"),
    emoji("🔸 Dependency Injection: GetX | GetIt"),
    emoji("🔸 Locally data store: Floor | Shared Preferences"),
    emoji("🔸 Cloud integration: Firebase | Google"),
    emoji("🔸 Testing: Unit Testing | Widget Testing | Integration Testing")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SHREE DHANVANTARY COLLEGE OF DIPLOMA ENGINEERING",
      logo: require("./assets/images/diploma.jpeg"),
      subHeader: "Diploma in Computer Engineering",
      duration: "2018",
    },
    {
      schoolName: "Sigma University India",
      logo: require("./assets/images/be.jpg"),
      subHeader: "Bachelor of Engineering in Computer",
      duration: "2021",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter",
      progressPercentage: "70%"
    },
    
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Knoxpo",
      companylogo: require("./assets/images/knoxpo_logo.jpeg"),
      date: "Aug 2021 – Present",
    
    },
    {
      role: "Android Developer",
      company: "IcanStudioz App Solution",
      companylogo: require("./assets/images/icanstudioz_logo.jpeg"),
      date: "2019 - 2020",
    },
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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7046656173",
  email_address: "mayurshih001.mp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
