import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from '../components/TimelineItem';
import Title from '../components/Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center">
         <div className="w-full max-w-xl">
            <Title>Timeline</Title>
            {timeline.map((item, i) => (
               <TimelineItem 
                  key={i}
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;