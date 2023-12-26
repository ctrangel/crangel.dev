import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1580px",
};

const theme = extendTheme({ breakpoints });



function App() {
  return (
    <ChakraProvider theme={theme}>  
      <Navbar />
      <Box as={"section"}
        id="Home-section"
        style={{
          height: "115vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-20vh",
          position: "relative",
        }}
      >
        <Intro />
      </Box>
      
      <Box
        id="About-section"
        style={{
          height: "160vh",
          backgroundColor: "#2d3333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <About />
      </Box>
      <Box
        id="Projects-section"
        h={{base: "210vh", md: "150vh", lg: "90vh" }}
        style={{
          backgroundColor: "#2d3333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Projects />
      </Box>
      <Box
        id="Technologies-section"
        
        bg={"#2d3333"}
        style={{
          height: "180vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
        }}
      >
        <Technologies />
      </Box>
      <div
        id="Contact-section"
        style={{
          backgroundColor: "#2d3333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
