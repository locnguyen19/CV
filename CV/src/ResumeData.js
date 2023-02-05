import homeImage from "./assets/loc.jpg";
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeImage,
  homeTitle1: "Loc",
  homeTitle2: "Nguyen",
  homeProfession: "Full-stack Web Developer Student",
  homeInformation: [
    {
      text: " Välimerenkatu 5C, 139, 00220, Helsinki",
      icon: "bx-map",
    },
    {
      text: "locthanhnguyen19@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +358 449 361 729",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "https://github.com/locnguyen19",
      text:  "Loc Mathias Nguyen",
      icon: "bxl-github",
    },
    {
      link: "https://www.facebook.com/Loca.Nguyen97",
      text:  "Loc Mathias Nguyen",
      icon: "bxl-facebook",
    },
    {
      link: "https://www.linkedin.com/in/locthanhnguyen/",
      text: "Loc Mathias Nguyen",
      icon: "bxl-linkedin-square",
    },
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    ` I'm currently a third-year student in Haaga-Helia University of Applied Sciences studying to become a software developer. `,
    ` Programming has truly been my passion for a while now and I really like solving problems with designing and coding. I also enjoy desiging webs and seeing my work/code come to life. In addition, I am also into the analytical and mathematical approach that coding will successfully deal with practical challenges. `,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "Bachelor of Engineering",
      studies: "Haaga-Helia University Of Applied Sciences",
      year: "2020 - Present",
      line: true,
    },
    {
      title: "Bachelor of Logistics Engineering",
      studies: "JAMK University Of Applied Sciences",
      year: "2014 - 2018",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Professional Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`, `Saas`, `Javascript`, `Typerscript`, `Java`],
    [`Vue.js`, `React.js`, `Express.js`, `Next.js`, `Adobe`, `Figma`],
  ],
};
const logoText = "Hafiz.";
const menuIcon = "bx-grid-alt";

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title: "AWS CLOUD CERTIFIED",
      describe:
        "Master the hidden concepts of cloud computing and Learn to leverage the power of cloud for your own web and mobile apps",
    },
  ],
};

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Duty Manager",
      company: "Espresso House Finland Oy (2021-PRESENT)",
      describe:
        "Working as a shift manager to ensure the efficient operation during a shift",
      line: true,
    },
    
  ],
};

// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Vietnamese", "Finnish", "Germany"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "HOBBIES",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travelling",
    },
    {
      icon: "bx-laptop",
      text: "Coding",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds
};
