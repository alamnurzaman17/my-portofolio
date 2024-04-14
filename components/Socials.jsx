"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://youtube.com/@sirlam17?si=WZ_xohBX3NH_MoOS",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/alamnurzaman/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/alamnurzaman17",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/alam_nurzaman?igsh=MzNlNGNkZWQ4Mg==",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
