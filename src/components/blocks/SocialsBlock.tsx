
import { SiGithub, SiGmail } from "react-icons/si"
import { Block } from "../Block"

export const SocialsBlock = () => {

    return (
    <>
    <Block 
    whileHover={{
        scale:1.1,
        borderWidth:"5px"
    }}
    className="col-span-12 bg-[#0d1117] md:col-span-3">
        <a href="mailto: joshijeet84@gmail.com" className="grid h-full w-full place-content-center text-3xl font-merri  text-content">
            <SiGmail/>
        </a>
    </Block>

    <Block 
    whileHover={{
        scale:1.1,
        borderWidth:"5px"
    }}
    className="col-span-12 bg-[#0d1117] md:col-span-3">
        <a href="https://github.com/jeetjoshi1" target="_blank" className="grid h-full place-content-center text-3xl text-white">
            <SiGithub/>
        </a>
    </Block>
    </>
    )
}





