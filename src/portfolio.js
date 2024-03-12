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
  subTitle: emoji("Welcome to my personal website. This website is my canvas, where I've painted a picture of my educational pursuits, career milestones, skills, and the passion projects that define my journey.I'm a 📱 mobile developer with four years of experience and a passionate for creating amazing apps."),
  resumeLink:"https://drive.google.com/file/d/1O8Cjy73a7oT81KSPzAu_xDh--4sRWvFc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mayur228",
  linkedin: "https://www.linkedin.com/in/mayursinh-parmar/",
  gmail: "mayurshih001.mp@gmail.com",
  instagram:"https://www.instagram.com/the_app_maker_buddy",
  medium: "https://medium.com/@mayurshih001.mp",
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
  display: true, // Set false to hide this section, defaults to true
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
  display: true ,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects and POC",
  projects: [
    {
      image: require("./assets/images/widgetclock.webp"),
      projectName: "Android 12 Analog Clock Widget",
      projectDesc: "Android 12 Analog & Digital Clock Widget application give you support of android 12 based new material design look cool and latest widget clock on you mobile device without android 12 update needed.",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.firepost.app&hl=en_IN&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/firepost.webp"),
      projectName: "Firepost",
      projectDesc: "Fire Post is a social activity platform where you can post and find your routine requirements and Increase your local community network.This platform links you with people nearby who have similar interests.For the first time in the world of social media, we bring a social networking platform directly on a navigable map.",
      footerLink: [
        {
          name: "PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.firepost.app&hl=en_IN&gl=US"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chitchat_hub.png"),
      projectName: "ChitChat Hub",
      projectDesc: "ChitChat Hub is a dynamic and user-friendly chat application designed to connect people seamlessly. With its intuitive interface, ChitChat Hub allows users to engage in real-time conversations, share multimedia content, and stay connected with friends and family. Whether it's individual or group chats, the app offers a vibrant platform for lively discussions. Embrace the joy of communication",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/ChatApp"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/backend.png"),
      projectName: "ChitChat Hub Backend",
      projectDesc: "ChitChat Hub Backend: Ktor & MongoDB-powered solution with WebSocket for real-time messaging. Seamless authentication, robust storage, scalable architecture.",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/chitchat-hub-server"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/movie_mingle.png"),
      projectName: "Movie Mingle",
      projectDesc: "Welcome to Movie Mingle your go-to destination for all things movies and TV shows! Dive into a world of cinematic wonders with detailed cast information, gripping plot summaries, and real-time ratings. Whether you're into blockbusters or hidden gems, our user-friendly platform ensures an immersive and effortless entertainment experience. Elevate your viewing choices and stay in the know with Movie Mingle.",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/Movie-Mingle"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/koin_logo.png"),
      projectName: "Koin Demo",
      projectDesc: "🚀 Step into the future of Android development with my latest demo app! This showcase combines the power of Koin for dependency injection, Jetpack Compose for a sleek UI, and MVVM pattern with Retrofit for efficient API calls. Witness the seamless integration of these technologies, creating a responsive, modular, and scalable Android experience.Elevate your coding journey with simplicity and sophistication. Happy exploring! 🌟",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/KoinDemo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pigeon_lib.png"),
      projectName: "Pigeon Demo",
      projectDesc: "🐦 Flutter into streamlined communication with my Pigeon library demo! This showcase highlights the seamless integration of Pigeon, enhancing the connection between Dart and native code in Flutter apps. Explore simplified method calls and data transfer, providing a fluid and efficient bridge. Elevate your Flutter development with the simplicity and effectiveness of Pigeon. Happy coding! 🌟",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/pigeon_demo"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7046656173",
  email_address: "mayurshih001.mp@gmail.com"
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
  contactInfo,
  isHireable
};
