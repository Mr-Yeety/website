import { Block } from "../Block"

export const HeaderBlock = () => {

    return <Block className="col-span-12 md:col-span-6 h-36">

        <div className=" flex items-center w-full h-full gap-7">

        <img
            src="/Subject.png"
            alt="avatar"
            className="size-20 rounded-full w-fit"
            />
        <h1 className=" flex flex-col text-2xl  text-content font-extrabold font-merri leading-tight">
            Hi, I'm Jeet!
            <span className="text-content/80 font-poppins font-medium"> I make things on the web</span>
        </h1>
        </div>
    </Block>
}