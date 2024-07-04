"use client";
import Link from "next/link";
import Image from 'next/image'
import "./footer.css";

export const items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/test'
    },
    {
        name: 'About',
        link: '/about-us'
    },
]

export const social = [
    {
        name: "instagram",
        link: "https://www.instagram.com/bitlusion"
    },
    {
        name: "youtube",
        link: "https://www.youtube.com/@bitlusion"
    },
    /* {
        name: "x",
        link: ""
    }, */
]

export default function Footer() {
    return(
        <footer className="center-flex column">
            <div className="upper row">
                <div className="items">
                    { items.map((item, index) => ( <Link href={item.link} key={index} className="">{item.name}</Link> )) }
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</button>
            </div>
            <hr />
            <div className="bottom center-flex row">
                <p> All Copyright Reserved © 2024 | <a href="/"> Bitlusion </a> </p>
                <div className="social-icons">
                    { social.map((item, index) => (
                        <Link href={item.link} key={index} className="icon">
                            <Image className="icon" src={`/icons/social/${item.name}-light.svg`} alt={item.name.toUpperCase()} width={25} height={25} />        
                        </Link>
                    )) }
                </div>
            </div>
        </footer>
    )
}