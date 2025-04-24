import { Block } from "../Block"
import { useState } from "react"



export const ContactBlock = () => {

    const [isOpen, setIsOpen] = useState(false)


    return(
        <>
        <Block 
        whileHover={{
            scale:1.02,
            borderWidth:"5px"
        }}

        className="col-span-12">
            <button
                 onClick={() => setIsOpen(true)}
                 className="w-full flex items-center justify-center text-content font-merri text-2xl font-extrabold gap-2">
                Contact Me
            </button>
     
        </Block>

        {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-all duration-300 scale-95 opacity-0 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">Hello Jeet 👋</h2>
            <p className="mb-4 text-gray-300">This is your TypeScript modal!</p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

        </>

        

    )
}