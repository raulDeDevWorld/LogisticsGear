'use client'
import { useUser } from '@/context/Context'

import { useState } from 'react'
import { handleSignOut } from '@/firebase/utils'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BottomNavigation from '@/components/BottomNavigation'
import Navbar from '@/components/Navbar'

function Home({ children }) {
  const router = useRouter()
  const { user, userDB, setUserProfile, setUserCart, setUserProduct, setRecetaDB, setUserDistributorPDB, setUserData, filter, setFilter, nav, setNav, modal, setModal, cart } = useUser()
  const pathname = usePathname()


  console.log(pathname)



  const redirectHandler = (ref) => {
    router.push(ref)
  }

  const handlerFilter = (e) => {
    const data = e.target.value
    setFilter(data)
  }
  const back = () => {
    router.back()
  }
  function openNav(e) {
    e.preventDefault()
    e.stopPropagation()
    setNav(!nav)
  }

  const handleSignOutConfirm = () => {
    setUserProfile(null)
    setUserCart({})
    setUserProduct(undefined),
      setRecetaDB(undefined),
      setUserDistributorPDB(undefined)
    setUserData(null)
    router.push('/')
    setModal('')
    handleSignOut()
  }
  console.log(user)
  console.log(userDB)

  return (
    <div className="relative">
      <main className={`relative min-w-screen  lg:pb-0  lg:min-w-auto my-[0px]   lg:min-h-screen  ${nav ? 'w-screen pl-[100vw]  ' : '  lg:px-[0px]'}`} onClick={() => setNav(false)} style={{ transition: 'all 0.5' }}>
        {children}
          <BottomNavigation/>
      </main>
    </div>
  )
}

export default Home

