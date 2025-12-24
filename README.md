​A professional portfolio showcasing my journey and projects as a software developer. Originally built 4-5 years ago, this project recently underwent a major architectural refactor to meet modern industry standards.
https://portfolio-sulaimonazeez.netlify.app
​🛠 The Refactor (Legacy to Modern)
​Looking back at code from years ago is always a humbling experience! I recently decided to clean up the technical debt in this project.
​What’s New:
​Feature-Based Architecture: Moved away from a "flat" folder structure to a modular design where components, styles, and logic are grouped by feature (e.g., features/experience, features/projects).
​Scalability: Improved the project hierarchy to allow for easy addition of new sections without cluttering the root directories.
​Clean Code Standards: Standardized naming conventions (PascalCase for components) and separated reusable UI elements into a dedicated components/ui folder.


TECH STACK:
Technology Usage
React.js Frontend UI Framework
JavaScript (ES6+) Logic and Functionality
CSS/SASS Styling and Layout
Vite/CRA Build Tooling


PROJECT STRUCTURE:
src/
├── assets/           # Images, icons, and global styles
├── components/
│   ├── layout/       # Navbar, Footer
│   └── ui/           # Reusable components (Buttons, Cards, Modals)
├── features/         # Page-specific logic & components
│   ├── home/
│   ├── experience/
│   └── projects/
└── data/             # Centralized JSON/Data files for easy updates



Getting Started
​To run this project locally, follow these steps:
git clone https://github.com/sulaimonazeez/portfolio.git

npm install

npm start
# or
npm run dev


Future Improvements
​[ ] Implement TypeScript for better type safety.
​[ ] Add Framer Motion for smoother page transitions.
​[ ] Integrate a headless CMS for blog posts.


Contact
​SULAIMON AZEEZ - https://linkedin.com/in/sulaimon-olaniyi-73226223a?trk=contact-info - olaniyisulaimon221@gmail.com
