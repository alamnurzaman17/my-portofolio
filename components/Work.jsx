"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//component
import ProjectCard from "@/components/ProjectCard"; // Ensure ProjectCard is responsive

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

const Work = () => {
  const projectsToDisplay = projectData.slice(0, 4);
  const numProjectsToDisplay = projectsToDisplay.length;

  let swiperBreakpoints = {};
  if (numProjectsToDisplay > 1) {
    swiperBreakpoints = {
      640: {
        // sm
        slidesPerView: numProjectsToDisplay >= 2 ? 2 : 1,
        spaceBetween: 24,
      },
      1024: {
        // lg - for the side-by-side desktop layout
        slidesPerView: 2,
        spaceBetween: 20, // Keep this relatively small for closer cards
      },
    };
  }

  const projectCardAreaHeight =
    "min-h-[460px] sm:min-h-[480px] md:min-h-[500px]";
  const paginationAreaHeight = "h-[60px]";

  const renderContent = () => {
    if (numProjectsToDisplay === 0) {
      return (
        <div className="w-full xl:w-auto flex flex-col justify-center items-center text-center xl:items-start xl:text-left py-10 xl:py-0">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            No projects to display at the moment. Check back soon!
          </p>
          <Link href="/projects">
            <Button>Explore All Projects</Button>
          </Link>
        </div>
      );
    }

    return (
      <>
        {/* Text Content */}
        <div className="w-full xl:w-[380px] xl:mr-8 flex-shrink-0 flex flex-col justify-center items-center text-center xl:items-start xl:text-left mb-12 xl:mb-0">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Take a look at some of my recent work and see how I can bring your
            ideas to life.
          </p>
          <Link href="/projects">
            <Button>View All Projects</Button>
          </Link>
        </div>

        {/* Slider / Single Card Area */}
        <div className="w-full xl:flex-1 xl:max-w-[900px] relative">
          <div className={`w-full flex flex-col`}>
            {numProjectsToDisplay === 1 ? (
              <div
                className={`${projectCardAreaHeight} w-full flex items-center justify-center p-4`}
              >
                <div className="max-w-md w-full">
                  {" "}
                  {/* Wrapper for single card */}
                  <ProjectCard project={projectsToDisplay[0]} />
                </div>
              </div>
            ) : (
              <Swiper
                className={`${projectCardAreaHeight} w-full`}
                slidesPerView={1}
                spaceBetween={numProjectsToDisplay > 1 ? 24 : 0} // Default spaceBetween for mobile
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination",
                }}
                breakpoints={swiperBreakpoints}
              >
                {projectsToDisplay.map((project, index) => (
                  <SwiperSlide
                    key={project.name + index}
                    className="flex justify-center items-start pt-4 pb-2 sm:pt-6 sm:pb-3"
                  >
                    <div className="w-full max-w-md sm:max-w-lg">
                      {" "}
                      {/* Card width constraint inside slide */}
                      <ProjectCard project={project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {numProjectsToDisplay > 1 && (
              <div
                className={`custom-swiper-pagination ${paginationAreaHeight} flex justify-center items-center w-full`}
              ></div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="relative mb-12 xl:mb-36 xl:pt-8">
      <div className="container mx-auto">
        {/* MODIFIED: Using xl:justify-start to align content to the left if space is available after constraining slider width */}
        <div
          className={`flex flex-col ${
            numProjectsToDisplay > 0 ? "xl:flex-row xl:justify-start" : ""
          } items-center xl:items-start`}
        >
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Work;
