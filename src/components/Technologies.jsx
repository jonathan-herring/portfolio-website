import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiGo } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVuedotjs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKotlin className="text-7xl text-purple-500"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGo className="text-7xl text-sky-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDocker className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJest className="text-7xl text-jest"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;