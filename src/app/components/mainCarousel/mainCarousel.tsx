import Link from "next/link";
import Image from 'next/image'
import "./mainCarousel.css";


export default function MainCarousel() {
    return(
        <div className="carousel-container center-flex">
            <div className="carousel center-flex">
                <div className="text center-grid">
                    <h1> Bitlusion </h1>
                    <button> Read More </button>
                </div>
            </div>
        </div>
    )
}