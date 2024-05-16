'use client'
import { writeUserData, getSpecificData } from '@/firebase/utils'
import { useUser } from '@/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { WithAuth } from '@/HOCs/WithAuth'
import Video from '@/components/Video'


import { useRouter } from 'next/navigation';

function Home() {

    const { user, introVideo, userDB, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    const router = useRouter()

    const [rol, setRol] = useState('Cliente')
    const [ciudad, setCiudad] = useState('La paz')


    const onClickHandler = (name, value) => {
        setRol(value)
    }
    const onClickHandlerCity = (name, value) => {
        setCiudad(value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        // let nombre = e.target[0].value
        // writeUserData('Users', { uuid: user.id, nombre, rol, ciudad }, user.id, user, setUserProfile, setUserSuccess)
router.push('/')

    }


    useEffect(() => {
        console.log(user)
        // if (user && user.rol) router.push('/Cliente')
        // if (user == null || user  == undefined || user.role !== 'authenticated') router.push('/SignUp')

        // if (user && user.rol) getSpecificData('Users', user.uuid, setUserData)
        // if (user && user.rol) router.push('/Cliente')
    }, [user]);

    return (
        <div className="min-h-full "
        style={{
            backgroundImage: 'url(/bg-2.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}>
                   {/* <Video /> */}
      <div className='w-screen h-screen  flex flex-col justify-center items-center'>
      <video className='absolute top-0  w-full min-h-[100vh] object-cover z-10' autoPlay loop muted>
      <source src='underwater.mp4' type="video/mp4" />
    </video> 
        <img src="/truck.png" className='absolute  w-screen h-screen bg-[#01A7EB] object-cover lg:hidden' alt="" />
     

            <form className={`space-y-6 lg:space-y-3  rounded-[30px] w-[100%] max-w-[400px] p-5 h-auto px-5 py-10 lg:p-10 z-10 lg:scale-110`}  onSubmit={registerHandler} >
                <div className='w-full text-center flex justify-center'>
                    <Image src="/logo.svg" width="200" height="200" alt="User" />
                </div>
                <br />
                <div className=' bg-[#00061860] p-5  rounded-[10px] lg:space-y-3'>
                <h5 className="text-[18px] text-center text-white">Registrate</h5>
                <br />                        <div>
                    <label htmlFor="email" className="block mb-2 text-[16px] text-left font-medium text-white">Nombre</label>
                    <Input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-[16px] text-left font-medium text-white">Cargo</label>
                    <Select arr={['Perona regular', 'Empleado', 'Empresario', 'Distribuidor']} name='rol' click={onClickHandler} />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-[16px] text-left  font-medium text-white">Ciudad</label>
                    <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandlerCity} />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <Link href="/Politicas" className="ml-2 text-[14px] font-medium text-gray-100 ">Políticas de Servicio</Link>
                    </div>
                </div>
                <Button type="submit" theme="Transparent">Continuar</Button>
                <br />
                <div className="text-[14px] text-center font-medium text-white dark:text-gray-300">Ya tienes una cuenta? <Link href="/" className="text-gray-100 hover:underline">Inicia Sessión</Link >
                </div>
                </div>
            </form>
            </div>
        </div>
    )
}


export default Home
