import { motion, MotionProps } from "framer-motion"
import { twMerge } from "tailwind-merge"

type Props = {
    className?: string;
} & MotionProps

export const Block = ({className, ...rest} :Props) => {

    return( 
    <motion.div
        variants={{
            hidden: {
                opacity: 0,
                scale: 1,
            },
            visible: {
                opacity: 1,
                scale: 1,
            }
        }}

        transition={{
            ease: "easeInOut",
            duration: 0.4,

        }}

        className={twMerge("col-span-4 rounded-4xl border-content-light/20 bg-[#0d1117] p-6 border-2", className)}
        {...rest}

    />

    )

}