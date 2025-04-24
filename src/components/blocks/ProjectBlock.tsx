import { Block } from "../Block"
import {motion} from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router"
import { useEffect } from "react"
import { useState } from "react"

export const ProjectBlock = () => {


    type Project = {
        id: number,
        name: string,
        desc: string
    }

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        fetch('/projects.json')
        .then((response) => response.json())
        .then(jsonData => setProjects(jsonData))
        .catch((error) => console.error('Error fetching JSON:', error));

        console.log(projects)
    },[])






    return (
        <>
        {projects.map((project) => (

        <Block key={project.id} className="md:col-span-4 col-span-12 p-0 overflow-hidden flex flex-col items-center justify-between m-0">
      <div>
        <h2 className="text-4xl  text-content text-center font-merri font-extrabold mt-7">{project.name}</h2>
        <p className="text-content/80 mt-2 text-sm font-poppins text-center m-3">{project.desc}</p>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:gap-0 gap-1 w-full mt-5">
                    <Link to={`/projects/${project.id}`}>
                    <motion.a
                    href="#"
                    initial={{width:48}}
                    whileHover={{width: 160}}
                    animate={{width: 48}}
                    transition={{type:"spring", stiffness: 300, damping: 20}}
                    className="bg-transparent text-content font-poppins w-30 h-10 rounded-full border-2 border-content-light/30 overflow-hidden group flex items-center justify-between relative gap-0 mb-2 ml-2 ">
                        <span className=" font-poppins absolute left-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                            Learn More
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center group-hover:justify-end group-hover:pr-4 transition-all duration-300">
                            <FiArrowUpRight className="w-5 h-5 " />
                        </div>
                    </motion.a>
                    </Link>
                </div>

     

        </Block>

))}




        </>


    )


}