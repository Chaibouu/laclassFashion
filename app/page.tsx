// Update your page.tsx to include the Contact component

"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Links } from "@/settings/navigation";
import Navbar from "@/components/Navbar";
import NosStat from "@/components/main/NosStat/NosStat";
import About from "@/components/main/About/About";
import Services from "@/components/main/Service";
import Boutique from "@/components/main/Boutique";
import Realisations from "@/components/main/Realisations";
import Contact from "@/components/main/Contact";

export default function Home() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    
  return (
    <>
        <Navbar Links={Links}/>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full relative bg-[url('/Header/texture.jpg')] bg-cover bg-no-repeat h-[100vh]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85"></div>
            <div className="relative z-[10] h-full flex xl:ms-[150px] items-center lg:justify-start justify-center">
                <Image
                src="/Logo/laclassFashion.png"
                alt="Laclass Fashion Couture"
                height={2000}
                width={2000}
                className="w-[600px] bg-red-60 ms-[-60px] hidden lg:block" />
                <div className="text-white text-center">
                  <h1 className="md:text-7xl text-5xl font-fraunce">Votre Style</h1>
                  <h4 className="md:text-6xl text-4xl font-fraunce">Notre Passion</h4>
                  <p className="md:text-xl md:mt-5 p-2 font-fraunce">Exprimez-vous avec distinction grâce à LaClasse Fashion</p>
                  <div className="md:mt-8 flex flex-col md:flex-row items-center justify-center">
                    <Link href="/devis" className="border rounded md:m-0 m-4 p-2 bg-white text-black mx-2 hover:bg-slate-500 hover:text-black hover:border-0">
                        <button>Demander un devis</button>
                    </Link>
                    <Link href="/signIn" className="border rounded p-2 mx-2 hover:bg-slate-500 hover:text-black hover:border-0">
                        <button>Rejoignez-Nous !</button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          <div className="">
              <NosStat />
          </div>
          <div className="container my-8 ">
              <About />
              {/* <Loader /> */}
          </div>
          <div className="container my-8 ">
              <Services />
          </div>
          <div className="w-full">
              <Realisations />
          </div>
          <div className="container my-8 ">
              <Boutique />
          </div>
          <div className="w-full">
              <Contact />
          </div>
          <div className="mt-16 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Demandez un devis personnalisé et notre équipe vous répondra dans les plus brefs délais.
            </p>
            <Link href="/devis" className="inline-flex items-center justify-center bg-PrimaryCol hover:bg-PrimaryCol/90 text-white py-3 px-8 rounded-lg transition duration-300 shadow-md">
              <span>Demander un devis</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
    </>
  );
}
 