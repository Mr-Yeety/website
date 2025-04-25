import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Block } from "../Block";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi"
import { SiGithub } from "react-icons/si"
import { Link } from "react-router";

type Project = {
    id: number,
    name: string,
    desc: string,
    longdesc: string,
    techstack: string[],
    github: string,
    images: string[],
}


export const Project = () => {
    const [projects, setProjects] = useState<Project[]>([])


    let { id } = useParams();


    useEffect(() => {
        fetch('/projects.json')
        .then((response) => response.json())
        .then(jsonData => setProjects(jsonData))
        .catch((error) => console.error('Error fetching JSON:', error));
    })

    const project = projects.find((project) => project.id === Number(id))


    return (
        <div>
       

            {project ? (



                <div className="bg-[#090c10] p-0 md:overflow-y-hidden md:overflow-x-hidden h-screen overflow-x-auto overflow-y-auto ">

                    <div className=" md:absolute flex justify-center items-center w-full bg-transparent mt-7">
                        <Link to="/">
                                <button className="border-2 border-content-light/30 rounded-full p-2  hover:border-4 transition duration-350">
                                    <FiX className="text-content size-5"/>
                                </button>

                         </Link>
                    </div>
                <motion.div 
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense mt-5 md:mt-25">
                    <Block className="col-span-12 md:col-span-6 flex justify-center items-center gap-8">
                        <h1 className="text-content font-merri text-center font-extrabold text-5xl">{project.name}</h1>
                       
                    </Block>

                    <Block className="col-span-12 md:col-span-6 flex flex-col justify-center items-center gap-8">
                        <p className="text-content/80 mt-2 text-md font-poppins font-medium text-left m-3">{project.longdesc}</p>
                        <div className="flex m-0 p-0 justify-evenly items-center w-full gap-0 md:gap-4">
                        <a href={project.github} target="_blank" className="grid h-full place-content-center text-3xl text-content hover:text-content/50 transition-colors duration-250">
                                <SiGithub/>
                            </a>
                        
                        
                            <motion.a
                                            href="https://www.google.com/"
                                            target="_blank"
                                            initial={{width:48}}
                                            whileHover={{width: 160}}
                                            animate={{width: 48}}
                                            transition={{type:"spring", stiffness: 300, damping: 20}}
                                            className="bg-transparent text-content font-poppins w-30 h-10 rounded-full border-2 border-content-light/30 overflow-hidden group flex items-center justify-between relative gap-0">
                                                <span className=" font-poppins absolute left-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                                                    Take a Look
                                                </span>
                                                <div className="absolute inset-0 flex items-center justify-center group-hover:justify-end group-hover:pr-4 transition-all duration-300">
                                                    <FiArrowUpRight className="w-5 h-5 " />
                                                </div>
                                            </motion.a>
                    </div>
                    </Block>

                    <Block className="col-span-12  flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                        {project.techstack.map((tech) => (
                        <motion.div
                        key={project.id}
                        whileHover={{
                        scale: 1.05,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-6 py-2 rounded-full border border-content-light/30 bg-transparent text-content  text-sm md:text-lg font-poppins font-medium backdrop-blur-md cursor-default"
                        >
                        {tech}
                        </motion.div>
))}
                      
                    </Block>

                    {project.images.map((image, ) => (
                    <img key={project.id} src={image} alt="hi" className=" col-span-12 md:col-span-6" />

                ))}

                    


                </motion.div>
                </div>
              
            ) : (
                <p className="text-content">Project not found</p>
            )}
        </div>
    )
}