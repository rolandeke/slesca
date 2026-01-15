"use client";
import React from 'react'
import {BackgroundBeams} from '../ui/background-beams'
import Lottie from 'lottie-react';
import shape_lottie from '../../lottiefiles/shape.json'
import plant_lottie from '../../lottiefiles/plant.json'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img_1 from '../../image/2.jpg'

import { Link } from 'react-router-dom';

const teamMembers = [
  {
    image: img_1,
  },
  {
    image: img_1,
  },
  {
    image: img_1,
  },
  {
    image: img_1,
  },
]
const Banner = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const knowMore = () =>{
    '#'
  }

  return (
    <>
      <div className="lg:h-[46rem]  w-full  bg-gradient-to-t from-green-950 via-green-800 to-green-950 relative flex
        flex-col items-center antialiased"
      >

      <div className='w-full h-full flex sm:flex-row flex-col-reverse justify-center items-center max-w-7xl lg:mt-[0rem] mt-[4rem] '>
      {/* <Lottie animationData={shape_lottie} width={200} height={200} loop={true} /> */}

        <div className='sm:w-[32rem] lg:w-[40rem] w-full flex justify-center items-center z-0'>
            <div className="max-w-2x mx-auto w-full h-full">
              <Carousel
              responsive={responsive}
              infinite
              draggable
              swipeable
              centerMode={false}
              autoPlay={true}
              keyBoardControl={true}
              removeArrowOnDeviceType={['tablet', 'mobile']}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="mx-4"
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                >
                  <div className="rounded shadow p-6 flex flex-col justify-center items-center">
                    <img
                      src={member.image}
                      alt='team'
                      className="w-full h-full rounded-tl-[7rem] rounded-br-[6rem] rounded-bl-3xl rounded-tr-2xl"
                    />
                  </div>
                </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-auto p-4 relative sm:-ml-[6rem]">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
              {/* <Lottie
                animationData={plant_lottie}
                loop={true}
                className="w-[50rem] sm:-ml-[5rem]"
              /> */}
            </div>
            <div className="relative z-10 text-start lg:ml-[8rem] sm:ml-[3rem] mt-10">
              <h1 className="lg:text-2xl text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-600 font-sans font-bold">
              Welcome <br /> to Sierra Leone <br /> Seed Certification Agency (SLeSCA)
              </h1>
              <p></p>
              <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm">
              Ensuring high-quality seeds and fostering growth for Sierra Leone's food security.
              </p>
              <Link to='/about'
                onClick={knowMore}
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border
                  border-slate-800 bg-[linear-gradient(110deg,#3C4B87FF,45%,#223550FF,55%,#425D93FF)] bg-[length:200%_100%]
                  px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400
                  focus:ring-offset-2 focus:ring-offset-slate-50 hover:cursor-pointer sm:w-64 w-full"
              >
                More About Us
              </Link>
            </div>
          </div>
      </div>

      <BackgroundBeams />
    </div>
    </>

  )
}

export default Banner
