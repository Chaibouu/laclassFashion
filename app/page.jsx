"use client"
import React, { useEffect } from "react";
import Navbar from "@/components/Navbarr/Navbarr";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import NosStat from "@/components/NosStat/NosStat";

export default function Home() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
        <Navbar/>
        <div className="">
          <div className=" relative bg-[url('/Header/texture.jpg')] bg-cover bg-no-repeat h-[90vh]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
            <div className="relative z-[10] h-full flex bg-blue-60 ms-[150px] items-center">
                <Image
                src="/Logo/laclassFashion.png"
                alt="Laclass Fashion Couture"
                height={2000}
                width={2000}
                className="w-[600px] bg-red-60 ms-[-60px]" />
                <div className="text-white text-center">
                  <h1 className="text-7xl">Votre Style</h1>
                  <h4 className="text-6xl">Notre Passion</h4>
                  <p className="text-lg mt-5">Exprimez-vous avec distinction grâce à LaClasse Fashion</p>
                  <div className="mt-8">
                    <Link href="/signIn" className="border rounded p-2 bg-white text-black mx-2 hover:bg-slate-500 hover:text-black">
                        <button>Reserve une couture</button>
                    </Link>
                    <Link href="/signIn" className="border rounded p-2 mx-2">
                        <button>Rejoignez-Nous !</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          <div className="container">
              <NosStat />
          </div>
        </div>
    </>
  );
}
