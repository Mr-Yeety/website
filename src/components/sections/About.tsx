import { Link } from "react-router";
import { FiX } from "react-icons/fi";


export const About = () => {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#090c10] px-6 py-16 md:px-24">




        <div className=" md:absolute flex justify-center items-center w-full bg-transparent ">
            <Link to="/">
                    <button className="border-2 border-content-light/30 rounded-full p-2  hover:border-4 transition duration-350">
                        <FiX className="text-content size-5"/>
                    </button>

             </Link>
        </div>
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center font-merri text-content">The Full Story</h1>
        
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 font-merri text-content">How I Got into Web Development</h2>
                  <p className="text-lg leading-relaxed text-content/80 font-poppins">
                    I didn't start with code. In fact, for the longest time, I thought the world of programming was reserved for math prodigies and hoodie-clad hackers. 
                    But curiosity is a powerful thing.
                    <br /><br />
                    My journey into web development began with a simple need: <span className="italic">to make something that was mine</span>. 
                    It started with a blog I wanted to create for fun—a corner of the internet where I could document random thoughts. 
                    But the templates were limiting, and so, I decided to build it from scratch. I stumbled into HTML and CSS, made my first div, and from that moment, I was hooked.
                    <br /><br />
                    What began as trial and error turned into passion. I dove into <span className="font-medium text-content">JavaScript</span>, explored <span className="font-medium text-content">React</span>, 
                    and found that building interfaces could be just as artistic as they are technical. The idea that I could bring ideas to life—interactive, functional, beautiful—was incredibly motivating.
                  </p>
                </section>
        
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 font-merri text-content">What I've Worked On</h2>
                  <ul className="list-disc list-inside space-y-3 text-lg">
                    <li className="font-medium text-content/80 font-poppins">
                      <span className="font-medium text-content/80 font-poppins">Portfolio Sites</span> - Clean, modern, responsive pages that tell stories—like this one.
                    </li>
                    <li className="font-medium text-content/80 font-poppins">
                      <span className="font-medium text-content/80 font-poppins">Dashboards & Tools</span> - Internal tools built with <span className="font-medium text-white">React, Tailwind, and Firebase</span>, 
                      made to help manage everything from student data to robotics gear.
                    </li>
                    <li className="font-medium text-content/80 font-poppins">
                      <span className="font-medium text-content/80 font-poppins">Community Projects</span> - Websites for student clubs and initiatives that aim to empower young innovators.
                      It's not just about code—it's about purpose.
                    </li>
                  </ul>
                  <p className="mt-4 text-lg  text-content/80 font-poppins">
                    Every project has taught me something new, whether it's <span className="italic">deploying to Vercel</span>, optimizing load time, or working with APIs.
                  </p>
                </section>
        
                <section>
                  <h2 className="text-2xl font-semibold mb-4 font-merri text-content">What's Next</h2>
                  <p className="text-lg leading-relaxed  text-content/80 font-poppins">
                    I'm now pushing the boundaries of what I can build. I'm diving deeper into:
                  </p>


                  <ul className="list-disc list-inside space-y-2 mt-4 text-lg text-gray-300">
                    <li><span className="font-medium text-content/80 font-poppins">Next.js</span> for faster, more dynamic apps</li>
                    <li><span className="font-medium text-content/80 font-poppins">Framer Motion</span> for smoother animations and micro-interactions</li>
                    <li><span className="font-medium text-content/80 font-poppins">Design Systems</span> so my work isn't just functional, but consistently elegant</li>
                  </ul>
                  <p className="mt-4 text-lg text-content/80 font-poppins">
                    Eventually, I want to blend <span className="font-medium text-content">engineering with empathy</span>—building things that matter, 
                    at the intersection of <span className="font-medium text-content">user experience and social impact</span>. 
                    Whether it's creating tools for students or contributing to open-source projects, I'm chasing work that feels meaningful.
                  </p>

                  <p className="mt-4 text-lg text-content/80 font-poppins">
    I've also started taking on <span className="font-medium text-content">freelance projects</span>, helping individuals and small teams bring their digital ideas to life.
    Whether it's a landing page, a portfolio, or a full-stack app, I'm learning how to deliver real value with tight turnarounds—and loving every bit of the challenge.
                    </p>

                  <p className="mt-6 text-lg text-content font-merri italic text-center">
                    This is just the beginning.
                  </p>
                </section>
              </div>
            </div>
          );
}
