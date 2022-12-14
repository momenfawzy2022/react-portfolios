import Head from 'next/head'
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillYoutube, AiFillFacebook,AiFillLinkedin,AiOutlineWhatsApp} from "react-icons/ai";
import Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import wow from "../public/a1.png"





export default function Home() {
  const [darkMode,setDarkMode] =useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create react portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-slate-200'>HunterCode</h1>
          <ul className='flex items-center'>
            <li> 
              <BsFillMoonStarsFill onClick={()=> setDarkMode (!darkMode) } className='cursor-pointer text-2xl dark:text-slate-50' />
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
            </li>
          </ul>
          </nav>
          <div className=' grid place-items-center p-10'>
            <h2 className=' py-2  text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-500 "> "  md:text-6xl'> Momen Fawzy</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-slate-50'>Developer and Designer.</h3>
            <p className=' text-center text-md py-5 text-gray-600 md:text-xl max-w-lg mx-auto'>
            Freelancer providing services for programming and Designer content
            needs. join down below and let's get cracking!
            </p>
          </div>

          {/* <div>
  <figure class=" px-10 lg:px-2 md:px-20  bg-slate-100 rounded-xl p-8 md:p-1   dark:bg-slate-800">
  <Image src={sr1} width={384} height={512}
  className="w-50 h-254 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto "/>
  <div class="pt-5 md:px-5 text-center md:text-center space-y-5">
    <blockquote>
      <p class="text-lg font-medium ">
        ???Freelancer providing services for programming and<br/>
          Designer content needs. join down 
          below and let's get<br/> cracking!
.???
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
        </div> */}



          <div className='text-5xl flex justify-center gap-16 text-gray-600 py-2'>
            
            
            <AiFillFacebook/>
            <AiFillLinkedin/>
            <AiOutlineWhatsApp/>
          </div>
          <div className='relative  mx-auto bg-gradient-to-b to-sky-900 from-cyan-500 rounded-full w-auto h-auto mt-10 overflow-hidden  md:h-96 md:w-96'>
            <Image className='ml-10 ' src={wow} width={350}  objectFit='cover' />
          </div>
        </section>
        <section>
          <div className='shadow-lg mt-10 p-10 rounded-xl bg-slate-100 dark:bg-slate-800 '>
            <h3 className='text-3xl py-1 dark:text-teal-50'>services I offerr</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-teal-50'>
              since the begimming of my journey as a Freelancer Designer and
              Developer, I've done remote work for
              <span className='text-cyan-500'> agencies </span>
              consulted for <span className='text-cyan-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-100'>
              I offer from a wide range of services, including brand
              programming and teaching.
            </p>
          </div>

            
            <div className='lg:flex gap-10'>
            <div className="grid justify-items-center shadow-lg p-10 rounded-xl my-10  bg-slate-100 dark:bg-slate-800">
              <Image src={design} width={100} height={100}  />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-50'>Beautiful Designs</h3>
              <p className='py-2 dark:text-teal-50 text-center'>
                Creating elegant designs suited for your needs following cover
                design theory.
              </p>
              <h4 className='py-4 text-cyan-500'>Design tools I ues</h4>
              <p className='text-gray-800 py-1 dark:text-teal-50'>photoshop</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'> Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'>After effect</p>
          </div>
          <div className="grid justify-items-center shadow-lg p-10 rounded-xl my-10 bg-slate-100 dark:bg-slate-800">
              <Image src={code} width={100} height={100}  />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-50'>Beautiful Designs</h3>
              <p className='py-2 dark:text-teal-50 text-center'>
                Creating elegant designs suited for your needs following cover
                design theory.
              </p>
              <h4 className='py-4 text-cyan-500'>Design tools I ues</h4>
              <p className='text-gray-800 py-1 dark:text-teal-50'>photoshop</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'> Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'>After effect</p>
          </div>
          <div className="grid justify-items-center shadow-lg p-10 rounded-xl my-10 bg-slate-100 dark:bg-slate-800">
              <Image src={consulting} width={100} height={100}  />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-teal-50'>Beautiful Designs</h3>
              <p className='py-2 dark:text-teal-50 text-center'>
                Creating elegant designs suited for your needs following cover
                design theory.
              </p>
              <h4 className='py-4 text-cyan-500'>Design tools I ues</h4>
              <p className='text-gray-800 py-1 dark:text-teal-50'>photoshop</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'> Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-teal-50'>After effect</p>
          </div>
            </div>
        </section>
        <section>
          <div className='shadow-lg mt-10 p-10 rounded-xl bg-slate-100 dark:bg-slate-800 '>
            <h3 className='text-3xl py-1 dark:text-teal-50'>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-teal-50'>
              since the begimming of my journey as a Freelancer Designer and
              Developer, I've done remote work for
              <span className='text-cyan-500'> agencies </span>
              consulted for <span className='text-cyan-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 dark:text-teal-50'>
              I offer from a wide range of services, including brand
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
            <Image 
            src={web1} 
            className="rounded-lg object-cover"
            width={"100%"} 
            height={"100%"} 
            layout="responsive" 
            />
            </div>
            <div className="basis-1/3 flex-1">
            <Image 
            src={web2} 
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive" 
            />
            </div>
            <div className="basis-1/3 flex-1" >
            <Image 
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive" 
            />
            </div>
            <div className="basis-1/3 flex-1">
            <Image 
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"} 
            layout="responsive" 
            />
            </div>
            <div className="basis-1/3 flex-1" >
            <Image src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive" 
            />
            </div>
            <div className="basis-1/3 flex-1" >
            <Image 
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"} 
            layout="responsive" 
            />
            </div>
          </div>
        </section>
        
      </main>


    </div>
  )
}
