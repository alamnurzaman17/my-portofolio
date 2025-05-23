"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  // RiBriefcase2Fill,
  // RiTeamFill,
  // RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
// import Badge from "./Badge";
// import Socials from "./Socials";

const PDF_FILE_URL =
  "https://portofolio-alamnurzaman.vercel.app/CVAlamNurzaman.pdf";

const Hero = () => {
  const downloadFileAtURL = (url) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        aTag.click();
        aTag.remove();
      });
    });
  };

  return (
    <section className="py-12 xl:py-24 h-auto lg:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My name is Alam Nurzaman</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what i engange in professionally.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link
                href="mailto:alam.nurzaman17@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-x-2 text-white">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                onClick={() => downloadFileAtURL(PDF_FILE_URL)}
                variant="secondary"
                className="gap-x-2"
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
          </div>
          {/* image  */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/deve.png"
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:bottom-8 lg:bottom-12 xl:bottom-10 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
