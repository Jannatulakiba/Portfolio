export interface Project {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  wide?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const profile = {
  name: "Jannatul Akiba",
  role: " Full Stack Developer",
  status: "Open to work · Bangladesh",
  email: "jannatulakiba70023@gmail.com",
  phone: "01793107002",
  discordUsername: "jannatulakiba",
  github: "https://github.com/Jannatulakiba",
  initials: "JA",
  bio: "I build web and mobile products from idea to deployment, and I also work on deep learning for medical imaging. Computer Science and Engineering student at PSTU, focused on apps that solve a real problem.",
  about:
    "Final-year Computer Science and Engineering student with project experience across the stack: responsive web apps (React, Next.js), cross-platform mobile apps (Flutter, Firebase), IoT healthcare hardware (Raspberry Pi), and deep learning for Alzheimer’s MRI classification. I completed Programming Hero’s Complete Web Development Course (Batch 14) and I’m looking for a Junior or Trainee Full Stack role, or a research-oriented position.",
};

export const skills: SkillGroup[] = [
  { title: "Programming", items: ["Python", "JavaScript", "TypeScript", "Dart", "HTML5", "CSS3", "LaTeX"] },
  { title: "Web Development", items: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"] },
  { title: "Mobile & Cloud", items: ["Flutter", "Firebase", "Firestore", "Better Auth", "OAuth", "MongoDB", "MySQL"] },
  { title: "Machine Learning", items: ["TensorFlow/Keras", "CNNs", "Vision Transformers", "Knowledge Distillation", "Grad-CAM", "Streamlit"] },
  { title: "Embedded & IoT", items: ["Raspberry Pi", "MAX30102", "AD8232", "ADS1115", "DS18B20"] },
  { title: "Tools & Core", items: ["Git & GitHub", "Postman", "Vercel", "Kaggle", "Operating Systems", "Networking", "Simulation"] },
];

export const projects: Project[] = [
  {
    title: "Bazar Dor Monitoring",
    tag: "Market price tracker",
    description:
      "Bangla price-tracking web app with live ticker, sortable category pages, market-wise price tables, and Better Auth login (email, Google, GitHub).",
    stack: ["Next.js", "Better Auth", "Responsive"],
    live: "https://b14-a7-bazar-dor-x2ym-ma12prr4c.vercel.app/",
    github: "https://github.com/Jannatulakiba/b14-A7-Bazar-Dor",
  },
  {
    title: "FitLog App",
    tag: "Workout planner",
    description:
      "Browse workouts, build Today’s Plan, save for later, mark as done, and track calories and duration in a responsive dark UI.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB"],
    live: "https://b-14-a06-fit-6qyr4jyz4-jannatulakiba70023-6529s-projects.vercel.app/",
    github: "https://github.com/Jannatulakiba/B-14-A06-Fit-Log",
  },
  {
    title: "CareHealth App",
    tag: "Health management, Android and Web",
    description:
      "Cross-platform health app with authentication, Firestore data, push notifications, and Provider state management.",
    stack: ["Flutter", "Firebase", "Provider"],
    live: "https://carehealthapps.web.app/",
    github: "https://github.com/Jannatulakiba/carehealthapps",
  },
  {
    title: "MediLink Pi",
    tag: "Healthcare monitoring hardware",
    description:
      "Raspberry Pi 3B platform with MAX30102, ECG, GSR, and temperature sensors, a Python backend, and a Flutter dashboard.",
    stack: ["Raspberry Pi", "Python", "Flutter"],
  },
  {
    title: "Alzheimer’s MRI Classification",
    tag: "CSE-410 thesis · IEEE conference paper in preparation",
    description:
      "Hybrid InceptionResNetV2 + Vision Transformer model, knowledge distillation into lightweight students, Grad-CAM explainability, and a Streamlit proof-of-concept interface. Fully fine-tuned InceptionResNetV2 reached 98.67% accuracy.",
    stack: ["TensorFlow", "ViT", "Distillation", "Grad-CAM"],
    wide: true,
  },
];

export const education = [
  { title: "B.Sc. in Computer Science and Engineering", meta: "Patuakhali Science and Technology University (PSTU) · 2023 – Present" },
  { title: "Complete Web Development Course", meta: "Programming Hero · Batch 14, 2026" },
];

export const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"] as const;
