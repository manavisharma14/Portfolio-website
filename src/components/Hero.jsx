import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/manaviProfilePic.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl font-heading"
            >
              Hi, I'm Manavi!
            </motion.h1>

            <motion.span
  variants={container(0.5)}
  initial="hidden"
  animate="visible"
  className="text-3xl tracking-tight text-white"
>
  Software Developer
</motion.span>



            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-justify mt-8 lg:mr-40"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Manavi Sharma"
            className="w-[450px] h-[450px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
