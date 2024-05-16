'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react'
import { useUser } from '@/context/Context'
import Link from 'next/link'
import { handleSignOut } from '@/firebase/utils'
import Modal from '@/components/Modal'




export default function BottomNavigation({ rol }) {
    const { user, userDB, modal, setModal, setUserProfile, setUserData, setUserProduct, setRecetaDB, setUserCart, setUserDistributorPDB, filter, setFilter, nav, setNav, navItem, setNavItem } = useUser()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const router = useRouter()

    function openNav(e) {
        e.preventDefault()
        e.stopPropagation()
        setNav(!nav)
    }

    function handlerNavItem(item) {
        navItem === item
            ? setNavItem('')
            : setNavItem(item)
    }
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY, show]);
    return <>
        <nav class={`fixed  w-screen  lg:border-gray-200 transition-all  z-40  ${show ? 'top-0' : 'top-[-100px]'}`}>
            <div class="w-screen flex flex-wrap items-center justify-between lg:border-b-[2px] lg:border-gray-50 mx-auto py-4 px-4 lg:px-8">
                <Link href="/" class="flex items-center">
                    <img src="/logo.svg" class="h-[50px] mr-3" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={openNav} aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-screen md:block md:w-auto " id="navbar-default">
                    <ul class="list-none font-medium flex flex-col p-4 md:p-0 mt-0 rounded-lg md:flex-row md:space-x-8  ">
                        <li onClick={() => handlerNavItem('Herramientas')}>
                            <a href="#" className={`block py-2 pl-3 pr-4 text-[14px] rounded   md:border-0  md:p-0   transition-all hover:text-[#F1BA06] cursor-pointer z-30 ${navItem === 'Herramientas' ? 'text-[#F1BA06]' : 'text-white'}`} >Herramientas</a>
                            <div className={`absolute top-[90px] right-[20px] w-[350px]  bg-blue-950  grid grid-cols-2 gap-[20px]  rounded-2xl z-20  overflow-hidden ${navItem === 'Herramientas' ? 'h-auto p-[20px]' : 'h-0 overflow-hidden'}`}>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/TIPOS DE CONTENEDORES.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Contenedores maritimos</span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/TIPOS DE CONTENEDORES.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Contenedores aereos</span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/CALCULADORA DE PESO CARGABLE.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Calculadora de peso cargable  </span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/CALCULADORA DE PESO CARGABLE.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Calculadora de conversiones  </span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/DIRECCION.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Tracking</span>
                                </Link>
                            </div>
                        </li>
                        <li onClick={() => handlerNavItem('Servicios')}>
                            <a href="#" className={`block py-2 pl-3 pr-4 text-[14px] rounded   md:border-0  md:p-0   transition-all hover:text-[#F1BA06] cursor-pointer z-30 ${navItem === 'Servicios' ? 'text-[#F1BA06]' : 'text-white'}`}>Servicios</a>
                            <div className={`absolute top-[90px] right-[20px] w-[350px]  bg-blue-950  grid grid-cols-2 gap-[20px]  rounded-2xl z-20  overflow-hidden ${navItem === 'Servicios' ? 'h-auto p-[20px]' : 'h-0 overflow-hidden'}`}>
                                <Link href='#terrestre' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/TERRESTRE.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Transporte Terrestre</span>
                                </Link>
                                <Link href='#maritimo' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/MARITIMO.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Transporte Maritimo</span>
                                </Link>
                                <Link href='#aereo' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/AEREO.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Transporte Aereo</span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/DESPACHO ADUANERO.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold text-center">Despachos Aduaneros</span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/CARGA REFRIGERADA.png" className="w-[50px]" alt="" />
                                    <span className="text-[12px] font-bold">Cargas Proyecto</span>
                                </Link>
                            </div>
                        </li>
                        <li onClick={() => handlerNavItem('Nosotros')}>
                            <a href="#" className={`block py-2 pl-3 pr-4 text-[14px] rounded   md:border-0  md:p-0   transition-all hover:text-[#F1BA06] cursor-pointer z-30 ${navItem === 'Nosotros' ? 'text-[#F1BA06]' : 'text-white'}`}>Acerca de</a>
                            <div className={`absolute top-[90px] right-[20px] w-[350px]  bg-blue-950  grid grid-cols-2 gap-[20px]  rounded-2xl z-20  overflow-hidden ${navItem === 'Nosotros' ? 'h-auto p-[20px]' : 'h-0 overflow-hidden'}`}>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/NOSOTROS.png" className="w-[50px]" alt="" />
                                    <span>Nosotros</span>
                                </Link>
                                <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                                    <img src="/icons/NOSOTROS.png" className="w-[50px]" alt="" />
                                    <span>Por que nosotros?</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className={`fixed top-0 w-screen lg:w-screen lg:border-r-8 overflow-auto bg-[#2A52BE] h-screen transition-all	z-50  py-[20px] ${nav ? 'left-0  ' : 'left-[-100vw] '} z-50`} >
            <div class="py-4 overflow-y-auto absolute top-[20px] right-[20px]">
                <div className="w-[100%] text-[16px] flex justify-between items-center">
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => setNav(false)}>
                        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#991b1b" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-white text-[16px] font-bold p-5">NOSOTROS</h3>
                <div className='grid grid-cols-2 gap-[20px] p-[20px]'>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/NOSOTROS.png" className="w-[50px]" alt="" />
                        <span>Nosotros</span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/NOSOTROS.png" className="w-[50px]" alt="" />
                        <span>Por que nosotros?</span>
                    </Link>
                </div>
                <h3 className="text-white text-[16px] font-bold p-5">NUESTROS SERVICIOS</h3>
                <div className='grid grid-cols-2 gap-[20px] p-[20px]'>
                    <Link href='#terrestre' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/TERRESTRE.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Transporte Terrestre</span>
                    </Link>
                    <Link href='#maritimo' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/MARITIMO.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Transporte Maritimo</span>
                    </Link>
                    <Link href='#aereo' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/AEREO.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Transporte Aereo</span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/DESPACHO ADUANERO.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Despachos Aduaneros</span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/CARGA REFRIGERADA.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold">Cargas Proyecto</span>
                    </Link>
                </div>
                <h3 className="text-white text-[16px] font-bold p-5">HERRAMIENTAS</h3>
                <div className='grid grid-cols-2 gap-[20px] p-[20px]'>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/TIPOS DE CONTENEDORES.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Contenedores maritimos</span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/TIPOS DE CONTENEDORES.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Contenedores aereos</span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/CALCULADORA DE PESO CARGABLE.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Calculadora de peso cargable  </span>
                    </Link>
                    <Link href='/' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/CALCULADORA DE PESO CARGABLE.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Calculadora de conversiones  </span>
                    </Link>
                    <Link href='/Tracking' className='bg-[#F1BA06] flex flex-col items-center px-[20px] py-[10px] rounded-[20px]'>
                        <img src="/icons/DIRECCION.png" className="w-[50px]" alt="" />
                        <span className="text-[12px] font-bold text-center">Tracking</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
}


