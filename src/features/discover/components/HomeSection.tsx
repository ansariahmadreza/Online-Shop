import Container from "@/app/(main)/Container";
import Image from "next/image";
import Shop from "../assets/shop.avif";
import banner1 from "../assets/banner1.avif";
import banner2 from "../assets/banner2.avif";
import banner3 from "../assets/banner3.avif";
import banner4 from "../assets/banner4.avif";
import TwoCarousel from "./TowCarousel";

const HomeSection = () => {
    return (
        <section className="w-full">
            <div className="max-lg:hidden">
                <Container>
                    <figure className="flex justify-center items-center  mt-[50px]">
                        <Image src={Shop} alt="Shop" height={65} width={2280} />
                    </figure>

                    <div className="flex justify-around cursor-pointer  mt-12">
                        <button className=" w-[200px] h-[50px] cursor-pointer p-3 border-[3px] border-black font-bold">Jackets + Coats</button>
                        <button className=" w-[200px] h-[50px] cursor-pointer p-3 border-[3px] border-black font-bold">Hoodies + Sweats</button>
                        <button className=" w-[200px] h-[50px] cursor-pointer p-3 border-[3px] border-black font-bold">Jumpers + Cardigans</button>
                        <button className=" w-[200px] h-[50px] cursor-pointer p-3 border-[3px] border-black font-bold">Trousers</button>
                    </div>
                </Container>
            </div>
            <section className="w-full mt-[70px]">
                <h1 className="text-center font-bold text-3xl">New in</h1>
                <div className="text-center grid grid-cols-4 max-md:grid-cols-2 items-center justify-center w-full h-auto mt-22 ">
                    <figure>
                        <Image src={banner1} alt="The latest drops" width={600} height={250} />
                        <figcaption className="top-[-39px] bg-black/20 text-white relative font-bold">The latest drops</figcaption>
                    </figure>

                    <figure>
                        <Image src={banner2} alt="Knits" width={600} height={250} />
                        <figcaption className="bg-black/20 text-white relative top-[-39px] font-bold">Knits</figcaption>
                    </figure>

                    <figure>
                        <Image src={banner3} alt="New:Topman" width={600} height={250} />
                        <figcaption className="bg-black/20 text-white relative top-[-39px] font-bold">New:Topman</figcaption>
                    </figure>

                    <figure>
                        <Image src={banner4} alt="Your most hyped" width={600} height={250} />
                        <figcaption className="bg-black/20 text-white relative top-[-39px] font-bold">Your most hyped</figcaption>
                    </figure>
                </div>
            </section>
            <TwoCarousel />
        </section >
    )
};
export default HomeSection;