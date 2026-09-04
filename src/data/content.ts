// ---------------------------------------------------------------------------
// Central content file. Everything text-based on the site is driven from
// here, so updating the portfolio later (new project, new role, new link)
// means editing this file — not hunting through components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Md. Rifat Hossain",
  initials: "RH",
  location: "Dhaka, Bangladesh",
  email: "myselfasrifat@gmail.com",
  phone: "+880 1740577455",
  roles: ["AI / ML Engineer", "Full-Stack Developer", "Computer Vision Developer"],
  tagline:
    "I build AI-powered systems using machine learning, computer vision, and LLMs — from intelligent models to production-ready applications.",
  about: [
    "I'm a final-year Computer Science & Engineering student at UIU (3.87/4.00 CGPA) and an Undergraduate Teaching Assistant. My engineering focus sits directly at the intersection of AI/ML, computer vision, and full-stack development, with a strong emphasis on building deployable, end-to-end systems.",
    "Rather than treating deep learning models as isolated academic exercises, I focus on integrating them into practical software architectures. I've been developing applications ranging from real-time computer vision ecosystems—such as Sentinel Intelligence, which pairs YOLO with hardware and live dashboards—to LifeLens AI, an LLM-driven application supported by a robust backend design.",
    "Ultimately, my goal is to bridge the gap between experimental notebooks and robust engineering. I'm currently seeking roles where I can continue crafting intelligent, production-oriented platforms.",
  ],
};

// Populate with real links — placeholders for now.
export const socialLinks = {
  email: "mailto:myselfasrifat@gmail.com",
  github: "https://github.com/mdrifat-hossain",
  linkedin: "https://linkedin.com/in/md-rifathossain",
  facebook: "https://facebook.com/",
  x: "https://x.com/",
  instagram: "https://instagram.com/",
};

export const resumeUrl = "/resume.pdf";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Contact", href: "#contact" },
];

// Floating badges around the hero photo.
export const heroSkills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "LLM / RAG",
  "FastAPI",
  "Full-Stack",
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C / C++", "JavaScript", "TypeScript", "SQL", "HTML / CSS", "Dart"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "YOLO / Ultralytics",
      "OpenCV",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "spaCy",
      "MLflow",
    ],
  },
  {
    title: "Web & Frameworks",
    items: ["React.js", "Next.js", "FastAPI", "Node.js", "Express.js", "NestJS", "Tailwind CSS"],
  },
  {
    title: "Data & Databases",
    items: ["MySQL", "PostgreSQL", "SQLAlchemy", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git / GitHub", "Docker", "Jupyter", "Google Colab", "Google Cloud Platform", "Postman", "Swagger / OpenAPI"],
  },
  {
    title: "Other",
    items: ["Flutter", "JavaFX", "Firebase", "Clerk", "Better-Auth", "IoT / Embedded Systems"],
  },
];

export type Project = {
  slug: string;
  name: string;
  role: string;
  type: "Team Product" | "Solo Product";
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sentinel-intelligence",
    name: "Sentinel Intelligence",
    role: "AI & IoT Developer",
    type: "Solo Product",
    description:
      "An AI-powered smart safety and emergency response system combining computer vision, IoT, embedded hardware, and a live web dashboard for automated hazard monitoring.",
    highlights: [
      "Real-time YOLO-based fire detection with automated tracking and servo-controlled water nozzle positioning.",
      "ESP32 environmental monitoring (MQ-2, DHT11, MPU6050) for gas leaks, temperature, humidity, and seismic events.",
      "Flask + MySQL platform for live status, remote control, threshold configuration, and event history.",
    ],
    stack: ["YOLO", "OpenCV", "Python", "Flask", "ESP32", "MySQL", "IoT"],
    githubUrl: "https://github.com/mdrifat-hossain",
    featured: true,
  },
  {
    slug: "lifelens-ai",
    name: "LifeLens AI",
    role: "Full-Stack & AI Developer",
    type: "Team Product",
    description:
      "An AI-powered personal decision assistant that unifies meal planning, productivity management, and career, learning, and financial guidance into one platform.",
    highlights: [
      "AI-assisted decision workflows that generate personalized plans users can adjust to their own preferences.",
      "FastAPI backend with a React interface and MySQL-backed data management.",
      "Conversational assistance layered across every planning module.",
    ],
    stack: ["React", "FastAPI", "MySQL", "LangChain", "AI / LLM"],
    githubUrl: "https://github.com/mdrifat-hossain",
    featured: true,
  },
  {
    slug: "people-flow-detection",
    name: "People Flow Detection & Tracking",
    role: "Computer Vision Developer",
    type: "Solo Product",
    description:
      "A computer vision system for real-time people detection, persistent multi-object tracking, directional IN/OUT counting, and movement visualization.",
    highlights: [
      "Pretrained YOLOv8s for detection with ByteTrack maintaining persistent identities across frames.",
      "Line-crossing logic on tracked center-points for unique entry/exit counting.",
      "Movement-density heatmaps and annotated output video with live counters.",
    ],
    stack: ["YOLOv8s", "ByteTrack", "OpenCV", "Python", "Supervision"],
    githubUrl: "https://github.com/mdrifat-hossain",
    featured: true,
  },
  {
    slug: "syncup",
    name: "SyncUP",
    role: "Full-Stack Developer",
    type: "Team Product",
    description:
      "An integrated social platform focused on user connectivity, interactive content, and personalized engagement.",
    highlights: [
      "Customized feeds, real-time location sharing, and progress tracking.",
      "Personalized notifications for emergency and productivity alerts.",
      "Node.js/Express backend with MySQL and Firebase-based services.",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "Firebase", "HTML / CSS"],
    githubUrl: "https://github.com/mdrifat-hossain",
  },
  {
    slug: "football-game",
    name: "Football Game",
    role: "Software Developer",
    type: "Team Product",
    description:
      "A 2D multiplayer football game built with JavaFX, with competitive 1v1 matches, player management, ranking, and rewards.",
    highlights: [
      "Player trading, upgrades, in-game messaging, and a player marketplace.",
      "Spinning reward system layered on top of ranked matches.",
      "OOP-structured game entities, interactions, and gameplay logic.",
    ],
    stack: ["Java", "JavaFX", "OOP"],
    githubUrl: "https://github.com/mdrifat-hossain",
  },
];

