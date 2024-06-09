import { motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    },
})

const Technologies = () => {
    return (
        <section id="skills">
            <div className="border-b border-neutral-800 pb-24">
            <motion.h1
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:-100}}
              transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Skills</motion.h1>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVariants(2.5)}
                inherit="initial"
                animate="animate"

                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-600"/>
                </motion.div>
                <motion.div
                 variants={iconVariants(3)}
                 inherit="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                 variants={iconVariants(5)}
                 inherit="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                 variants={iconVariants(2)}
                 inherit="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-gray-600"/>
                </motion.div>
                <motion.div
                 variants={iconVariants(6)}
                 inherit="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-yellow-600"/>
                </motion.div>
            </motion.div>
        </div>
        </section>
    );
};

export default Technologies;
