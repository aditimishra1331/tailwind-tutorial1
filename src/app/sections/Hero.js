'use client'
import { useState } from "react";
import Button from "../components/Button"
import { shoes, statistics } from '../constants'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import ShoeCard from "../components/ShoeCard"
import Image from 'next/image'



//const [changeBigShoeImg, setbigShoe] = useState(bigShoe1)

const Hero = () => {
const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2"
    > 
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-monserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm text-[72px] max-sm:leading-[82] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-sm">ascending further than mount everest</p>

        <Button label='Shop now' iconURL={arrowRight} />       
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map( (stat,index ) => (
           <div key={stat.label} >
            <p className="text-4xl font-palequin font-bold">{stat.value}</p>
            <p className="leading-7 font-monserrat text-slate-gray">{stat.label}</p>
           </div>

          ))}
        </div>
    </div>
   <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
    <Image
    src={bigShoeImg}
    alt="shoe collection"
    width={610}
    height={500}
    className="object-contain relative z-10"
    />



<div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
  
   ))}
</div>


   </div>
    </section>
  )
}

export default Hero