import React from 'react';

function SkillsItem({ title }) {
    return (
            <div className='dark:text-white outline outline-2 outline-offset-2 outline-stone-900 dark:outline-white rounded-lg text-center text-xl px-2'>
                {title}
            </div>
    )
}

export default SkillsItem;