import background from "./background.jpg";
import { useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

import "./Home.css";
import Title from "./style";

import Gallery from "./Gallery";
import Art from "./pages/Art";

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
            2024
            <br />
            ---
          </p>
        </div>
        <div className="flex flex-col my-8">
          <AcademicCapIcon className="h-12 w-12 text-gray-800 place-self-end mx-36" />
          <p className="font-mono mx-12 text-right">
            Strykejernet Kunstskole
            <br />
            2025
            <br />
            ---
          </p>
        </div>
        <div className="flex flex-col my-8">
          <BuildingOfficeIcon className="h-12 w-12 text-gray-800 place-self-end mx-36" />
          <p className="font-mono mx-12 text-right">
            ? :)
            <br />
            ---
          </p>
        </div>
        <div>
          <p className="font-mono mx-12 mt-12 text-left text-lg">
            {" "}
            Internships <br /> ---
          </p>
          <p className="font-mono mx-12 my-4 text-left">
            {" "}
            Software Developer (Consultant) Internship <br />
            NoA Ignite <br />
            2023
          </p>
          <p className="font-mono mx-12 my-4 text-left">
            Software Engineer Internship <br />
            Hyre <br />
            2022
          </p>
          <p className="font-mono mx-12 my-4 text-left">
            Digitalization Engineer Internship <br /> OKEA <br /> 2021
          </p>
        </div>
      </div>

      <Gallery className="Art Projects" />
      <footer className="relative w-full h-32 bg-[#adb0bf]">
        <p className="tracking-wide text-gray-800 italic pt-14">
          PSST! Follow me on instagram:{" "}
          <a href="http://instagram.com/wonkysketch">@wonkysketch</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
