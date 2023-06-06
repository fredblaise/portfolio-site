import React from 'react';

function Title({ children }) {
   return (
      <h1
         className="text-4xl font-bold underline mb-4 underline-offset-8 decoration-4 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
   )
}

export default Title;