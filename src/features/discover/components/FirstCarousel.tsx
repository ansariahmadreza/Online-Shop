"use client"
import Container from "@/app/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import img1 from "../assets/First-Carousel/car1.avif";
import img2 from "../assets/First-Carousel/car2.avif";
import img3 from "../assets/First-Carousel/car3.avif";
import img4 from "../assets/First-Carousel/car4.avif";
import img5 from "../assets/First-Carousel/car5.avif";
import img6 from "../assets/First-Carousel/car6.avif";
import img7 from "../assets/First-Carousel/car7.avif";
import img8 from "../assets/First-Carousel/car8.avif";
import img9 from "../assets/First-Carousel/car9.avif";
import img10 from "../assets/First-Carousel/car10.avif";
import img11 from "../assets/First-Carousel/car11.avif";
import img12 from "../assets/First-Carousel/car12.avif";
import img13 from "../assets/First-Carousel/car13.avif";
import img14 from "../assets/First-Carousel/car14.avif";
import img15 from "../assets/First-Carousel/car15.avif";
import img16 from "../assets/First-Carousel/car16.avif";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import HomeSection from "./HomeSection";

const FirstCoursel = () => {
    const arryImg = [
        { id: 1, image: img1, Description: "ASOS DESIGN volume oversized boucle shirt in beige", Price: "£26.50" },
        { id: 2, image: img2, Description: "ASOS DESIGN smart pleated wide leg trousers in pebble texture", Price: "£35.00" },
        { id: 3, image: img3, Description: "ASOS DESIGN co-ord textured overshirt with wool in beige", Price: "£40.00" },
        { id: 4, image: img4, Description: "ASOS DESIGN co-ord tapered trouser with wool in beige", Price: "£40.00" },
        { id: 5, image: img5, Description: "ASOS DESIGN oversized bomber jacket with funnal neck in brown", Price: "£48.00" },
        { id: 6, image: img6, Description: "Rebel relaxed fit fluffy crew neck jumper in beige", Price: "£25.00" },
        { id: 7, image: img7, Description: "ASOS DESIGN harrington jacket in rust", Price: "£44.00" },
        { id: 8, image: img8, Description: "ASOS DESIGN straight carge trousers in black", Price: "£35.00" },
        { id: 9, image: img9, Description: "ASOS DESIGN straight carge trousers in black", Price: "£35.00 " },
        { id: 10, image: img10, Description: " Mango wool mix tailored coat in tan", Price: "£25.00" },
        { id: 11, image: img11, Description: " Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£75.00" },
        { id: 12, image: img12, Description: " Mango wool mix tailored coat in tan", Price: "£149.99" },
        { id: 13, image: img13, Description: " Abercrombie & Fitch oversized logo cardigan in navy", Price: "£75.00" },
        { id: 14, image: img14, Description: "ASOS DESIGN straight cargo trousers in black", Price: "£35.00" },
        { id: 15, image: img15, Description: "Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£45.00" },
        { id: 16, image: img16, Description: "ASOS DESIGN oversized button polo with pocket in khaki", Price: "£24.00" }
    ]
    return (
        <div>
            <Container>
                <section className="relative mt-12">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        centeredSlides={false}
                        slidesPerGroup={4}
                        slidesPerView={4}
                        pagination={{
                            clickable: true,
                            el: ".custom-class",
                            enabled: true
                        }}
                        navigation={{
                            prevEl: ".left-btn",
                            nextEl: ".Right-btn",
                            enabled: true
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            640: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                        }}
                    >
                        {arryImg.map((item) =>
                            <SwiperSlide key={item.id} className="w-full h-auto">
                                <article className="group cursor-pointer">
                                    <div className="overflow-hidden">
                                        <Image src={item.image} alt="img"
                                            className="w-full h-auto object-cover group-hover:scale-105
                                             transition-transform duration-300" />
                                    </div>

                                    <div className="mt-3 px-1">
                                        <p className="text-sm md:text-base line-clamp-2 text-neutral-700">{item.Description}</p>
                                        <span className="mt-2 block font-semibold text-neutral-950">{item.Price}</span>
                                    </div>
                                </article>
                            </SwiperSlide>
                        )}
                        {/*  صفحه بندی تصاویر */}
                        <div className="custom-class mt-8 flex justify-center"></div>
                    </Swiper>
                    <div>
                        {/* فلش سمت چپ */}
                        <section>
                            <button className="left-btn absolute  max-lg:hidden max-xl:top-[25%] top-[30%] z-50 group-hover w-[30px] h-auto ">
                                <AiOutlineLeft className="cursor-pointer mt-3 text-neutral-500 hover:text-neutral-950  text-[55px]" />
                            </button>
                        </section>
                        {/* فلش سمت راست*/}
                        <section className="flex justify-end">
                            <button className="Right-btn absolute max-lg:hidden max-xl:top-[25%] top-[30%] z-50 group-hover w-[30px] h-[30px]">
                                <AiOutlineRight className="cursor-pointer pl-[25px] ml-[-45px] text-[80px] text-neutral-500 hover:text-neutral-950" />
                            </button>
                        </section>
                    </div>
                </section>
            </Container>
            <HomeSection />
        </div>
    )
};
export default FirstCoursel;