"use client"
import { MoveUp } from 'lucide-react';
import { MoveDown } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { allImg, useCartContext } from '@/shared';
import slugify from "slugify";
import Container from "@/app/Container";
import UseLocalStorage from './UseLocalStorage';
import Sort from '../sort/Sort';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Slider } from "radix-ui";

type filtersType = {
    id: number;
    imgBef: StaticImageData;
    imgAf: StaticImageData;
    discountRate: string;
    img_array: {
        id: number;
        img: StaticImageData;
    }[];
    slug: string;
    QtyProduct: {
        id: number;
        qty: number;
        size: string;
    }[];
    description: string;
    price: string;

}[]

const Clothes = () => {
    const { setFlagSort, flagSort } = useCartContext()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [minFilter, setMinFilter] = useState<number>(20)
    const [maxFilter, setMaxFilter] = useState<number>(45)
    const [flagFilter, setFlagFilter] = useState<boolean>(false)
    const [resultFilters, setResultFilters] = useState<filtersType | undefined>()


    ///paginate
    const page = 2 ///all pages
    const rows_per_page = Math.ceil(allImg.length / page)  ///calculate the number of items that should be displayed per page.
    const endIndex = rows_per_page * currentPage //the endpoint for displaying products on each page
    const startIndex = endIndex - rows_per_page //product display start point on each page
    const currentItemsSort = allImg.slice(startIndex, endIndex) //product information displayed on each page
    const totalPage = Math.ceil(allImg.length / rows_per_page)
    const pageNumbers = []

    for (let i = 1; i <= totalPage; i++) { //loop for iterating through page counts and  adding them to an array.
        pageNumbers.push(i)
    }

    ///filter
    const handlerRangeFilter = (value: number[]) => {
        value.forEach((element, index) => {
            index === 0 ? setMinFilter(element) : setMaxFilter(element);
        })
    }

    const handlerFilterPrice = () => {
        const itemFilters = allImg.filter(item => {
            const Price = parseInt(item.price.split("£")[1].trim()) //extracts the price from the string,
            // removes extraneous symbols and whitespace,and parses it into an integer.
            return Price >= minFilter && Price <= maxFilter
        });
        setResultFilters(itemFilters)
    }
    return (
        <div>
            <div className={`${flagSort ? "relative" : "hidden"} `}>
                <Sort />
            </div>

            {/* Filter */}
            <section className={`${flagFilter ? "relative" : "hidden"} `}>

                <div className={` absolute left-0  bg-white shadow-2xl transition h-[650px] w-[300px] delay-300 z-10000 `}>
                    <X onClick={() => { setFlagFilter(false) }} className="cursor-pointer float-right" />
                    <h1 className='font-black text-center'>Filter</h1>
                    {/* filterPrice */}

                    <section className='mt-20 flex-col justify-center items-center'>
                        <div className='flex justify-between mx-12 mb-5'>
                            <p>£{minFilter}</p>
                            <p>£{maxFilter}</p>
                        </div>
                        <form className='flex justify-center'>
                            <Slider.Root
                                className="relative flex h-5 w-[200px] touch-none select-none items-center"
                                defaultValue={[20, 45]}
                                max={45}
                                min={20}
                                step={1}
                                minStepsBetweenThumbs={1}
                                onValueChange={(value) => handlerRangeFilter(value)}
                            >
                                <Slider.Track className="relative h-[3px] grow rounded-full bg-blackA7">
                                    <Slider.Range className="absolute h-full rounded-full bg-black" />
                                </Slider.Track>

                                <Slider.Thumb
                                    className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px]
                                     shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                                    aria-label="Volume"
                                />

                                <Slider.Thumb
                                    className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px]
                                     shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                                    aria-label="Volume"
                                />
                            </Slider.Root>
                        </form>
                    </section>


                    <section className='w-full mt-20 flex justify-center items-center'>
                        <button onClick={() => { location.reload() }} className='bg-white  w-[45%] mx-1 cursor-pointer
                         border-black border-2 text-black py-2.5 px-2 '>Clear</button>

                        <button className="bg-[#2d2d2d] hover:bg-black 
                             text-white w-[45%] py-3 px-2 mx-1 cursor-pointer" onClick={() => { handlerFilterPrice() }}>VIEW ITEMS</button>
                    </section>
                </div>

            </section>
            <Container>
                <section className='w-full'>
                    <h1 className="font-bold mt-7 text-[25px]">Selling fast</h1>
                    <section className="mt-20">
                        <div className="flex w-full justify-between items-center">
                            <div>
                                <button className=" cursor-pointer h-10 w-[110px] border border-neutral-300" onClick={() => { setFlagSort(true) }}>
                                    <span className="text-neutral-600 pl-2 float-left">Sort</span>
                                    <span className='float-right'>
                                        <MoveUp className="inline-block text-2xl h-[25px] mr-[-15px] font-extrabold " />
                                        <MoveDown className="inline-block text-2xl h-[25px] font-extrabold " />
                                    </span>
                                </button>

                                <button className="cursor-pointer h-10 w-[110px] border border-neutral-300 ml-2" onClick={() => { setFlagFilter(true) }}>
                                    <span className="text-neutral-600 pl-2 float-left">Fillter</span>
                                    <span className='float-right pr-2'>
                                        <SlidersHorizontal className="inline-block" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <section className="mt-5 w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {(resultFilters ? resultFilters : currentItemsSort).map((item) => (
                                <div
                                    key={item.id}
                                    className="group w-full flex flex-col"
                                >
                                    <Link
                                        href={`/clothes/${slugify(item.slug, { lower: true, strict: true })}`}
                                        className="relative w-full h-[380px] overflow-hidden"
                                    >
                                        <Image
                                            src={item.imgBef}
                                            alt="img before"
                                            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                                        />
                                        <Image
                                            src={item.imgAf}
                                            alt="img after"
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        <span className="absolute top-2 max-sm:hidden left-2 text-rose-500 text-[12px] bg-white px-2 py-1 rounded">
                                            {item.discountRate}
                                        </span>
                                    </Link>


                                    <section className='relative'>
                                        <div className=' absolute right-2 top-[-200px] bottom-40 z-999'>
                                            <UseLocalStorage id={item.id} />
                                        </div>
                                        <section >
                                            <p className="text-black text-[12px] line-clamp-2">
                                                {item.description}
                                            </p>

                                            <span className="text-[13px] font-bold text-black">
                                                {item.price}
                                            </span>
                                        </section>

                                    </section>
                                </div>
                            ))}
                        </section>

                        <div className='flex justify-center items-center'>
                            {!resultFilters && pageNumbers.map((pageNumber) => (
                                <button key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`cursor-pointer border rounded-md px-3 mx-2 py-1  mt-[100px]
                                ${currentPage === pageNumber ? 'bg-neutral-400 text-black' : 'hover:bg-gray-400 hover:text-white'}`}>
                                    {pageNumber}
                                </button>
                            ))}
                        </div>

                    </section >
                </section>
            </Container>
        </div >
    )
}
export default Clothes;