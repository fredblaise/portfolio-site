import React from 'react';

function PortfolioItem({ i, title, imgUrl, stack, link, details }) {
   return (
      <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white lg:hover:scale-105 active:scale-95 rounded-md overflow-hidden"
      >
         <img
            src={imgUrl}
            alt="portfolio"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map((item, i) => (
                  <span key={i} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-lg">
                     {item}
                  </span>
               ))}
            </p>
            <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'>
               {details}
            </p>
         </div>
      </a>
   )
}

export default PortfolioItem;