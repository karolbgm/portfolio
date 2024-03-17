"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RockyMountain Waterways",
    description: "A digital guide to explore the diverse water bodies in Colorado.",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karolbgm/rmww-project",
    previewUrl: "https://rockymountainwaterways-project.onrender.com/",
  },
  {
    id: 2,
    title: "Mastermind Game",
    description: "A digital Mastermind game where you challenge your code-breaking skills to uncover the hidden color sequence.",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karolbgm/mastermind-project",
    previewUrl: "https://karolbgm.github.io/mastermind-project/",
  },
  {
    id: 3,
    title: "DevPort",
    description: "A full stack app designed to provide community and a showplace for software developers.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karolbgm/Project_3_GA",
    previewUrl: "https://socdev-frontend-c2e6c90f6b00.herokuapp.com/home",
  },
  {
    id: 4,
    title: "SubHub",
    description: "A subscription manager app designed to help users efficiently manage their various subscriptions.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karolbgm/capstone-subhub-final",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
