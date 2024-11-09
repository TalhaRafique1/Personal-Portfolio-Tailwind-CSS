
import React from 'react';

const Skills = () => {
  return (
    <div>
      <h2 className='mt-18 text-center text-4xl font-bold underline text-black'>My Skills</h2>
      <ul>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>HTML</li><div className='w-[25%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>CSS</li><div className='w-[20%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>JavaScript</li><div className='w-[10%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>TypeScript</li><div className='w-[20%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>React</li><div className='w-[10%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
        <li className='mb-3 text-2xl text-white font-semibold ml-16'>Nextjs</li><div className='w-[30%] ml-16 mb-3 h-4 bg-red-600 rounded-2xl'></div>
      </ul>
    </div>
  );
};

export default Skills;
