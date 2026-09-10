import type { Technology } from "@/types/tech";

// Generated app data. Everything the UI renders comes from this file.
export const technologies: Technology[] = [
  {
    "id": 1,
    "name": "React",
    "category": "Frontend",
    "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "rating": 4.9,
    "difficulty": "Beginner-Friendly",
    "badge": "Popular"
  },
  {
    "id": 2,
    "name": "Vue.js",
    "category": "Frontend",
    "description": "An approachable, performant, and versatile framework for building web user interfaces.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "rating": 4.8,
    "difficulty": "Beginner-Friendly",
    "badge": "Versatile"
  },
  {
    "id": 3,
    "name": "Svelte",
    "category": "Frontend",
    "description": "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    "rating": 4.8,
    "difficulty": "Intermediate",
    "badge": "Fast"
  },
  {
    "id": 4,
    "name": "Next.js",
    "category": "Frontend",
    "description": "The React framework for full-stack web applications with hybrid static & server rendering.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "rating": 4.9,
    "difficulty": "Intermediate",
    "badge": "Full-Stack"
  },
  {
    "id": 5,
    "name": "Node.js",
    "category": "Backend",
    "description": "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "rating": 4.8,
    "difficulty": "Intermediate",
    "badge": "Standard"
  },
  {
    "id": 6,
    "name": "PostgreSQL",
    "category": "Database",
    "description": "A powerful, open-source object-relational database system with proven reliability.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "rating": 4.9,
    "difficulty": "Intermediate",
    "badge": "Top SQL"
  },
  {
    "id": 7,
    "name": "Redis",
    "category": "Database",
    "description": "In-memory data structure store used as a high-speed database, cache, and message broker.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "rating": 4.8,
    "difficulty": "Intermediate",
    "badge": "Cache"
  },
  {
    "id": 8,
    "name": "JavaScript",
    "category": "Language",
    "description": "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "rating": 4.9,
    "difficulty": "Beginner-Friendly",
    "badge": "Ubiquitous"
  },
  {
    "id": 9,
    "name": "TypeScript",
    "category": "Language",
    "description": "A strongly typed programming language that builds on JavaScript for robust tooling.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "rating": 4.9,
    "difficulty": "Intermediate",
    "badge": "Essential"
  },
  {
    "id": 10,
    "name": "Java",
    "category": "Language",
    "description": "A secure, object-oriented programming language designed for portability and scale.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "rating": 4.6,
    "difficulty": "Intermediate",
    "badge": "Robust"
  },
  {
    "id": 11,
    "name": "Tailwind CSS",
    "category": "Styling",
    "description": "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "rating": 4.9,
    "difficulty": "Beginner-Friendly",
    "badge": "Modern"
  },
  {
    "id": 12,
    "name": "Docker",
    "category": "DevOps",
    "description": "A platform designed to build, share, and run containerized applications reliably.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "rating": 4.9,
    "difficulty": "Intermediate",
    "badge": "Containers"
  },
  {
    "id": 13,
    "name": "Kubernetes",
    "category": "DevOps",
    "description": "Automated deployment, scaling, and management of containerized workloads.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    "rating": 4.7,
    "difficulty": "Advanced",
    "badge": "Scale"
  },
  {
    "id": 14,
    "name": "Git",
    "category": "Tools",
    "description": "A distributed version control system for tracking changes across any size of project.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "rating": 4.9,
    "difficulty": "Beginner-Friendly",
    "badge": "Must Have"
  },
  {
    "id": 15,
    "name": "Figma",
    "category": "Tools",
    "description": "A collaborative interface design tool for building and handing off product design.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "rating": 4.8,
    "difficulty": "Beginner-Friendly",
    "badge": "Design"
  }
];

// Returns the data as a Promise so the UI can load it asynchronously.
export function getTechnologies(delay = 500): Promise<Technology[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(technologies), delay);
  });
}
