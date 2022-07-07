import { Dispatch, FC, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import type { ProjectType } from "../projects";
import { motion } from "framer-motion";
import { container, fadeInFromTop, tagContainer, scaleIn } from "../animations";
interface Props extends ProjectType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectModal: FC<Props> = ({
  isOpen,
  setIsOpen,
  image,
  title,
  description,
  longDescription,
  tags,
  externals,
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="bg-black inset-0 fixed bg-opacity-80 py-6 px-5"
      >
        <Dialog.Panel
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0.2 } }}
          className="bg-neutral-900 rounded-md max-w-lg mx-auto flex flex-col gap-3 p-5"
        >
          {/* <motion.div
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src={`/images/${image}`}
              alt={title}
              width={2400}
              height={1350}
            />
          </motion.div> */}

          <div className="flex flex-col mt-2">
            <motion.div initial="hidden" animate="visible" variants={container}>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Dialog.Title
                  as={motion.h5}
                  variants={fadeInFromTop}
                  className="text-lg font-semibold"
                >
                  {title}
                </Dialog.Title>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={tagContainer}
                  className="text-xs flex flex-wrap gap-2 text-gray-400 py-1 rounded-md shadow-lg md:bg-neutral-800 md:px-3"
                >
                  {tags.map((tag: string) => (
                    <motion.span
                      variants={scaleIn}
                      key={tag}
                      className="rounded-md p-1 text-gray-400 hover:text-white hover:bg-neutral-900 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <Dialog.Description
                as={motion.p}
                variants={fadeInFromTop}
                className="text-gray-400 mt-3 mb-8"
              >
                {longDescription}
              </Dialog.Description>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={tagContainer}
              className="flex flex-col text-center gap-2 sm:justify-end sm:flex-row sm:w-fit sm:ml-auto"
            >
              {!!externals.github && (
                <motion.a
                  variants={scaleIn}
                  href={externals.github}
                  target="_blank"
                  className="bg-neutral-800 rounded-[4px] p-1 sm:w-20"
                >
                  Source
                </motion.a>
              )}
              {!!externals.demo && (
                <motion.a
                  variants={scaleIn}
                  href={externals.demo}
                  target="_blank"
                  className="bg-neutral-800 rounded-[4px] p-1 sm:w-20"
                >
                  Demo
                </motion.a>
              )}
              <motion.button
                variants={scaleIn}
                onClick={() => setIsOpen(false)}
                className="bg-neutral-800 rounded-[4px] p-1 sm:w-20 block"
              >
                Close
              </motion.button>
            </motion.div>
          </div>
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  );
};

export default ProjectModal;
