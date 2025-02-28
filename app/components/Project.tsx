import React from 'react';

interface ProjectProps {
    href: string;
    imgSrc: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ href, imgSrc, description }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:scale-[1.01] duration-300'>
                <img src={imgSrc} alt='Project Image' className='w-full h-full object-cover'/>
                <p className='p-4'>{description}</p>
            </div>
        </a>
    );
};

export default Project;