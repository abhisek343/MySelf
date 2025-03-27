export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  date: string; // ISO date string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    imageUrl: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com/ecommerce",
    repoUrl: "https://github.com/abhisek343/ecommerce",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, task categories, and real-time updates using WebSocket.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.io"],
    imageUrl: "/projects/taskmanager.jpg",
    liveUrl: "https://example.com/taskmanager",
    repoUrl: "https://github.com/abhisek343/taskmanager",
    date: "2024-02-20"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts using OpenWeatherMap API. Features include location search and temperature unit conversion.",
    technologies: ["React", "TypeScript", "OpenWeatherMap API", "Chart.js"],
    imageUrl: "/projects/weather.jpg",
    liveUrl: "https://example.com/weather",
    repoUrl: "https://github.com/abhisek343/weather",
    date: "2024-01-10"
  }
]; 