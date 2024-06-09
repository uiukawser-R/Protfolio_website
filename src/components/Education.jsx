import { motion } from "framer-motion"

const Education = () => {
    return (
   <section id="education">
     <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Education</motion.h1>
            <div className="flex flex-col items-center">
                <div className="max-w-lg w-full  shadow-md rounded-lg overflow-hidden mb-6 ">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                    className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Bachelor of Science in Computer Science</h2>
                        <p className="text-neutral-400 mb-1">United International University, Dhaka</p>
                        <p className="text-neutral-400">CSE</p>
                        <p className="text-neutral-400">Year: ( 2017 - 2023 )</p>
                    </motion.div>
                </div>
                <div className="max-w-lg w-full  shadow-md rounded-lg overflow-hidden mb-6 ">
                    <motion.div
                    whileInView={{opacity:1,y:0}}
                    initial={{opacity:0,y:100}}
                    transition={{duration:0.5}}
                    className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Higher Secondary Certificate</h2>
                        <p className="text-neutral-400 mb-1">Shaid Bul Bul Govt. Collage, Pabna</p>
                        <p className="text-neutral-400">HSC in Science</p>
                        <p className="text-neutral-400">Year: 2014- 2016</p>
                    </motion.div>
                </div>
                <div className="max-w-lg w-full  shadow-md rounded-lg overflow-hidden mb-6 ">
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                    className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">Secondary School Certificate</h2>
                        <p className="text-neutral-400 mb-1">Khayersuti High School & College, Pabna</p>
                        <p className="text-neutral-400">SSC in Science</p>
                        <p className="text-neutral-400">Year: 2012 - 2014</p>
                    </motion.div>
                </div>
           
            </div>
        </div>
   </section>
    );
};

export default Education;
