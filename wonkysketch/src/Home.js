import background from "./background.jpg";
import { useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

import "./Home.css";
import Title from "./style";

import Gallery from "./Gallery";

function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={background} className="Home-logo" alt="logo" />
        <div className="flex">
          <ArrowDownIcon className="h-36 w-36 text-gray-800" />
          <Title style={{ x }}>Solveig Aune</Title>
        </div>
      </header>
      <div className="flex flex-col ">
        <p className="font-mono text-2xl py-2"> Education and Experience </p>
        <div className="flex flex-col my-8">
          <AcademicCapIcon className="h-12 w-12 text-gray-800 place-self-end mx-36" />
          <p className="font-mono mx-12 text-right">
            MSc in Computer Technology @ NTNU
            <br />
            ---
          </p>
        </div>
        <div className="flex flex-col my-8">
          <BuildingOfficeIcon className="h-12 w-12 text-gray-800 place-self-end mx-36" />
          <p className="font-mono mx-12 text-right">
            Analyst Level Consultant @ Netlight Oslo
            <br />
            ---
          </p>
        </div>
        <div>
          <p className="font-mono mx-12 text-right text-lg"> Internships </p>
          <p className="font-mono mx-12 my-4 text-right">
            {" "}
            Software Developer (Consultant) Internship <br />
            NoA Ignite <br />
            2023
          </p>
          <p className="font-mono mx-12 my-4 text-right">
            Software Engineer Internship <br />
            Hyre <br />
            2022
          </p>
          <p className="font-mono mx-12 my-4 text-right">
            Digitalization Engineer Internship <br /> OKEA <br /> 2021
          </p>
        </div>
      </div>

      <Gallery className="Gallery" />
    </div>
  );
}

export default Home;
