import { motion } from "framer-motion";
import profilePicture from "../images/profile-picture.jpg";

function About() {
  return (
    <>
      <div className="text-center">
        <div className="inline-flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0, 0.75, 0.2, 1.01],
            }}
          >
            <img className="rounded-full w-32 h-32" src={profilePicture}></img>
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Solveig Aune
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to my portfolio website! I am a fullstack developer currently
          taking a "gap year" in art school. <br /> I have an MSc in Computer
          Science from NTNU and I like to draw.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="mailto:solveig.ua@gmail.com"
            className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md ma-0 px-3 py-2 text-md font-bold"
          >
            Contact
          </a>
          <a
            className=" text-gray-800 hover:bg-gray-700 hover:text-white rounded-md ma-0 px-3 py-2 text-md font-bold"
            href="https://github.com/solveigua"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
