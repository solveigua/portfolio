import background from "./background.jpg";
import { useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
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
      <div>
        <p className="mx-12 text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          neque laoreet, efficitur velit eu, faucibus felis. Donec vehicula quam
          elit, ut euismod arcu ultricies eu. Maecenas porta tempus nisi, in
          vehicula lectus lacinia in. Etiam neque velit, auctor vel commodo sit
          amet, tempus quis nisi. Aenean malesuada vel nisl nec tincidunt.
          Pellentesque nulla purus, condimentum at maximus at, vestibulum
          condimentum ipsum. Nulla rhoncus metus tellus. Vestibulum lobortis
          malesuada mauris quis rutrum. Morbi pretium enim turpis, eget sodales
          sem lacinia a. Fusce faucibus eu urna eget rhoncus. Duis ante erat,
          ultrices quis lacus malesuada, consectetur laoreet arcu. Quisque
          pulvinar massa a elit dignissim consectetur. Praesent eu purus nec
          elit sodales lacinia ut molestie turpis. Aliquam vitae rutrum lorem.
          Donec vehicula, sapien non facilisis feugiat, felis nisi maximus
          turpis, ac gravida felis tortor et risus. Praesent suscipit nibh sed
          neque porttitor, eget sodales nisi interdum. Fusce tincidunt eleifend
          neque. Etiam suscipit nibh eu bibendum vehicula. Vestibulum nec nisi
          eu ante bibendum tincidunt. Fusce bibendum nisi eget vehicula
          pellentesque. Etiam lacinia dolor eget risus lacinia luctus. Nam id
          risus rutrum, sagittis felis et, malesuada metus. Curabitur ut rutrum
          nunc, id tincidunt mi. Maecenas enim elit, vehicula vitae ex ut,
          laoreet faucibus neque. Nam ultricies in magna quis blandit. Cras
          consectetur magna eu justo egestas, sit amet maximus odio finibus.
          Vivamus ornare nulla a magna sagittis, at iaculis quam condimentum.
          Nunc lobortis, lectus fermentum interdum elementum, nibh justo egestas
          nibh, vitae sodales libero ligula ut mauris. Nulla in felis rutrum est
          sollicitudin dignissim. Duis eu nisl enim. Praesent cursus erat sed
          cursus sollicitudin. Morbi vehicula purus non tortor viverra, at
          imperdiet elit congue. Maecenas mollis consectetur lectus, vel
          pellentesque ex consectetur sed. Nullam a ex massa.
        </p>
      </div>

      <Gallery className="Gallery" />
    </div>
  );
}

export default Home;
