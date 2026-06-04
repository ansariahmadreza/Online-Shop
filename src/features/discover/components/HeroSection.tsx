import Image from "next/image";
import Container from "@/app/(main)/Container";
import FirstCarousel from "./FirstCarousel";
import Image1 from "../assets/Banner.avif";
import Link from "next/link";
import { routes } from "@/shared";

const HeroSection = () => {
    return (
        <section className="flex justify-center items-center flex-col">
            <figure className="w-full">
                <Image src={Image1} height={600}
                    className="mt-4 sm:mt-6 md:mt-8 object-cover w-full h-auto" alt="Baner" />
            </figure>
            <Container>
                <section className="flex flex-col sm:flex-row
                sm:justify-between sm:items-center gap-4 mt-6 px-2
                text-center sm:text-left w-full">
                    <h2 className="font-extrabold text-xl sm:text-2xlmd:text-3xl">Heritage looks</h2>

                    <Link href={routes.Product.Clothes} target="_blank" rel="noopener noreferrer">
                        <button className="bg-black text-white py-2 px-20  cursor-pointer">
                            Show Products
                        </button>
                    </Link>
                </section>
            </Container>
            <div className="w-full mt-6">
                <FirstCarousel />
            </div>

        </section>
    )
};

export default HeroSection;