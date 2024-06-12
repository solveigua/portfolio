import burnoutWoman from "../images/burnout_woman.jpg";
import scan2 from "../images/scan2.JPG";
import scan3 from "../images/scan3.JPG";
import scan5 from "../images/scan5.JPG";
import pokemon_page from "../images/dev/pokemon_page.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";
import Title from "../style";

const artwork = [
  {
    key: 1,
    imageSrc: burnoutWoman,
    imageAlt: "burnout woman print",
    ref: "#",
  },
  {
    key: 2,
    imageSrc: scan2,
    imageAlt: "Scan art",
  },
  {
    key: 3,
    imageSrc: scan3,
    imageAlt: "Scanart",
  },
  {
    key: 4,
    imageSrc: scan5,
    imageAlt: "Scan art",
  },
];

const devwork = [
  {
    key: 1,
    title: "Pokemon Index",
    subtitle: "Personal Project",
    imageSrc: pokemon_page,
    imageAlt: "Pokemon page",
    href: "https://pokemon-ee8l.onrender.com/",
  },
];
function Projects() {
  document.body.style.overflow = "auto";
  return (
    <>
      <div className="pl-2 flex flex-row">
        <Title>Projects</Title>
        <ArrowDownIcon className="md:h-32 md:w-32 text-gray-800 mt-16 lg:mx-24 sm:h-12 sm:w-12 " />
      </div>
      <div className="grid grid-cols-3 gap-4 py-16 ">
        <div className="h-12 m-4 ">
          <div className="flex flex-col">
            <div className="mt-6 space-y-6">
              <div className="flex  flex-col gap-x-3"></div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          {devwork.map((dev) => (
            <div className="p-2">
              <img
                key={dev.key}
                src={dev.imageSrc}
                alt={dev.imageAlt}
                className="object-cover object-center h-full w-full"
              />
              <a href={dev.href} className="font-bold text-lg text-gray-800">
                {dev.title}
              </a>
              <p className="mt-2 text-sm text-gray-500"> {dev.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
