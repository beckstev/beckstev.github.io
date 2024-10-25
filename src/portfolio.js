/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/images/profile_picutre_webapge-circle_rescalded.png"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "beckstev",
  title: "Moin, I am Steven",
  subTitle: emoji("A PhD student in photonic machine learning."),
  resumeLink: "", // Set to empty to hide the button; https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/beckstev",
  gmail: "steven.becker@mpl.mpg.de",
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
  title: "Being a scientist",
  subTitle: "I harvested sound waves for photonic machine learning.",
  skills: [
    emoji(
      "⚡ Explored for the first time the intersection between nonlinear light-sound dynamics and photonic machine learning"
    ),
    emoji(
      "⚡ Experimentally captured the context carried by a set of light pulses using sound waves"
    ),
    emoji(
      "⚡ Demonstrated an all optical nonlinear activation function mimicking the behavior of neurons"
    ),
    emoji(
      "⚡ Showcased a method that stores information carried by light pulses in sound waves ten times longer as the previous status-quo"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  //{
  //  skillName: "html-5",
  //  fontAwesomeClassname: "fab fa-html5"
  //},
  //{
  //  skillName: "css3",
  //  fontAwesomeClassname: "fab fa-css3-alt"
  //},
  //{
  //  skillName: "sass",
  //  fontAwesomeClassname: "fab fa-sass"
  //},
  //{
  //  skillName: "JavaScript",
  //  fontAwesomeClassname: "fab fa-js"
  //},
  //{
  //  skillName: "reactjs",
  //  fontAwesomeClassname: "fab fa-react"
  //},
  //{
  //  skillName: "nodejs",
  //  fontAwesomeClassname: "fab fa-node"
  //},
  //{
  //  skillName: "swift",
  //  fontAwesomeClassname: "fab fa-swift"
  //},
  //{
  //  skillName: "npm",
  //  fontAwesomeClassname: "fab fa-npm"
  //},
  //{
  //  skillName: "sql-database",
  //  fontAwesomeClassname: "fas fa-database"
  //},
  //{
  //  skillName: "aws",
  //  fontAwesomeClassname: "fab fa-aws"
  //},
  //{
  //  skillName: "firebase",
  //  fontAwesomeClassname: "fas fa-fire"
  //},
  //{
  //  skillName: "python",
  //  fontAwesomeClassname: "fab fa-python"
  //},
  //{
  //  skillName: "docker",
  //  fontAwesomeClassname: "fab fa-docker"
  //}
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Max Planck Institute for the Science of Light",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "PhD in Physics",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Scientific Articles",
  subtitle:
    "This would not have been possible without all the people supporting me - thank you 🤗",
  projects: [
    {
      image: require("./assets/images/paper_images/nla_image_square.png"),
      projectName: "Optoacoustic activation function",
      projectDesc: "Nonlinear signal processing leveraging sound waves",
      footerLink: [
        {
          name: "See article",
          url: "https://arxiv.org/abs/2401.05135"
        }
      ]
    },
    {
      image: require("./assets/images/paper_images/oreo_concept_with_copyright.png"),
      projectName: "Optoacoustic Recurrent Operator",
      projectDesc: "Processing context with sound waves",
      footerLink: [
        {
          name: "See article",
          url: "https://www.nature.com/articles/s41467-024-47053-6"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/paper_images/cold_memory_image.png"),
      projectName: "Photonic RAM in long-lasting sound waves",
      projectDesc: "Storing optical information in sound waves",
      footerLink: [
        {
          name: "See article",
          url: "https://pubs.acs.org/doi/10.1021/acsphotonics.4c00478?goto=supporting-info"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const talksData = {
  title: "Scientific Talks and Posters",
  subtitle: emoji("A collection of my first author contributions"),
  display: true,
  talks: [
    {
      title:
        "High-speed coherent photonic random access memory in long-lasting sound waves",
      description: "Best Poster Award",
      coauthors: "Co-authors: A. Geilen, and B. Stiller",
      location:
        "📍 WE-Heraeus-Seminar Photonics for Information Processing, Germany (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_hereaus.jpg")
    },
    {
      title:
        "Deep recurrent neural networks operations based on stimulated Brillouin scattering",
      description: "Talk",
      location: "📍 CLEO US, USA (2024)",
      coauthors: "Co-authors: J.H. Marines Cabello, D. Englund, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_Cleo_US_talk.JPG")
    },
    {
      title:
        "High-speed coherent photonic random access memory in long-lasting sound waves",
      description: "Talk",
      location: "📍 SPIE Photonics Europe, France (2024)",
      coauthors: "Co-authors: A. Geilen∗, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_SPIE_photonics.jpg")
    },
    {
      title: "Optoacoustic recurrent operator",
      description: "Talk",
      location: "📍 SPIE Photonics Europe, France (2024)",
      coauthors: "Co-authors: D. Englund, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_SPIE_photonics_2.jpg")
    },
    {
      title: "Optoacoustic recurrent operator",
      description: "Post deadline talk",
      location: "📍 Photonics in Switching and Computing, Italy (2023)",
      coauthors: "Co-authors: D. Englund, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/no_image_available.png")
    },
    {
      title:
        "Order of magnitude increase in storage time of photonic-phononic memory",
      description: "Talk",
      location: "📍 Photonics in Switching and Computing, Italy (2023)",
      coauthors: "Co-authors: A. Geilen, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/no_image_available.png")
    },
    {
      title: "Optoacoustic recurrent operator",
      description: "Talk",
      location: "📍 Frontiers in Neuromorphic Computing, Germany (2023)",
      coauthors: "Co-authors: D. Englund, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_fronties_in_neuromoprhic_computing.jpg")
    },
    {
      title:
        "Implementation of an optoacoustic activation function based on stimulated Brillouin scattering",
      description: "Poster",
      location: "📍 CLEO Europe, Germany, (2023)",
      coauthors: "Co-authors: J. Storp, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/talk_images/image_CLEO_europe.jpg")
    }
    // Add more talks objects here
  ]
};

