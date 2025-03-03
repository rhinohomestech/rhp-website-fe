# **RHP Website Frontend Documentation**  

## **Abstract**  
The RHP Website Frontend is a web-based application developed using the Next.js framework. It serves as an information portal and landing page for Rhino Homes and Properties Ltd. This documentation provides an in-depth overview of the project structure, directory organization, and technical implementation.  

## **1. Introduction**  
Web applications require well-structured, maintainable codebases to ensure scalability, efficiency, and ease of development. This documentation outlines the directory structure and associated files of the RHP website frontend, facilitating seamless collaboration and code maintenance.  

## **2. Framework and Technologies**  
The project utilizes **Next.js**, a React-based framework optimized for server-side rendering (SSR) and static site generation (SSG). Additionally, the project employs **SCSS** for styling and follows modular component-based architecture.  

## **3. Directory Structure and File Organization**  
The repository is organized into distinct directories, each serving a specific purpose within the application. The structure is as follows:  

```plaintext
RHP-Website-Frontend/
│── pages(app) /
│   │── page.tsx (home)
│   │── about.tsx
│   │── faqs.tsx
│   └── ...
│── components/
│   │── FaqComponent.tsx
│   │── Navbar.tsx
│   │── LayoutWrapper.tsx
│   └── ...
│── constants/
│   │── index.ts
│   │── faqData.ts
│   └── ...
│── styles/
│   │── global.scss
│   │── FaqComponent.scss
│   │── Navbar.scss
│   └── ...
│── public/
│   │── images/
│   │── icons/
│   └── ...
│── services/
│── utils/
│── package.json
│── README.md
└── ...
