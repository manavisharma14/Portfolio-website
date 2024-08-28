import {RiReactjsLine} from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiRos } from "react-icons/si";
import {motion} from "framer-motion";




const iconVariants = (duartion) => ({
  initial: {y:-10},
  animate : {
    y: [10, -10],
    transition : {
      duartion: duartion,
      ease : "linear",
      repeat : Infinity,
      repeatType: "reverse"
    ,}
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">

        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial = {{opacity:0, y:-100}}
        transition={{duartion: 1.5 }}
        className="my-20 text-center text-4xl font-heading">/ technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial = {{opacity: 0, x:-100}}
        transition={{duration:1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(5)}
            initial= "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutarl-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial= "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutarl-800 p-4">
                <FaDocker className="text-7xl"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial= "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutarl-800 p-4">
                <FaAws className="text-7xl "/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial= "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutarl-800 p-4">
                <FaPython className="text-7xl "/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial= "intial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutarl-800 p-4">
                <SiRos className="text-7xl "/>
            </motion.div>

          
           

        </motion.div>
    </div>
  )
}

export default Technologies