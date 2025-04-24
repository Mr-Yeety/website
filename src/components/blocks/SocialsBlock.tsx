
import { SiGithub, SiInstagram, SiGmail } from "react-icons/si"
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







const GradientIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <SiInstagram fill="url(#ig-gradient)" width="30%" height="100%" />
    </svg>
  );