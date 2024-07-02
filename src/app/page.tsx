import Link from "next/link";
import Image from "next/image";

import cover from "../../public/cover.jpg"

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PrivacyBanner from "./components/privacyBanner/privacyBanner";

import style from './page.module.css'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <PrivacyBanner />
      <Header />

      <div className="mx-auto w-full h-full flex justify-center items-center px-10 py-5 max-md:px-2 max-md:w-fit">
        <Link href={"/about-us"} className={`${style.image} w-full min-h-[600px] max-h-[70vh] max-md:max-h-fit bg-center relative flex justify-center items-center rounded-md overflow-hidden transition-transform duration-200 z-10 hover:scale-[1.006]`}>
          <Image
            src={cover}
            alt="Cover"
            objectFit="cover"
          />
        </Link>
        <div className="w-full h-full absolute flex flex-col gap-2 items-center justify-center z-20 pointer-events-none">
          <h1 className="text-center text-h2">Bitlusion</h1>
          <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer">Learn more</button>
        </div>
        <Image className={`${style.shadow} w-full max-h-[70vh] absolute z-0 opacity-0 transition-all duration-200 delay-75`}
          src={cover}
          alt="Shadow"
        />
      </div> 

      <Footer />
    </main>
  );
}
