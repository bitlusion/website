import Image from "next/image"

import cover from "../../../../public/links-cover.png"
import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bitlusion - links",
};

const links = [
    {
        title: "Website",
        image: "",
        link: "/",
        newTab: false
    },
    {
        title: "Instagram",
        image: "",
        link: "https://www.instagram.com/bitlusion/",
        newTab: true
    },
    {
        title: "YouTube",
        image: "",
        link: "https://www.youtube.com/@bitlusion",
        newTab: true
    }
]

export default function Links() {
    return (
        <div className="w-full flex">
            <div className="relative bg-[#0d0d0d] overflow-hidden w-2/3 max-h-screen flex justify-center items-center max-xl:hidden">
                <Image src={cover} alt="cover logo image" className="w-auto max-h-full" />
            </div>

            {/* Box Content */}
            <div className="w-1/3 max-h-screen overflow-auto max-xl:w-full">
                <div className="max-w-full mx-auto w-[450px] p-7">
                    <div className="header">
                        <h1 className="text-5xl font-bold text-center mb-7">Bitlusion.<span className="text-2xl font-normal">LINKS</span></h1>
                    </div>
                    <div className="content">
                        <ul className="links">
                            {
                                links.map((card, index) => {
                                    return (
                                        <li className="bg-[#0d0d0d] relative overflow-hidden h-[110px] flex justify-center items-center mb-5" key={index}>
                                            <Link href={card.link} target={card.newTab ? "_blank" : "_self"} className="absolute w-full h-full bg-black bg-opacity-25 hover:bg-opacity-100 block z-10 border transition-all duration-200 ease-in-out border-solid border-[#d9d9d9]"></Link>
                                            {card.image != "" ? <Image src={card.image} alt="Cover card" className="absolute w-full items-center" /> : null}
                                            <span className="text-white flex justify-center items-center absolute w-full h-full text-xl font-medium bg-transparent z-30 pointer-events-none left-0 top-0">{card.title}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="text-gray-500 text-xs">
                        <span>Copyright © <span id="year">2024</span> Bitlusion. Tutti i diritti riservati. <Link href="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}