export const experience = [
  {
    role: "Undergraduate Teaching Assistant",
    org: "United International University",
    location: "Dhaka, Bangladesh",
    period: "Mar. 2025 – Present",
    points: [
      "Selected for three separate appointments: Mar–Jul 2025, Aug–Oct 2025, and Jul 2026–Present.",
      "Supported faculty in laboratory classes, helping students with programming concepts, practical tasks, and technical problems.",
      "Provided individualized academic guidance, reviewed lab topics, and ran supplementary tutorial sessions.",
    ],
  },
];

export const education = [
  {
    school: "United International University",
    credential: "B.Sc. in Computer Science and Engineering",
    location: "Dhaka, Bangladesh",
    period: "Jul. 2022 – Present",
    detail: "CGPA 3.87 / 4.00 · 125 of 137 credits completed",
  },
  {
    school: "Mirpur Cantonment School and College",
    credential: "Higher Secondary Certificate",
    location: "Dhaka, Bangladesh",
    period: "",
    detail: "GPA 5.00 / 5.00",
  },
  {
    school: "Adamjee Cantonment Public School",
    credential: "Secondary School Certificate",
    location: "Dhaka, Bangladesh",
    period: "",
    detail: "GPA 4.89 / 5.00",
  },
];

export const awards = [
  {
    title: "1st Runner Up — Advanced Object-Oriented Programming",
    org: "UIU CSE Project Show",
    period: "Jan. 2025",
  },
  {
    title: "100% Merit Scholarship — 5 times",
    org: "United International University (4th, 5th, 6th, 10th & 12th Trimesters)",
    period: "",
  },
  {
    title: "50% Merit Scholarship — 2 times",
    org: "United International University (7th & 9th Trimesters)",
    period: "",
  },
  {
    title: "1st Prize — 100m & 200m Sprint",
    org: "School Athletics, School Level",
    period: "2018",
  },
];

export const volunteering = [
  {
    title: "Volunteer",
    org: "United Nations Youth and Students Association of Bangladesh (UNYSAB)",
    location: "Bangladesh",
    period: "Apr. 2023 – Present",
    detail: "Contribute to youth-led community initiatives, social awareness programs, and humanitarian activities organized by UNYSA.",
  },
  {
    title: "Relief for Flood-Affected People",
    org: "United Nations Youth and Students Association of Bangladesh (UNYSAB)",
    location: "Feni, Bangladesh",
    period: "Aug. 2024",
    detail: "Supported a UNYSAB relief mission for communities affected by the devastating floods in Feni.",
  },
  {
    title: "Eid for Street Children",
    org: "United Nations Youth and Students Association of Bangladesh (UNYSAB)",
    location: "Dhaka, Bangladesh",
    period: "Mar. 2024",
    detail: "Took part in a two-day initiative providing iftar meals and support to underprivileged street children.",
  },
];

export const languages = ["Bangla", "English", "Hindi"];
