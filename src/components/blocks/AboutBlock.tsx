import { Block } from "../Block"
import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router"

export const AboutBlock = () => {


   return  <Block className="col-span-12 md:col-span-8 text-3xl leading-snug">
            <div className="flex flex-col items-baseline  gap-7">
                <h3 className="font-merri font-extrabold text-content text-2xl text-left">Behind the Code</h3>
                <p className="text-[0.65em] font-poppins text-left text-content/80 w-fit">How I got into web development, what I've worked on, and where I'm heading next.</p>
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:gap-0 gap-3 w-full mt-5">
                    <Link to={"/thefullstory"}>
                    <motion.a
                    href="#"
                    initial={{width:48}}
                    whileHover={{width: 160}}
                    animate={{width: 48}}
                    transition={{type:"spring", stiffness: 300, damping: 20}}
                    className="bg-transparent text-content font-poppins w-30 h-10 rounded-full border-2 border-content-light/30 overflow-hidden group flex items-center justify-between relative ">
                        <span className=" font-poppins absolute left-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                            The Full Story
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center group-hover:justify-end group-hover:pr-4 transition-all duration-300">
                            <FiArrowUpRight className="w-5 h-5 " />
                        </div>
                    </motion.a>
                    </Link>
                    <p className="text-[0.5em] mb-1  text-content/30 font-poppins font-light">Last Updated: April 19, 2025 </p>
                </div>
            </div>
   

    </Block>
}