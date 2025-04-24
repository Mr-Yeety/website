import { HeaderBlock } from "../blocks/HeaderBlock";
import { SocialsBlock } from "../blocks/SocialsBlock";
import { AboutBlock } from "../blocks/AboutBlock";
import { LocationBlock } from "../blocks/LocationBlock";
import { motion } from "framer-motion";
import { ProjectBlock } from "../blocks/ProjectBlock";

export const Home = () => {

    return (
        <div className="bg-[#090c10] p-0 md:overflow-y-hidden md:overflow-x-hidden h-screen overflow-x-auto overflow-y-auto ">
            <motion.div 
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense mt-5 md:mt-25">
                <HeaderBlock/>
                <AboutBlock/> 
                <SocialsBlock/>
                <LocationBlock/>
                <ProjectBlock/>
        
            </motion.div>
        </div>
    )
}