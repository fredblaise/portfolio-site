import React from 'react';
import skills from '../data/skills';
import SkillsItem from './SkillsItem';
import Title from './Title';

function Skills() {
    return (
        <div className="flex flex-col w-full md:w-7/12 mx-auto justify-center">
            <Title>Skills</Title>
            <div className="flex flex-wrap gap-4 justify-start" >
                {skills.map((item, i) => (
                    <SkillsItem
                        key={i}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;