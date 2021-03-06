import { FC, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import type { ProjectType } from "../projects";
import { scaleIn } from "../animations";

const ProjectCard: FC<ProjectType> = ({
  image,
  title,
  description,
  longDescription,
  tags,
  externals,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
        }}
        transition={{ duration: 0.1 }}
        variants={scaleIn}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full p-1 rounded-md transition-all"
      >
        <div className="p-5 rounded-md bg-white dark:bg-black flex flex-col justify-between items-start gap-10 h-full">
          <div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="mt-3">{description}</p>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-sm md:text-base"
          >
            Learn more
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <ProjectModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            image={image}
            title={title}
            description={description}
            longDescription={longDescription}
            tags={tags}
            externals={externals}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
