"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/6.png",
    category: "next js",
    name: "Lead On Global Portfolio",
    description:
      "A dynamic and responsive Next.js portfolio website developed for Lead On Global, showcasing their projects, services, and company profile to a global audience.",
    link: "https://log-portofolio.vercel.app/",
    github: "https://github.com/alamnurzaman17/log_porto",
  },
  {
    image: "/work/7.png",
    category: "next js",
    name: "Book Wise",
    description:
      "An intuitive Next.js application designed as a university library system, enabling users to efficiently browse, search for, and explore book collections.",
    link: "https://university-library-alpha-roan.vercel.app",
    github: "https://university-library-alpha-roan.vercel.app/",
  },
  {
    image: "/work/1.png", // Placeholder
    category: "react js",
    name: "Example Project 3",
    description:
      "Another great project highlighting different skills and technologies.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png", // Placeholder
    category: "express js",
    name: "Example Project 4",
    description:
      "A full-stack application demonstrating end-to-end development capabilities.",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategoies] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
