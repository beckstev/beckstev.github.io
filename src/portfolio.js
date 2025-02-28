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
  subTitle: emoji("A researcher in photonic machine learning."),
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
      "⚡ Explored for the first time the intersection between nonlinear light-sound dynamics and photonic neuromorphic computing"
    ),
    emoji(
      "⚡ Experimentally captured the context carried by a set of light pulses using sound waves"
    ),
    emoji(
      "⚡ Demonstrated an all optical nonlinear activation function mimicking the behavior of neurons"
    ),
    emoji(
      "⚡ Showcased a method that stores information carried by light pulses in sound waves ten times longer as the previous status-quo"
    ),
    emoji(
      "⚡  Co-lead and organized the first ”Photonic Machine Learning” seminar at FAU Erlangen-Nuremberg"
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
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
// Some big projects you have worked on

const bigProjects = {
  title: "Scientific Articles",
  subtitle:
    "This would not have been possible without all the people supporting me - thank you 🤗",
  projects: [
    {
      image: require("./assets/images/paper_images/NLA_cover_image.jpg"),
      projectName: "Optoacoustic activation function",
      projectDesc: "Nonlinear signal processing leveraging sound waves",
      footerLink: [
        {
          name: "See article",
          url: "https://www.degruyter.com/document/doi/10.1515/nanoph-2024-0513/html"
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
      image: require("./assets/images/paper_images/memory_cover_image.jpg"),
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
  title: emoji("Honors  🏆 "),
  subtitle:
    "Thanks to all the institutions who have supported me!",

  achievementsCards: [
    {
      title: "Science Meets Politics Scholarship",
      subtitle:
        "Fully funded position in an office of a member of the German Bundestag",
      image_bright: require("./assets/images/honors/WH_logo.png"),
      imageAlt: "Logo of the Wilhelm und Else Heraeus FoundationFully funded position in the office of the German Bundestag",
      footerLink: [
      ]
    },
    {
      title: "Invitation as Young Scientist - 73rd LNLM",
      subtitle: "Lindau Young Scientists represent the next generation of leading scientists and researchers",
      image_bright: require("./assets/images/honors/LNLM-Logo-Komplett-Schwarz-neu-scaled.jpg"),
      imageAlt: "Logo of the LNLM ",
      footerLink: [
      ]
    },
    {
      title: "PhD Scholarship ",
      subtitle:
        "Financial and individual support for individuals with outstanding scientific abilities and a strong sense of social responsibility",
      image_bright: require("./assets/images/honors/Studienstiftung_Logo_RGB.jpg"),
      image_dark: require("./assets/images/honors/Studienstiftung_Logo_weiss.png"),
      imageAlt: "Logo of the Studienstiftung",
      footerLink: [
      ]
    }, 
    {
      title: "Marianne-Plehn-Programm",
      subtitle: "Financial support for outstanding young scientific talent in Bavaria",
      image_bright: require("./assets/images/honors/Elitenetzwerk_Bavaria.png"),
      imageAlt: "Logo of the Elitenetzwerk_Bavaria ",
      footerLink: [
      ]
    },
    {
      title: "Rhetoric and MUN Fellowship",
      subtitle: "Extended rhetorics training and financial support to participate at two international Model United Nations conferences (LIMUN & WorldMUN)",
      image_bright: require("./assets/images/honors/be_boosted_black.png"),
      image_bright: require("./assets/images/honors/be-boosted_logo_white.png"),
      imageAlt: "Logo of the be.boosted",
      footerLink: [
      ]
    }, 
    {
      title: "Master's Scholarship",
      subtitle: "Funding for master's study & research experience through a research position",
      image_bright: require("./assets/images/honors/Logo_HELLA_neu.png"),
      imageAlt: "Logo of the Hella GmbH & Co. KGaA",
      footerLink: [
      ]
    },
    {
      title: "Going Abroad Scholarship",
      subtitle: "Fully funded research scholarship at Purdue University, USA",
      image_bright: require("./assets/images/honors/pep_logo.png"),
      image_dark: require("./assets/images/honors/pep_logo_white.png"),
      imageAlt: "Logo of the PeP et Al",
      footerLink: [
      ]
    },
    {
      title: "Germany Scholarship",
      subtitle: "Fellowship provides financial and networking support for young talented students",
      image_bright: require("./assets/images/honors/Logo-Deutschlandstipendium-1.jpg"),
      imageAlt: "Logo of the Deutschlandstipendium",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      image: require("./assets/images/me_presenting_funny.png")
    },
    {
      title:
        "Order of magnitude increase in storage time of photonic-phononic memory",
      description: "Talk",
      location: "📍 Photonics in Switching and Computing, Italy (2023)",
      coauthors: "Co-authors: A. Geilen, and B. Stiller",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/me_presenting_funny.png")
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
  subtitle: emoji(
    "A collection of events where I practiced public speaking and rhetorics."
  ),
  display: true,
  talks: [
    {
      title: "Havard WorldMUN Conference",
      description: "Represented South Africa in DISEC",
      location: "📍 Taipei, Taiwan (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/DISEC D3-17_cutted.jpg")
    },
    {
      title: "LIMUN Conference",
      description: "Represented Island in UNEP",
      location: "📍 London, UK (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/LIMUN_image_cutted.jpg")
    },
    {
      title: "Lange Nacht der Wissenschaft",
      description: "Public outreach talk about how to obtain a PhD",
      location: "📍 Erlangen, Germany (2021)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/lange_nacht_der_wissenschaft_220521.jpg")
    },
    {
      title: "Gemeinsam Box",
      description:
        "Introducting the GemeinsamBox a mental health start kit during the general assembly of the young German Physicist Society (jDPG)",
      location: "📍 Frankfuert am Main, Germany (2024)",
      slides_url: "",
      event_url: "",
      image: require("./assets/images/comm_images/jdpg_mv_2022_cutted.jpg")
    }
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
  workExperiences,
  bigProjects,
  communicatorSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  talksData,  
  achievementSection,
  commsData
};
