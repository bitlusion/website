import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="bg-black">
            <Header />

            <div className="text-white py-20 text-center">
                <h1 className="text-h2">About us</h1>
                <p className="mt-4 font-medium">An impossible mission? Maybe. We’re all-in on finding out.</p>
            </div>



            <div className="container max-w-6xl mx-auto px-2 flex flex-col gap-32 max-md:gap-24">
                <div className="bg-neutral-900 text-white flex max-md:flex-col-reverse overflow-hidden rounded-xl">
                    <div className="w-1/2 max-md:w-full p-12">
                        <h2 className="text-h6 mb-6">Title</h2>
                        <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet et dolores asperiores iusto eaque sed maiores sint placeat? Natus, exercitationem odit dolores doloribus recusandae eveniet impedit ullam laboriosam et sapiente.</p>
                        <Link href={""} className="inline-flex gap-1 hover:gap-2 py-1 border-b border-b-transparent hover:border-b-white transition-all text-sm">
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" viewBox="0 0 14 8" fill="none" className="-rotate-90"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z" fill="currentColor"></path></svg>
                        </Link>
                    </div>
                    <div className="w-1/2 max-md:w-full relative">
                        <Image
                            src={"/cover.jpg"}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className="bg-neutral-900 text-white rounded-xl flex flex-col items-center justify-center py-12 md:py-28">
                    <h2 className="text-h6 max-md:text-lg mb-8">Join us in shaping the future of technology</h2>
                    <button className="bg-white text-black px-4 py-2 rounded-full cursor-pointer">View careers</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}