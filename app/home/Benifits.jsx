import React from 'react';
import Image from 'next/image';

const data = [
    {
        id: 0,
        type: 'text',
        title: 'Diverse Ideas',
        description: 'Experience a day brimming with speakers from various backgrounds and disciplines, each bringing unique perspectives that challenge conventional thinking and inspire new ways of understanding the world.',
        imgSrc: '/ideas.jpg',
    },
    {
        id: 1,
        type: 'text',
        title: 'Networking',
        description: 'Connect with like-minded individuals, engage in thought-provoking discussions, and build meaningful relationships with peers, speakers, and innovators who share your passion for impactful ideas.',
        imgSrc: '/network.jpg',
    },
    {
        id: 2,
        type: 'text',
        title: 'Performances',
        description: 'Enjoy captivating performances that embody the spirit of creativity and entertainment, ensuring that the "E" in TEDx is fully embraced and celebrated throughout the event.',
        imgSrc: '/performances.jpg',
    }
];

const Benifits = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-black text-3xl'>Why <span className='text-red-500'>TEDx</span></h1>
            <div className="flex flex-wrap gap-[1rem] p-[1rem] justify-center items-center">
                {data.map((item) => (
                    <div key={item.id} className="relative w-[300px] h-[400px]">
                        <Image
                            src={item.imgSrc}
                            alt={item.title}
                            className="rounded-tl-[2rem] rounded-br-[2rem] object-cover"
                            layout="fill"
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-left rounded-tl-[2rem] rounded-br-[2rem]">
                            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black to-transparent rounded-tl-[2rem] rounded-br-[2rem]" />
                            <h2 className="relative text-2xl font-bold mb-2 text-white z-10">{item.title}</h2>
                            <p className="relative text-sm text-white z-10">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benifits;
