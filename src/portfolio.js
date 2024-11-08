import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/first";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 6000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "App Sensei",
  title: "Hey there, I'm Mayursinh",
  subTitle: emoji("Welcome to my personal website. This website is my canvas, where I've painted a picture of my educational pursuits, career milestones, skills, and the passion projects that define my journey.I'm a 📱 mobile developer with four years of experience and a passionate for creating amazing apps."),
  resumeLink:"https://drive.google.com/file/d/1QPsAam7cSll6j0_j1DZhNAw7yIYLLxML/view?usp=drive_link",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mayur228",
  linkedin: "https://www.linkedin.com/in/mayursinh-parmar/",
  gmail: "mayurshih001.mp@gmail.com",
  instagram:"https://www.instagram.com/the_app_maker_buddy",
  hashnode: "https://mayursinhdevblog.hashnode.dev/",
  youtube: "https://www.youtube.com/@Theappmakerbuddy",
  twitter: "https://twitter.com/app_maker_buddy",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "So Baiscally I am Mobile developer (Android + Flutter). Also I write some blogs about Mobile development. And post some insights and tips about Mobile development on Instagram and YouTube. ",
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
  softwareSkills:[],

  // softwareSkills: [
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-kotlin"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   },
  //   {
  //     skillName: "android",
  //     fontAwesomeClassname: "fab fa-android"
  //   }
  // ],
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
          url: "https://play.google.com/store/apps/details?id=androidclockwidget.analogclockwidget.androiddigitalclockwidget&hl=en_IN&gl=US"
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
      image: require("./assets/images/recipe _app.png"),
      projectName: "Recipe Discover",
      projectDesc: "Recipe Discover is a recipe app designed to help users explore a vast collection of recipes conveniently. With Recipe Discover, users can browse recipes by category, search for specific recipes, and save their favorite recipes for easy access.",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/Recipe-App"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/github_browser.png"),
      projectName: "Github Browser",
      projectDesc: "Introducing Github Browser, your go-to tool for exploring code repositories on GitHub! With Github Browser, easily search for repositories, check out commits, and move through branches smoothly. But wait, there's more! Customize your coding experience by saving your preferred repositories to a special list for easy access. Start exploring the world of open-source projects with Github Browser today!",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/github-browser-mvvm"
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
    },
    {
      image: require("./assets/images/newshub_icon.png"),
      projectName: "Newshub",
      projectDesc: "Introducing Newshub, your go-to destination for staying updated with the latest news and trends from around the world. Powered by cutting-edge technology and designed with user convenience in mind, Newshub delivers a seamless news browsing experience like never before.",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/newshub"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pokepedia_logo.png"),
      projectName: "Pokepedia",
      projectDesc: "Welcome to Pokepedia, the ultimate destination for Pokémon enthusiasts! 🎉 With a blend of sleek design, powerful technology, and comprehensive features, Pokepedia is your passport to the exciting world of Pokémon! 🚀",
      footerLink: [
        {
          name: "Github Source",
          url: "https://github.com/Mayur228/pokepedia"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some My Office projects

const myOfficeProjects = {
  title: "My Office Projects",
  officeProjects: [
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Agritech App",
      projectDesc: "Agritech App helps people easily check up-to-date market prices for crops, added directly by farmers and commission agents. Users can connect with each other instantly through real-time chat or direct calls. With one click, they can also share full-screen market reports as photos on social media.",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Video Making App",
      projectDesc: "This app lets people create fun short videos and challenge their friends to make similar videos! Users can film creative content, set up challenges, and invite friends to join in. The app makes it easy to share videos and keep the fun going with friends. Perfect for those who love showing off their skills, trying new trends, and connecting through challenges!",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Bill Payment App",
      projectDesc: "This app makes managing finances easy by helping users pay credit card bills, check their credit score, and pay off loans all in one place. With simple tools to track and improve financial health, users can stay on top of payments, monitor their credit score, and handle loan payment seamlessly. It’s a one-stop solution for better financial control and peace of mind!",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Cricket Scoring App ",
      projectDesc: "This App keeps cricket fans updated with the latest match scores, news, and player stats. Users can follow live matches, check detailed scorecards, and stay informed about upcoming games and tournaments. The app provides easy access to match highlights, team rankings, and player profiles, making it perfect for all cricket lovers who want to stay connected to the game anytime, anywhere!",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/knoxpo_logo.jpeg"),
      projectName: "Medical App ",
      projectDesc: "This app helps users find doctors based on their location and specific medical conditions. Users can search for doctors nearby, view profiles, and connect directly through video calls or chat. It makes getting medical advice easy and convenient, allowing users to quickly connect with the right doctor for their needs, anytime, from anywhere.",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/icanstudioz_logo.jpeg"),
      projectName: "Taxi App ",
      projectDesc: "This app makes booking a taxi quick and easy. Users can find and book drivers nearby, make payments securely within the app, and chat directly with their driver for updates or assistance. It’s a simple way to get a ride whenever you need it, all in one app!",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/icanstudioz_logo.jpeg"),
      projectName: "Service Provider App ",
      projectDesc: "This app helps users find nearby service providers for all types of home repairs. Whether it's plumbing, electrical work, or other home maintenance needs, users can easily browse local professionals and connect with them directly. The app also includes a chat feature, allowing users to discuss details and get quick answers before booking.",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/icanstudioz_logo.jpeg"),
      projectName: "Sticker App ",
      projectDesc: "This app lets users create and customize their own stickers for WhatsApp. Users can design unique stickers, add them to WhatsApp as a sticker pack, and share with friends. It’s easy to use and makes messaging more fun and personal!",
      footerLink: [
        {
          name: "Contact Me For more details",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    
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
  workExperiences,
  openSource,
  bigProjects,
  myOfficeProjects,
  contactInfo,
  isHireable
};
