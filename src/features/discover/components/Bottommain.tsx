import Image from "next/image";
import imgBrands from "../assets/brand_desktop.avif";
import logo1 from "../assets/logo_carhartt_870x500.avif";
import nike from "../assets/nike.avif";
import logo2 from "../assets/logo_thenorthface_870x500.avif";
import logo_topman from "../assets/logo_topman_870x500.avif";
import logo_allsaints from "../assets/logo_allsaints_870x500.avif";
import logojacket from "../assets/logojackjones870x500.avif";
import Link from "next/link";
import { routes } from "@/shared";


const Bottommain = () => {

    const textArray = [
        "Men's Black Hoodies", "Men's Sweatshirts", "Men's Zipper Hoodies", "Men's Cardigans", "Men's Cardigans", "Men's Cardigans",
        "Men's Jumpers", "Men's Coats", "Men's Jackets", "Men's Baggy Jeans", "Men's Wide-Leg Jeans", "Men's Grey Tracksuits", "Men's Gym Tops",
        "Men's Gym Tops", "Men's Long Sleeve T-Shirts", "Men's Long Sleeve Polos", "Men's Casual Shirts", "Men's Grey Suits", "Men's Navy Suits",
        "Men's Chinos", "Men's Cord Trousers", "Men's Smart Trousers", "Men's Briefs", "Men's Hiking Boots", "Men's Brown Boots", 'Mens Lace-up Boots',
        "Men's Brown Loafers", "Men's Leather Loafers", "Men's Chunky Trainers", "Men's Hi-Top Trainers", "Men's Brown Trainers", "Men's Navy Trainers",
        "Men's Work Shoes", "Men's Belts", "Men's Wallets", "Men's Watches", "Men's Holdalls", "Men's Black Bags", "Men's Shoulder Bags", "Men's Fragrances",
        "Men's Skincare", "Men's Toiletry & Wash Bags", "Men's Styling Tips"
    ]

    return (
        <div className="mt-[100px] flex flex-col justify-center items-center">
            <Link href={routes.notfound} target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white py-2 px-20  cursor-pointer">
                    SHOP NOW
                </button>
            </Link>

            <figure className="w-full h-auto max-md:hidden">
                <Image src={imgBrands} alt="shop-brands" className="my-10" width={2000} height={56} />
            </figure>

            <section className="grid grid-cols-6 max-md:mt-20  max-md:grid-cols-2 max-sm:mx-8  justify-center items-center">
                <figure>
                    <Image src={logo1} alt="logo_carhartt" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={nike} alt="nike" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo2} alt="logo_thenorthface" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo_topman} alt="logo_topman" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo_allsaints} alt="logo_allsaints" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logojacket} alt="logojacket" width={250} height={25} />
                </figure>
            </section>

            <h1 className="my-10 text-2xl font-bold">TOP MEN'S CATEGORIES</h1>
            <nav className="w-full my-5 justify-center gap-y-5  grid grid-cols-4 max-md:grid-cols-1 ">
                {
                    textArray.map((item, index) =>
                        <ul key={index} className="mx-4">
                            <li className="cursor-pointer text-[13px] text-neutral-600 max-md:border-b max-md:border-neutral-200">{item}</li>
                        </ul>
                    )
                }
            </nav>

            <section className="mt-10 flex text-center flex-col justify-center items-center px-4 sm:px-8 lg:px-0 ">
                <h1 className="font-bold text-xl sm:text-2xl ">Wait, there’s more</h1>

                <p className="w-full max-w-[600px] text-sm
                sm:text-base text-neutral-700 my-5 leading-6">
                    Head to the Style Feed to discover the best of ASOS all in one place – from outfit advice and new brand drops to the
                    leading men whose style you're going to rate.
                </p>

                <button className="border-2 mb-10 cursor-pointer font-bold border-black
                px-8 sm:px-10 py-2 hover:bg-black hover:text-white transition">
                    READ NOW
                </button>

                <p className="w-full max-w-4xl text-sm sm:text-base text-center
                 text-neutral-700 leading-6 tracking-wide px-2 sm:px-6 lg:px-10">
                        For milestones, major moments and complete wardrobe overhauls – not to mention every unplanned requirement in-between
                        – ASOS menswear has all bases covered to kit you out in full. From laidback essentials – think men’s joggers, hoodies
                        and shorts – to elevated basics and statement layers, find all the pieces from the brands you rate in one place.
                        Did we mention we really know our brands? Whatever you’re into, our team taps the best edits from the labels that matter
                        . There's Carhartt WIP for your workwear, Fred Perry or Polo Ralph Lauren for preppy silhouettes, or AllSaints for effortless
                        separates and signature graphic tees. If we’re talking footwear, you're a click away from the hottest sneaker drops and exclusive
                        collaborations – from classics like Nike, adidas and New Balance to performance-driven styles by On. And if you're still not sure what
                        to wear? Head to the Style Feed for our editors’ takes on creating an effortless line-up. Let’s go.
                </p>
            </section>
        </div>
    )

};

export default Bottommain;