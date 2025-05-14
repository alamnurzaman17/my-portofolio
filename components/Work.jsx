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
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/6.png",
    category: "Next js",
    name: "Lead On Global Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
    link: "https://log-portofolio.vercel.app/",
    github: "https://github.com/alamnurzaman17/log_porto",
  },
  {
    image: "/work/6.png",
    category: "react js",
    name: "Lamu Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
    link: "/",
    github: "/",
  },
  // {
  //   image: "/work/6.png",
  //   category: "next js",
  //   name: "Lumina Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: "next js",
  //   name: "Evolve Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/3.png",
  //   category: "next js",
  //   name: "ignite Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/4.png",
  //   category: "next js",
  //   name: "Envision Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/3.png",
  //   category: "fullstack",
  //   name: "Nova Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: "fullstack",
  //   name: "Zenits Website",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, autem!",
  //   link: "/",
  //   github: "/",
  // },
];

const Work = () => {
  const projectsToDisplay = projectData.slice(0, 4);
  const numProjectsToDisplay = projectsToDisplay.length;

  // 3. Definisikan breakpoints secara dinamis
  //    Ini hanya akan diterapkan jika ada LEBIH DARI 1 slide total
  let swiperBreakpoints = {};
  if (numProjectsToDisplay > 1) {
    swiperBreakpoints = {
      640: {
        // 'sm' breakpoint
        slidesPerView: 2,
      },
    };
  }
  if (numProjectsToDisplay === 0) {
    return (
      <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
          <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
            <h2 className="section-title mb-4">Latest Project</h2>
            <p className="subtitle mb-8">
              No projects to display at the moment.
            </p>
            <Link href="/projects">
              <Button>View All</Button>
            </Link>
          </div>
          {/* Placeholder untuk area slider agar layout konsisten */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 h-[480px] flex items-center justify-center text-gray-500">
            {/* Konten placeholder atau kosong */}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            aut iusto vitae.
          </p>
          <Link href="/projects">
            <Button>View All</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 h-[480px] sm:h-[500px] md:h-[520px]">
          {numProjectsToDisplay === 1 ? (
            // --- Tampilan untuk SATU Proyek ---
            // Bungkus dengan div untuk menerapkan flexbox centering
            // items-center untuk vertikal, justify-center untuk horizontal
            <div className="w-full h-full flex items-center justify-center p-4">
              {/* 
                ProjectCard Anda HARUS memiliki max-width yang ditetapkan di dalamnya 
                agar tidak meregang penuh.
                Misal: className="max-w-sm" atau "max-w-md" di dalam ProjectCard.js
              */}
              <ProjectCard project={projectsToDisplay[0]} />
            </div>
          ) : (
            // --- Tampilan untuk LEBIH DARI SATU Proyek (menggunakan Swiper) ---
            <Swiper
              className="h-full" // Ambil tinggi penuh dari parent (.h-[480px] etc.)
              slidesPerView={1} // Default mobile: 1 slide
              centeredSlides={false} // Tidak perlu centering untuk grup
              breakpoints={swiperBreakpoints}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only the first 4 projects for the slides */}
              {projectsToDisplay.map((project, index) => {
                return (
                  <SwiperSlide key={project.name + index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
