import React from "react";
import { Box, Flex, keyframes } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectsHeader from "./ProjectsHeader";

import "../App.css";

function Projects() {
  const [isHovered, setIsHovered] = React.useState(false);

  const displaySkills = (project: { skills: string | any[] }) => {
    //typescript kept yelling at me until I added the type, its so mean
    let result = [];

    for (let i = 0; i < project.skills.length; i++) {
      result.push(
        <Box
          key={i}
          borderRadius="md"
          bg="#FFB612"
          color="white"
          px={4}
          h={7}
          mr={5}
          mt={5}
        >
          <p>{project.skills[i]}</p>
        </Box>
      );
      // console.log(project.skills[i]);
    }

    return result;
  };

  const project1 = {
    title: "Project X",
    description:
      "A music-themed website offering headlines, music genre playback, and a playlist-building feature.",
    image: "/media/project-x.png",
    gif: "/media/project-x.gif",
    gLink: "https://github.com/ctrangel/project-x",
    link: "/",
    skills: ["JavaScript", "CSS"],
  };
  const project2 = {
    title: "Limitlesstech.solutions",
    description: "A static website for a business",
    image: "/media/limitless-solutions.png",
    gif: "/media/limitless-solutions.gif",
    gLink: "https://github.com/ctrangel/Limitless-consulting",
    link: "https://limitlesstech.solutions/",
    skills: ["JavaScript", "CSS"],
  };

  const project3 = {
    title: "Scholarship-auto-fill",
    description:
      "Python script that automatically fills out scholarship applications.",
    image: "/media/big_kurt.jpg",
    gif: "/media/form_script.gif",
    gLink: "https://github.com/ctrangel/form-auto-fill-public",
    link: "/",
    skills: ["Python", "Selenium", "node.js"],
  };


  const cardStyles = () => ({
    // for the cards in the projects grid
    mt: { base: 3 },
    w: { base: "300px", sm: "340px", lg: "320px", xl: "390px" },
    maxW: { base: "300px", sm: "340px", lg: "320px", xl: "390" },
    h: { base: "500px" },
    maxH: { base: "500px" },
    p: 1,
    color: "white",
    bgColor: "grey",
    borderRadius: "10px",
    border: "5px solid cyan",
    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
  });

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
        <Card {...cardStyles()}>
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box maxW={"237px"} fontSize={"24px"}>
              {project1.title}
            </Box>

            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              mb={4}
              onClick={() => window.open(project1.link)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            m={"auto"}
            overflow={"hidden"}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              transition={"ll .2s ease-in-out"}
              borderRadius={"10px"}
              src={isHovered ? project1.gif : project1.image}
              alt={project1.title}
            />
          </Box>

          <CardBody>
            <p>{project1.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
          >
            {displaySkills(project1)}
          </CardFooter>
        </Card>
        <Card {...cardStyles()}>
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box maxW={"237px"} fontSize={"20px"}>
              {project2.title}
            </Box>

            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              m={4}
              onClick={() => window.open(project2.link)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            m={"auto"}
            overflow={"hidden"}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              transition={"ll .2s ease-in-out"}
              borderRadius={"10px"}
              src={isHovered ? project2.gif : project2.image}
              alt={project2.title}
            />
          </Box>

          <CardBody>
            <p>{project2.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
          >
            {displaySkills(project2)}
          </CardFooter>
        </Card>
        <Card {...cardStyles()}>
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box maxW={"237px"} fontSize={"24px"}>
              {project3.title}
            </Box>

            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              colorScheme=""
              border="2px solid"
              borderColor="cyan"
              mb={4}
              onClick={() => window.open(project3.gLink)}
            />
          </CardHeader>
          <Box
            p={5}
            maxW={{ base: "100%", sm: "370", md: "370" }}
            maxH={{ base: "auto", sm: "170", md: "170" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            m={"auto"}
            overflow={"hidden"}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              transition={"ll .2s ease-in-out"}
              borderRadius={"10px"}
              src={isHovered ? project3.gif : project3.image}
              alt={project3.title}
            />
          </Box>

          <CardBody>
            <p>{project3.description}</p>
          </CardBody>
          <CardFooter
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="row"
            flexWrap={"wrap"}
          >
            {displaySkills(project3)}
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
