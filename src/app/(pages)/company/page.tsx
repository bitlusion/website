import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import "./page.css";

export default function Company(){
    return (
        <div className="">
            <Navbar />

            <div className="hero center-flex column">
                <h1>
                    Work as one. <br />
                    Or one thousand.
                </h1>
                <p> Bitlusion is an app research and deployment company. Our mission is to ensure that tecnology benefits all of humanity. </p>
            </div>

            <div className="cover"></div>

            <div className="cards-container center-flex column">
                <div className="card row">
                    <div className="left center-flex column">
                        <h2> Our Vision </h2>
                        <p> Our mission is to ensure that tecnology benefits all of humanity. </p>
                        <button className="cta center-flex"> Read our plan <Image className="icon" src="/icons/chevron-light-gray.svg" alt="chevron" width={15} height={15} /> </button>
                    </div>
                    <span className="image"></span>
                </div>

                <div className="card center-flex">
                    <div className="text center-grid">
                        <h3> Join us in shaping the future of technology </h3>
                        <button> View Careers </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}