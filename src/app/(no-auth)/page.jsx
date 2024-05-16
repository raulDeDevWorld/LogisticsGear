'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Error from '@/components/Error'
import { services } from '@/db'
import Tag from '@/components/Tag'
import Service from '@/components/Service'
import TextMaquina from '@/components/TextMaquina'
import { useRouter } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

import 'react-awesome-slider/dist/styles.css';



const db = [
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
  {
    title: 'ESTACIÓN DE FLETE DE CONTENEDORES',
    image: '/container.png',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat voluptatem magni sequi in.'
  },
]


function Componente({ title, image, paragraph }) {
  return <div className='bg-[#ffffffcb] my-5 flex  lg:max-w-[500px] lg:text-[18px] lg:mx-5 lg:flex lg:flex-col lg:justify-center lg:items-center rounded-[15px]'>
    <img src={image} className=" w-[150px] lg:max-w-[200px] object-contain p-5" alt="" />
    <div className="w-full bg-[#2e62d1ce] p-5 py-5 rounded-b-[15px]">
      <h4 className="w-full text-left font-medium border-b-[3px] text-white pb-5 pl-0 ml-0 border-[#ffffff] p-5">{title}</h4>
      <p className="text-white " >
        {paragraph}
      </p>
      <div className="relative flex justify-end w-[100%]">
        <button className="inline-block bg-[#ffb834] px-10 text-[16px] text-center font-medium px-2.5 py-2 m-1  
        border border-gray-400 cursor-pointer rounded-full">Saber mas</button>
      </div>
    </div>
  </div>
}
function Item({ e1, e2 }) {
  return <ScrollAnimation animateIn='flipInX'
    afterAnimatedIn={function afterAnimatedIn(v) {
      var t = "Animate In finished.\n";
      t += 'v.onScreen: ' + v.onScreen + '\n';
      t += 'v.inViewport: ' + v.inViewport;

    }}
    initiallyVisible={true}>
    <div className='flex flex-col justify-center items-center'>
      <span className='text-[30px] font-medium'>{e1}</span>
      <span className='text-center'>{e2}</span>
    </div>
  </ScrollAnimation>
}

function Section({ subtitle, video, gradiente, id, children }) {
  return <section className='relative w-full bg-[#4f8cc5] overflow-x-hidden overflow-hidden' id={id}>

    <video className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>




    <div className={`absolute top-0  w-full min-h-[100vh] object-cover z-10 ${gradiente}`} ></div>
    <div className='relative min-h-screen w-full flex flex-col lg:flex-wrap  lg:flex-row lg:justify-center justify-top z-20 '>
      <Subtitle> <h2 className="w-[100vw] text-[white] text-center text-[25px] font-medium">{subtitle}</h2></Subtitle>
      {db.map((i, index) => {
        return <div className='inline px-5' key={index}>
          <Componente title={i.title} image={i.image} paragraph={i.paragraph} />
        </div>
      })}

      <div className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#2A52BE] via-[#3259c5] to-[#2A52BE]'>
        <div>

          <Subtitle><h3 className='text-[30px] text-[white] text-center font-medium  py-10'>Transporte terrestre</h3></Subtitle>
          <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'
            initiallyVisible={true}
          >
            <p className=' text-[16px] text-[white]'>
            Nuestro servicio de transporte terrestre nacional e internacional se caracteriza por ser adaptable de acuerdo a su negocio, realizamos transportes locales, interdepartamentales e internacionales en las modalidades ftl (full-truckload) y ltl (less-than-truckload), para carga general, refrigerada, maquinarias y mercancías peligrosas.
            </p>
          </ScrollAnimation>
        </div>
        <div className='w-full text-[white] grid grid-cols-2 gap-5 py-12'>

          <Item e1={'1 a 2tn'} e2={'Camionetas'} />
          <Item e1={'hasta 20tn'} e2={'Camiones'} />
          <Item e1={'La paz, Bolivia'} e2={'SEDE MUNDIAL'} />
          <Item e1={'100 000 $'} e2={'FACTURACIÓN EN DOLARES EN 2023'} />
          <Item e1={'2017'} e2={'AÑO DE FUNDACIÓN'} />

        </div>

      </div>

    </div>

  </section>

}


