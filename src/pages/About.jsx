import React from 'react';
import Skills from '../components/Skills';

function About() {
   return (
      <div className="flex items-center justify-center flex-col">
         <h1 className="text-4xl md:text-8xl m-1 md:m-3 font-semibold text-red-500 rounded-lg px-10">Fred Blaise</h1>
         <p className="text-base md:text-xl font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl m-6 font-bold text-justify">
            I'm a web developer who is keen on building polished projects and
            is hungry to learn as much about software engineering as possible.
            My main goal when building projects is to create functional applications
            that are easy to use and solve real problems.
         </p>
         <Skills />
      </div>
   )
}

export default About;