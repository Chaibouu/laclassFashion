// import { Poppins } from "next/font/google";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { LoginButton } from "@/components/auth/login-button";
// import appConfig from "@/settings";
// import Image from "next/image";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"]
// })

// export default function Home() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
//               <Image
//               src={appConfig.logoUrl}
//               height={300}
//               width={300}
//               alt="Sahel Coders"
//               />
//       <div className="space-y-6 text-center">

//         <h1 className={cn(
//           "text-6xl font-semibold text-white drop-shadow-md",
//           font.className,
//         )}>
//           🔐 {appConfig.appName}
//         </h1>
//         <p className="text-white text-lg">
//           {appConfig.websiteDescription}
//         </p>
//         <div>
//           <LoginButton  asChild>
//             <Button variant="secondary" size="lg">
//               Sign in
//             </Button>
//           </LoginButton>
//         </div>
//       </div>
//     </main>
//   )
// }
"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Links } from "@/settings/navigation";
import Navbar from "@/components/Navbar";
// import { Navbar } from "@/components/_components/navbar";


export default function Home() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    
  return (
    <>
        <Navbar Links={Links}/>
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
          {/* <div className="container ">
              <NosStat />
          </div>
          <div className="container ">
              <About />
          </div> */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
          {/* commentaire */}
        </div>
    </>
  );
}
 