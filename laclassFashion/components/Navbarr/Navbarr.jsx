"use client"
import React,{useEffect, useState} from "react";
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import SignIn from "../SignIn/SignIn";

/* import { Avatar } from 'flowbite-react'; */

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)

    const [fix,setFix]=useState(false)
    useEffect(() => {
        const setFixed = () => {
            if (window.scrollY >= 90) {
                setFix(true);
            } else {
                setFix(false);
            }
        };

        window.addEventListener('scroll', setFixed);
        return () => {
            window.removeEventListener('scroll', setFixed);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    let Links =[
        {name:"Accueil",link:"/"},
        {name:"Services",link:"/services"},
        {name:"Boutique",link:"/boutique"},
        {name:"A propos",link:"/about"},
        {name:"Contact",link:"/contact"},
    ]
    const toggleMenu = () => {
    console.log("Toggle menu called");
    setMenuOpen(!menuOpen);
    };
  return (
    <>
       <div className={fix ? `bg-slate-900 fixed w-full z-30` : `fixed w-full z-30`}>
       <div className="flex h-16 relative items-center justify-around w-full">
            <div className=''>
               <Link href="/">
                    <Image
                            alt="logo"
                            src="/Logo/laclassFashion.png"
                            className="h-28 w-32"
                            height={900}
                            width={900} />
               </Link>
            </div>
            <div className=''>
                <ul className={`flex text-white bg-slate-900 opacity-95 lg:bg-transparent  flex-col absolute left-0 z-[10] lg:static lg:flex-row items-center lg:justify-around w-full transition-all duration-500 ease-in  ${menuOpen? 'top-16 opacity-100':'top-[-490px] lg:opacity-100 opacity-0'}`}  >
                    {
                        Links.map((link)=>(
                            <li key={link.name} className={`mx-4 lg:my-0 my-4 text-xl`} >
                                <a href={link.link} className=" hover:text-slate-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-center'>
               <button className="text-black bg-white text-xs border me-10 md:me-0 p-2 rounded-md hover:bg-white hover:text-[#2C2C2C]" onClick={()=>setShowModal(true)}>Connexion</button>
               <button className="text-white text-xs border ms-4 me-10 md:me-0 p-2 rounded-md hover:bg-white hover:text-[#2C2C2C]" onClick={()=>setShowModal(true)}>Créer un compte</button>
               {showModal && createPortal(<SignIn closeModal={()=>setShowModal(false)} />,document.body)}
                <div onClick={()=>setMenuOpen(!menuOpen)} className="ms-4 text-white text-3xl absolute right-6 top-4 cursor-pointer lg:hidden ">
                    <Icon icon={menuOpen? "iconamoon:close-duotone":"iconamoon:menu-burger-horizontal"} />
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Navbar