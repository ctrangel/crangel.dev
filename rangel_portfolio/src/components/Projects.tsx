import ProjectCard from "./ProjectCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProjectsHeader from "./ProjectsHeader";

const Projects = () => {
  const projects = [
    {
      title: "JarWorld API",
      githubLink: "https://github.com/ctrangel/API",
      link: "https://ctrangel.it.pointpark.edu/",
      imageSrc: "/media/yearn-cow.jpg",
      gifSrc: "./media/JarGif.gif",
      description:
        "An inventory management system with login, and data manipulation features making calls to a RESTful API.",
      skills: ["JavaScript", "Express.js", "node.js", "postgreSQL"],
      altText: "JarWorld API image",
    },
    {
      title: "PTI Comp Page",
      githubLink: "https://github.com/ctrangel/webdesign-comp-page",
      link: "https://ctrangel.it.pointpark.edu/info-site/",
      imageSrc: "pti-comp.png",
      description:
        "An Informational website for my club's web design competition",
      skills: ["webdesign", "CSS"],
      altText: "PTI Webdesign Competition image",
    },
    {
      title: "Project X",
      githubLink: "https://github.com/ctrangel/project-x",
      imageSrc: "/media/project-x.png",
      gifSrc: "/media/project-x.gif",
      description:
        "A music-themed website offering headlines, music genre playback, and a playlist-building feature.",
      skills: ["JavaScript", "CSS"],
      altText: "Project-x image",
    },
    {
      title: "Limitlesstech.solutions",
      githubLink: "https://github.com/ctrangel/Limitless-consulting",
      link: "https://limitlesstech.solutions/pages/home.html",
      imageSrc: "/media/limitless-solutions.png",
      gifSrc: "/media/limitless-solutions.gif",
      description:
        "A Project to transfer a wix website to an independent site for a business",
      skills: ["JavaScript", "CSS"],
      altText: "Limitlesstech.solutions project image",
    },
  ];

  return (
    <Box as={"section"} w={"100%"}>
      <ProjectsHeader />
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        id="projects-grid"
        spacing="8px"
        justifyItems="center"
        justifyContent={"center"}
        w="100%"
        overflow="hidden"
        px={{ base: "50px", xl: "400px", "2xl": "450px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
