import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { items } from '../header/header'
import Link from 'next/link'

const sections = [
    {
        title: 'menù',
        items: items
    }
]

const social = [
    {
        name: 'Instagram',
        icon: FaInstagram,
        link: 'https://www.instagram.com/bitlusion/'
    },
    {
        name: 'YouTube',
        icon: FaYoutube,
        link: 'https://www.youtube.com/@bitlusion'

    }
]

export default function Footer() {
    return (
        <footer className='w-full mt-0 md:mt-12 lg:mt-24 bg-black text-neutral-300 px-2'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-neutral-600 py-8">
                {
                    sections.map((section, index) => (
                        <div key={index}>
                            <h6 className='font-bold uppercase pt-2'>{section.title}</h6>
                            <ul className='flex flex-col'>
                                {
                                    section.items.map((item, i) => (
                                        <a href={item.link} key={i} className='inline-block py-1 text-neutral-500 hover:text-white cursor-pointer'>
                                            {item.name}
                                        </a>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }

                <div className="col-span-2 pt-8 md:pt-2 hidden">    {/*  hidden */}
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The last updates, articles and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Enter email address' className='w-full p-2 mr-4 rounded-md mb-4' disabled />
                        <button className='p-2 mb-4' disabled>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-neutral-500">
                <p className='py-4 text-xs'>
                    Copyright Bitlusion
                </p>

                <div className="flex justify-end sm:w-[300px] pt-4 text-2xl max-sm:justify-center max-sm:p-0">
                    {
                        social.map((item, index) => {
                            return <Link href={item.link} key={index} target='_blank'><item.icon className='p-1 hover:text-white cursor-pointer' /></Link>
                        })
                    }
                </div>
            </div>
        </footer>
    )
}