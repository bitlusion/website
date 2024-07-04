import Link from "next/link";
import Image from 'next/image'
import "./navbar.css";

export const items = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    },
    {
        name: 'About',
        link: '/about-us'
    },
]

export default function Navbar() {
    return(
        <nav className="center-flex">
            <button className="hamburger-menu"> <Image className="icon" src="/icons/hamburger-menu-white.svg" alt="Hamburger Menu" width={30} height={30} /> </button>
            <span className="logo"></span>

            <div className="items">
                { items.map((item, index) => ( <Link href={item.link} key={index} className="">{item.name}</Link> )) }
            </div>
            
            <Image className="icon" src="/icons/profile-white.svg" alt="Account" width={30} height={30} />
        </nav>
    )
}