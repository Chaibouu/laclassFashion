"use client"
import React, { useEffect } from "react";
import Navbar from "@/components/Navbarr/Navbarr";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import NosStat from "@/components/NosStat/NosStat";
import About from "@/components/About/About";
import SignIn from "@/components/SignIn/SignIn";

export default function Home() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    
  return (
    <>
        <Navbar/>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full relative bg-[url('/Header/texture.jpg')] bg-cover bg-no-repeat h-[90vh]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
            <div className="relative z-[10] h-full flex xl:ms-[150px] items-center lg:justify-start justify-center">
                <Image
                src="/Logo/laclassFashion.png"
                alt="Laclass Fashion Couture"
                height={2000}
                width={2000}
                className="w-[600px] bg-red-60 ms-[-60px] hidden lg:block" />
                <div className="text-white text-center">
                  <h1 className="md:text-7xl text-4xl">Votre Style</h1>
                  <h4 className="md:text-6xl text-3xl">Notre Passion</h4>
                  <p className="md:text-lg md:mt-5 p-2">Exprimez-vous avec distinction grâce à LaClasse Fashion</p>
                  <div className="md:mt-8 flex flex-col md:flex-row items-center justify-center">
                    <Link href="/signIn" className="border rounded md:m-0 m-4 p-2 bg-white text-black mx-2 hover:bg-slate-500 hover:text-black hover:border-0">
                        <button>Reserve une couture</button>
                    </Link>
                    <Link href="/signIn" className="border rounded p-2 mx-2 hover:bg-slate-500 hover:text-black hover:border-0">
                        <button>Rejoignez-Nous !</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          <div className="container ">
              <NosStat />
          </div>
          <div className="container ">
              <About />
          </div>
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}add
          {/* commentaire */}
        </div>
    </>
  );
}
