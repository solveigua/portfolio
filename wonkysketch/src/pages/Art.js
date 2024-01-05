import React, { useState } from "react";
import Title from "../style";
import { useScroll, useTransform } from "framer-motion";

import burnoutWoman from "../images/burnout_woman.jpg";
import scan1 from "../images/scan1.JPG";
import scan2 from "../images/scan2.JPG";
import scan3 from "../images/scan3.JPG";
import scan4 from "../images/scan4.JPG";
import scan5 from "../images/scan5.JPG";
import frog from "../images/frog.JPG";
import disco from "../images/disco.JPG";

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
    imageSrc: scan4,
    imageAlt: "Scan art",
  },
  {
    key: 5,
    imageSrc: scan5,
    imageAlt: "Scan art",
  },
  {
    key: 6,
    imageSrc: scan1,
    imageAlt: "Scan art",
  },
  {
    key: 7,
    imageSrc: disco,
    imageAlt: "Scan art",
  },
  {
    key: 8,
    imageSrc: frog,
    imageAlt: "Scan art",
  },
];

function Art() {
  const { scrollXProgress } = useScroll();
  const x = useTransform(scrollXProgress, [0, 1], [0, 600]);
  return (
    <>
      <Title style={{ x }}>ARTWORK</Title>

      <div className="overflow-x-scroll h-full flex absolute">
        {artwork.map((art) => (
          <img
            key={art.key}
            src={art.imageSrc}
            alt={art.imageAlt}
            className="object-center object-contain w-1/2 mx-2 p-2"
          />
        ))}
      </div>
    </>
  );
}

export default Art;
