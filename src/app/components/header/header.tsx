import Link from "next/link";

export const items = [
    {
        name: 'Product',
        link: '/test'
    },
    {
        name: 'About',
        link: '/about-us'
    },
]

export default function Header() {
    return (
        <header className="w-full h-[50px] flex items-center relative bg-black bg-opacity-80 backdrop-blur-xl backdrop-saturate-[180%] z-50">
            <div className="container max-w-6xl flex mx-auto px-2">
                <div className="w-1/3">
                    <a href="/" className="flex h-full items-center">
                        <svg className="h-7" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.75147" y="1.82069" width="17.0413" height="11.4556" rx="5.68046" stroke="white" stroke-width="3.50295"/>
                            <rect y="17.1108" width="27.3608" height="14.9585" rx="7.43193" fill="white"/>
                        </svg> 
                    </a>
                </div>
                <div className="w-1/3 flex justify-center max-lg:w-full max-lg:justify-end">
                    {
                        items.map((item, index) => (
                            <Link href={item.link} key={index} className="text-white p-4 font-normal opacity-60 hover:opacity-100 transition-opacity">{item.name}</Link>
                        ))
                    }
                </div>
                <div className="w-1/3 max-lg:hidden"></div>
            </div>
        </header>
    )
}