// Being a communicator

const communicatorSection = {
  title: "Being a communicator",
  display: true,
  subTitle:
    "I constantly practice my communication skill to build bridges between different groups/fields ",
  skills: [
    emoji("🧑‍🔬🧍 Science Communication"),
    emoji("🇺🇳🤵 Model United Nations"),
    emoji("🇩🇪🏛️ German parliament"),
    emoji("🤵🤵 Friend's weddings")
  ]
};
// Blogs Section


const commsData = {
  title: "Highlights",
  subtitle: emoji("A collection of events where I practiced public speaking and rhetorics."),
  display: true,
  talks: [
    {
      title:
        "Havard WorldMUN Conference",
      description: "Represented South Africa in DISEC",
      location:
        "📍 Taipei, Taiwan (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/DISEC D3-17_cutted.jpg")
    },
    {
      title:
        "LIMUN Conference",
      description: "Represented Island in UNEP",
      location: "📍 London, UK (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/LIMUN_image_cutted.jpg")
    },
    {
      title:
        "Lange Nacht der Wissenschaft",
      description: "Public outreach talk about how to obtain a PhD",
      location: "📍 Erlangen, Germany (2021)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/lange_nacht_der_wissenschaft_220521.jpg")
    },
    {
      title: "Gemeinsam Box",
      description: "Introducting the GemeinsamBox a mental health start kit during the general assembly of the young German Physicist Society (jDPG)",
      location: "📍 Frankfuert am Main, Germany (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/jdpg_mv_2022_cutted.jpg")
    },
  ]
};


const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks and Posters",
  subtitle: emoji("A collection of my first author contributions"),

  talks: [
    {
      title:
        "High-speed coherent photonic random access memory in long-lasting sound waves",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image: require("./assets/images/paper_images/cold_memory_image.png")
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "steven.becker@mpl.mpg.de"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  communicatorSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  talksData,
  commsData
};