export default function Home() {
  const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()
  const AutoplaySlider = withAutoplay(AwesomeSlider);


  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    email.length !== 0 && password.length !== 0 ? signInWithEmail(email, password, setUserSuccess) : setUserSuccess('Complete')
  }






  useEffect(() => {
    // user === undefined && onAuth(setUserProfile)
    // if (user !== undefined && user !== null) router.replace('/Cliente')
  }, [user])

  return (
    <main className="h-screen w-screen ">




      <section className=' '>


        <video className='fixed bottom-0 w-full h-[100vh] pb-[10px] object-cover object-bottom ' autoPlay loop muted>
          <source src={"/vista1-comp.mp4"} type="video/mp4" />
        </video>

        <div className='absolute top-0  w-full h-[100vh] object-cover z-10 bg-[#1969ff67]'></div>


        <div className='relative min-h-[100vh] py-[50px] w-full lg:pt-10 pb-0 flex flex-col justify-around lg:flex-row items-center  z-20' style={{ background: '-gradient(to bottom, #000000,  #000000c7, #00000050' }}>



          <img src='/logo-comp.gif' className='inline-block w-[80vw] h-[80vw]  lg:flex justify-center items-end lg:w-[40vw] lg:h-[70vh]  object-cover object-center ' />



          <div className='lg:scale-150'>
            <div className=' flex justify-center  font-bold'>
              <TextMaquina />
            </div>


            <div className='bg-transparent flex justify-center flex-wrap px-5 max-w-[400px] py-10 pb-[200px] lg:pb-0'>
              <ScrollAnimation
                animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'><a href="#terrestre">Transporte Terrestre</a> </Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'><a href="#maritimo">Transporte Maritimo</a> </Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'><a href="#aereo">Transporte Aereo</a> </Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'><a href="#terrestre">Despacho Aduanero</a> </Tag>
              </ScrollAnimation>
              <ScrollAnimation animateIn='tada'
                initiallyVisible={true}>
                <Tag theme='Primary'><a href="#terrestre">Carga Proyecto</a> </Tag>
              </ScrollAnimation>
            </div>
          </div>




        </div>

      </section>

      <section className='w-full z-1000 overflow-x-hidden' id="Servicios">

        <div className='relative px-5 py-12 w-full flex flex-col  lg:flex-row justify-around items-center  bg-gradient-to-tr from-[#2A52BE] via-[#3259c5] to-[#2A52BE]'>
          <div>

            <Subtitle><h3 className='text-[30px] text-[white] text-center font-medium  py-5'>Logistics Gear</h3></Subtitle>
            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'
              initiallyVisible={true}
            >
              <p className=' text-[16px] text-[white]'>
              Establecida en 2017 y operando bajo la razón social Engranaje de la Logística Ltda., se especializa en ofrecer soluciones integrales de logística y transporte de carga. Nuestra experticia abarca desde la gestión de importaciones y exportaciones hasta el transporte de cargas de proyecto. Estamos especialmente capacitados en el manejo de cargas de grandes volúmenes, pesadas y sobredimensionadas. Nuestra filosofía se centra en la integración eficiente de los procesos logísticos, lo que nos permite optimizar el flujo de trabajo y reducir costos, asegurando que su negocio avance con eficiencia y confiabilidad.
              </p>
            </ScrollAnimation>

          </div>
          <div className='w-full text-[white] grid grid-cols-2 gap-5 py-12'>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>2017</span>
                <span className='text-center'>AÑO DE FUNDACIÓN</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[25px] font-medium'>La paz, Bolivia</span>
                <span className='text-center'>SEDE MUNDIAL</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>100 000 $</span>
                <span className='text-center'>FACTURACIÓN EN DOLARES EN 2023</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='flipInX'
              afterAnimatedIn={function afterAnimatedIn(v) {
                var t = "Animate In finished.\n";
                t += 'v.onScreen: ' + v.onScreen + '\n';
                t += 'v.inViewport: ' + v.inViewport;

              }}
              initiallyVisible={true}>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-[30px] font-medium'>1996</span>
                <span className='text-center'>AÑO DE FUNDACIÓN</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <Section subtitle='TRANSPORTE TERRESTRE' video='/highway2.mp4' degrade='#00000067' id="terrestre"></Section>
      <Section subtitle='TRANSPORTE AEREO' video='/avion.mp4' degrade='#00000018' id="aereo"></Section>
      <Section subtitle='TRANSPORTE MARITIMO' video='/barco.mp4' degrade='#00529657' id="maritimo"></Section>


      {/* </AwesomeSlider> */}

    </main>

  )
}




// <div className='w-screen h-screen bg-gradient-to-t from-[#00061860] to-[#000618d1] flex flex-col justify-center items-center p-5 z-[50]'>
//   <div className={`space-y-6 lg:space-y-3 w-[100%] rounded-[30px] max-w-[350px]`} >
//     <div className='w-full text-center flex justify-center'>
//       <img src="/logo.svg" className='w-[300px] z-[30]' alt="User" />
//     </div>
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Nosotros</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <br />
//     <h5 className="text-[22px] text-center font-bold text-white text-[#F1BA06] z-[50]">Por que nosotros?</h5>
//     <br />

//     <div className='text-center text-white text-[14px]'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi omnis modi nihil ducimus. Voluptatum nisi facilis quam omnis ducimus, tenetur ullam minus quod nostrum maxime deserunt dolores veniam sapiente ad.
//     </div>
//     <Button type="submit" theme="Primary" click={() => router.push('/Login')}>Iniciar Sesión</Button>
//   </div>

// </div>
