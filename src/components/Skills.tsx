import { motion } from "framer-motion";
import { FC } from "react";
import { container, fadeInFromTop, scaleIn } from "../animations";

const skills = [
  {
    label: "JavaScript",
  },
  {
    label: "TypeScript",
  },
  {
    label: "React",
  },
  {
    label: "CSS",
  },
  {
    label: "Tailwind",
  },
  {
    label: "Node",
  },
  {
    label: "Express",
  },
  {
    label: "MySQL",
  },
  {
    label: "MongoDB",
  },
  {
    label: "Git",
  },
  {
    label: "GitHub",
  },
  {
    label: "Next.js",
  },
];

const Skill: FC<{ label: string }> = ({ label }) => {
  return (
    <motion.span
      key={label}
      variants={scaleIn}
      className="cursor-default text-gray-600 bg-neutral-50 hover:bg-neutral-100 dark:text-gray-400 dark:bg-neutral-900 p-2 border border-neutral-200 dark:border-neutral-800 rounded-[4px] dark:hover:bg-neutral-800 transition-colors"
    >
      {label}
    </motion.span>
  );
};

const Skills: FC = () => {
  return (
    <motion.section initial="hidden" animate="visible" variants={container}>
      <motion.h3 variants={fadeInFromTop} className="text-3xl font-bold mb-8">
        Lets talk about
      </motion.h3>

      <motion.div
        className="flex flex-wrap gap-2"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {skills.map((skill) => {
          return <Skill key={skill.label} label={skill.label} />;
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
