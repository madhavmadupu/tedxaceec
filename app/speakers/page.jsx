import React from 'react'
import Scroller from './Scroller'

const page = () => {
  return (
    <div className='w-screen lg:h-screen flex-col lg:flex-row flex justify-center items-center gap-[4rem] p-[1rem] pt-[8rem]'>
      <div className='flex flex-col lg:max-w-[50%] gap-[1rem]'>
        <div className='text-4xl font-black underline text-red-500'>
          SPEAKERS
        </div>
        <div>
          At TEDxACE, we are proud to showcase a diverse lineup of thought leaders, innovators, and visionaries who bring their unique perspectives to the stage. Our speakers are passionate individuals who have made significant contributions in fields ranging from technology, science, and arts to social change and education. Each talk is carefully curated to inspire, challenge, and ignite conversations that matter. Join us as we explore new ideas, spark meaningful discussions, and drive positive impact through the power of storytelling and knowledge-sharing.
        </div>
      </div>
      <Scroller />
    </div>
  )
}

export default page