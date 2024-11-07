import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpeg";
import user2 from "../assets/profile-pictures/user2.jpeg";
import user3 from "../assets/profile-pictures/user3.jpeg";
import user4 from "../assets/profile-pictures/user4.jpeg";
import user5 from "../assets/profile-pictures/user5.jpeg";
import user6 from "../assets/profile-pictures/user6.jpeg";

export const navItems = [
  { 
    label: "Home", 
    href: "/",
    submenus: [] 
  },
  { 
    label: "About Us", 
    href: "/aboutus",
    submenus: [] 
  },
  { 
    label: "Services", 
    href: "/services",
    submenus: [] 
  },
  { 
    label: "Datasets", 
    href: "/dataset",
    submenus: [] 
  },
  { 
    label: "Blog", 
    href: "/blog",
    submenus: [] 
  },
];

export const testimonials = [
  {
    user: "Satya Nadella",
    company: "CEO Microsoft",
    image: user1,
    text: "AI is not only for engineers. It brings changes in the dynamic of business, and we have to adapt or die.",
  },
  {
    user: "Ray Kurzweil",
    company: "Author & Inventor",
    image: user2,
    text: "By the end of this decade, there will be machines that can carry out most human professions at least as well as a typical human.",
  },
  {
    user: "Eric Schmidt",
    company: "Ex Google CEO",
    image: user3,
    text: "AI will be the most transformative technology since electricity",
  },
  {
    user: "James Manyika",
    company: "Senior Partner McKinsey & Company",
    image: user4,
    text: "We’re going to see tremendous occupational shifts. Some jobs will climb while others decline. So how do we enable and support workers as they transition from occupation to occupation? We don’t do that very well. I worry about the skill shifts. Skill requirements are going to be substantial and how do we get there quickly enough?",
  },
  {
    user: "Mark Cuban",
    company: "Owner Dallas Mavericks",
    image: user5,
    text: "AI is going to change everything, but it’s going to be a partnership between humans and AI, not a competition",
  },
  {
    user: "Kai-Fu-Lee",
    company: "Taiwanese Businessman",
    image: user6,
    text: "AI will not replace jobs, but it will change the nature of work.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];


export const datasets = [
  {
    id: 1,
    title: "Conversational Audio Dataset",
    type: "Audio",
    description: "High-quality conversational audio in multiple African languages for speech recognition and language learning",
    samples: 10000,
    languages: ["Swahili", "English", "Arabic"],
    useCases: ["Speech Recognition", "Language Learning"],
    units: "Hours",
    imageUrl: "/path-to-image.jpg"
  },
  {
    id: 2,
    title: "African Text Corpus",
    type: "Text",
    description: "Comprehensive text dataset in various African languages for NLP and machine translation",
    samples: 50000,
    languages: ["Swahili", "Yoruba", "Amharic"],
    useCases: ["NLP", "Machine Translation"],
    units: "Words",
    imageUrl: "/path-to-image.jpg"
  },
  {
    id: 3,
    title: "African Landmarks Dataset",
    type: "Image",
    description: "High-resolution images of African landmarks and cultural sites for computer vision",
    samples: 25000,
    languages: ["Universal"],
    useCases: ["Computer Vision", "Image Recognition"],
    units: "Images",
    imageUrl: "/path-to-image.jpg"
  },
  {
    id: 4,
    title: "African Wildlife Video Dataset",
    type: "Video",
    description: "HD video footage of African wildlife for object detection and tracking",
    samples: 5000,
    languages: ["Universal"],
    useCases: ["Object Detection", "Video Analysis"],
    units: "Videos",
    imageUrl: "/path-to-image.jpg"
  },
  {
    id: 5,
    title: "African Music Dataset",
    type: "Audio",
    description: "Traditional African music recordings for music analysis and classification",
    samples: 15000,
    languages: ["Multiple"],
    useCases: ["Music Analysis", "Audio Classification"],
    units: "Hours",
    imageUrl: "/path-to-image.jpg"
  }
];

// Filter options based on the available datasets
export const filterOptions = {
  type: ["Audio", "Video", "Text", "Image"],
  useCase: [
    "Speech Recognition",
    "Language Learning",
    "NLP",
    "Machine Translation",
    "Computer Vision",
    "Image Recognition",
    "Object Detection",
    "Video Analysis",
    "Music Analysis",
    "Audio Classification"
  ],
  language: ["Swahili", "English", "Arabic", "Yoruba", "Amharic", "Universal", "Multiple"],
  units: ["Hours", "Words", "Images", "Videos"]
};