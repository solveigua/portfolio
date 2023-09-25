import burnoutWoman from "../images/burnout_woman.jpg";
import scan2 from "../images/scan2.JPG";
import scan3 from "../images/scan3.JPG";
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
    href: "#",
  },
  {
    key: 3,
    name: "Other",
    imageSrc: scan3,
    imageAlt: "Scanart",
    ref: "#",
  },
];
function Art() {
  const [current, setCurrent] = useState("art");
  document.body.style.overflow = "hidden";
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
              <div className="flex  flex-col gap-x-3">
                <button
                  className="bg-pink-400 hover:bg-blue-400 text-white font-bold my-2 py-2 px-4 border-b-4 border-pink-700 hover:border-blue-500 rounded"
                  onClick={() => setCurrent("dev")}
                >
                  Development projects
                </button>
                <button
                  className="bg-pink-400 hover:bg-blue-400 text-white font-bold my-2 py-2 px-4 border-b-4 border-pink-700 hover:border-blue-500 rounded"
                  onClick={() => setCurrent("art")}
                >
                  Art projects
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-row-reverse">
          <div className="p-2 m-4 overflow-auto w-auto md:h-[14%] sm:h-1/3">
            <div className="flex flex-col p-12">
              <p> you have selected {current} </p>
              {artwork.map((art) => (
                <img
                  key={art.key}
                  src={art.imageSrc}
                  alt={art.imageAlt}
                  href={art.href}
                  className="object-cover object-center p-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Art;
