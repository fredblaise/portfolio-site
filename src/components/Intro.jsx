import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-8xl mb-1 md:mb-3 font-semibold text-red-500 rounded-lg px-10">Fred Blaise</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold text-justify">
            I'm a web developer who is keen on building polished projects and
            is hungry to learn as much about software engineering as possible.
            My main goal when building projects is to create functional applications
            that are easy to use and solve real problems.
         </p>
      </div>
   )
}

export default Intro;