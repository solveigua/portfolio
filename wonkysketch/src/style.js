/** Animation of text */

import styled from "styled-components";
import { motion } from "framer-motion";

const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: rgb(31, 41, 55);
  font-size: 10em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s ease-in-out;
`;

export default Title;
