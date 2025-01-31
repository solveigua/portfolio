import { ArrowDownIcon } from "@heroicons/react/24/outline";
import her_er_livet from "../images/portfolio/her_er_livet.jpeg";
import skynd_deg from "../images/portfolio/skynd_deg.jpeg";
import tyren from "../images/portfolio/tyren.jpeg";
import w_d from "../images/portfolio/w_d.jpeg";
import bang from "../images/portfolio/bang.jpeg";
import cowboy from "../images/portfolio/cowboy.jpeg";
import React, { useState } from "react";
import Title from "../style";

const list = [
  {
    key: 1,
    title: "Tyren",
    subtitle: "Skulptur i bronse",
    subsubtitle: "2024",
    imageSrc: tyren,
    imageAlt: "tyren skulptur",
  },
  {
    key: 2,
    title: "Willem Dafoe",
    subtitle: "Tresnitt",
    subsubtitle: "2024",
    imageSrc: w_d,
    imageAlt: "willem dafoe print",
  },
  {
    key: 5,
    title: "Bang!",
    subtitle: "Tresnitt",
    subsubtitle: "2024",
    imageSrc: bang,
    imageAlt: "bang! print",
  },
  {
    key: 6,
    title: "Cowboy",
    subtitle: "Tresnitt",
    subsubtitle: "2024",
    imageSrc: cowboy,
    imageAlt: "cowboy print",
  },
  {
    key: 3,
    title: "Her er livet jeg har lengtet etter",
    subtitle: "Akvarellblyanter og olje på lerret",
    subsubtitle: "2024",
    imageSrc: her_er_livet,
    imageAlt: "her er livet jeg har lengtet etter",
  },
  {
    key: 4,
    title: "Skynd deg mens du enda drømmer",
    subtitle: "Akvarellblyanter og olje på lerret",
    subsubtitle: "2024",
    imageSrc: skynd_deg,
    imageAlt: "skynd deg mens du enda drømmer",
  },
];

function Portfolio() {
  document.body.style.overflow = "auto";
  return (
    <>
      <div className="pl-2 flex flex-row">
        <Title>Portfolio</Title>
        <ArrowDownIcon className="md:h-32 md:w-32 text-gray-800 mt-16 lg:mx-24 sm:h-12 sm:w-12 " />
      </div>

      {/* Ensure this div directly wraps grid items */}
      <div className="grid grid-cols-3 gap-4 py-16">
        {list.map((l) => (
          <div key={l.key} className="p-4">
            {/* Square container for image */}
            <div className="w-full overflow-hidden">
              <img
                src={l.imageSrc}
                alt={l.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-l font-bold text-gray-800">{l.title}</p>
            <p className="mt-2 text-sm text-gray-500">{l.subtitle}</p>
            <p className="mt-2 text-sm text-gray-800">{l.subsubtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
