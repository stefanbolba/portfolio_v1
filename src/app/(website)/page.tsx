"use client";
import { useState } from "react";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import ExperienceCard from "@/app/_components/Card/ExperienceCard";
import ProjectCard from "@/app/_components/Card/ProjectCard";
import useScroll from "@/app/_hooks/useScroll";

const experience = [
  {
    time: "2021 — Present",
    jobTitle: "Full Stack Developer",
    jobDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus,
    quibusdam, nemo voluptates quod quia voluptatem voluptas quos`,
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript", "Node.js", "Express", "MongoDB"],
  },
  {
    time: "2021 — Present",
    jobTitle: "Full Stack Developer",
    jobDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus,
    quibusdam, nemo voluptates quod quia voluptatem voluptas quos`,
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript", "Node.js", "Express", "MongoDB"],
  },
];

const projects = [
  {
    image: "/card.webp",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam",
  },
  {
    image: "/card.webp",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus, quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam",
  },
];

export default function Home() {
  const [option, setOption] = useState("About");
  const aboutRef = useScroll(option, setOption, "About");
  const experienceRef = useScroll(option, setOption, "Experience");
  const projectRef = useScroll(option, setOption, "Projects");

  const menuLinks = [
    {
      name: "About",
      href: "#about",
      onClick: aboutRef.handleScroll,
    },
    {
      name: "Experience",
      href: "#experience",
      onClick: experienceRef.handleScroll,
    },
    {
      name: "Projects",
      href: "#projects",
      onClick: projectRef.handleScroll,
    },
  ];

  return (
    <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6">
      <Header option={option} menuLinks={menuLinks} />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 flex flex-col gap-5"
          ref={aboutRef.ref}
        >
          <h2 className="block lg:hidden text-sm font-bold uppercase text-slate-200">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo
            voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus,
            quibusdam, nemo voluptates quod quia voluptatem voluptas quos{" "}
            <span className="font-medium text-slate-200 hover:text-purple-300 focus-visible:text-purple-300">
              doloremque
            </span>{" "}
            consequuntur. Quisquam
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, accusamus, quibusdam, nemo
            voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam voluptatum, accusamus,
            quibusdam, nemo voluptates quod quia voluptatem voluptas quos doloremque consequuntur. Quisquam
          </p>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 flex flex-col gap-5"
          ref={experienceRef.ref}
        >
          <h2 className="block lg:hidden text-sm font-bold uppercase text-slate-200">Experience</h2>
          <div className="flex flex-col gap-5 group/list">
            {experience.map((e, i) => (
              <ExperienceCard key={i} {...e} />
            ))}
          </div>
          <a
            href="resume.pdf"
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 border-b border-transparent hover:border-purple-300 w-fit"
          >
            View Full Resume
          </a>
        </section>
        <section
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 flex flex-col gap-5"
          ref={projectRef.ref}
        >
          <h2 className="block lg:hidden text-sm font-bold uppercase text-slate-200">Projects</h2>
          <div className="flex flex-col gap-5 group/list">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
