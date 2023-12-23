import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
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
    description: "A project that does something",
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

  return (
    <div style={{width: "100%"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image h={100} w={180} mt={115} src="/media/aot_chibi.png"></Image>
        <Box
          borderRadius="md"
          bg="#FFB612"
          color="white"
          px={4}
          h={7}
          p={10}
          transition={"all .2s ease-in-out"}
          _hover={{ bg: "cyan", color: "black", transform: "scale(1.1)" }}
          style={{
            fontSize: "40px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Projects
        </Box>
      </div>
      <SimpleGrid id="projects-grid"
        minChildWidth="3px"
        spacing="40px"
        justifyItems="center"
        w="100%"
        overflow="hidden"

      >
        <Card
          w={{ base: "330px", sm: "sm", md: "sm" }}
          maxW={{ base: "100%", sm: "sm", md: "sm" }}
          h={{ sm: "550", md: "550" }}
          maxH={{ sm: "550", md: "550" }}
          m={{ base: "30px", sm: 4, md: 4 }}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
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
            {/* <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>JavaScript</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>CSS</p>
            </Box> */}
          </CardFooter>
        </Card>
        <Card
          w={{ base: "330px", sm: "sm", md: "sm" }}
          maxW={{ base: "100%", sm: "sm", md: "sm" }}
          h={{ sm: "550", md: "550" }}
          maxH={{ sm: "550", md: "550" }}
          m={{ base: "30px", sm: 4, md: 4 }}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
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
            {/* <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>JavaScript</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>CSS</p>
            </Box> */}
          </CardFooter>
        </Card>
        <Card
          w={{ base: "330px", sm: "sm", md: "sm" }}
          maxW={{ base: "100%", sm: "sm", md: "sm" }}
          h={{ sm: "550", md: "550" }}
          maxH={{ sm: "550", md: "550" }}
          m={{ base: "30px", sm: 4, md: 4 }}
          p={5}
          color="white"
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            border: "5px solid cyan",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.25)",
          }}
        >
          <CardHeader
            mb={5}
            fontSize={{ base: "25", sm: "35", md: "35" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              w={{ base: "100%", sm: "370", md: "370" }}
              h={{ base: "auto", sm: "170", md: "170" }}
              style={{
                transition: "all .2s ease-in-out",
                borderRadius: "10px",
              }}
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
            maxWidth="100%"
            overflow={"hidden"}
          >
            {displaySkills(project3)}
            {/* <Box
              borderRadius="md"
              bg="#FFB612"
              color="white"
              px={4}
              h={7}
              mr={5}
            >
              <p>Python</p>
            </Box>
            <Box borderRadius="md" bg="#FFB612" color="white" px={4} h={7}>
              <p>Selenium</p>
            </Box> */}
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default Projects;
