"use client";
import { IcartItemsProps } from '@/features/products';
import { allImg } from '@/shared';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import slugify from 'slugify';
import { IoClose } from "react-icons/io5";
import { X } from 'lucide-react';

const suggestions = [
    "jack-and-jones-eddie-loose-worker-jean-in-washed-brown",
    "asos-design-oversized-heavyweight-400gsm-hoodie-with-woven-badge-in-yellow",
    "jack-and-jones-loose-fit-jogger-in-grey-marl-in-scuba-style-fabric",
    "asos-design-cotton-twill-oversized-shirt-with-badge-in-brown",
    "carhartt-wip-clover-baseball-cap-in-white-and-brown",
    "carhartt-wip-adair-canvas-baseball-cap-in-black",
    "asos-design-penny-loafers-in-black-with-weave-detail",
    "asos-design-wool-look-harrington-jacket-in-beige"
]


const SearchItems = () => {

    const [searchResults, setSearchResults] = useState<IcartItemsProps[]>()
    const [searchTerm, setSearchTerm] = useState("")
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
    const [isInputFocused, setIsInputFocused] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const [flagSearch, setFlagSearch] = useState(false)
    const Router = useRouter()

    // جلوگیری از اسکرول در حالت موبایل
    useEffect(() => {
        if (isMobileSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileSearchOpen]);

    // بستن نتایج جستجو با کلیک خارج از باکس
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchResults([]);
                setIsInputFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // جستجو با تأخیر (debounce)
    useEffect(() => {
        const timer = setTimeout(() => {
            const value = searchTerm.trim();
            if (!value) {
                setSearchResults([]);
                return;
            }
            if (/^[A-Za-z]+$/.test(value)) {
                const resultFilter = suggestions.filter(item =>
                    item.toLowerCase().includes(value.toLowerCase())
                );
                const dataFind = allImg.filter(item =>
                    resultFilter.includes(item.slug)
                );
                setSearchResults(dataFind);

            } else {
                setSearchResults([]);
            }
        }, 300);

        return () => clearTimeout(timer);

    }, [searchTerm]);



    const handlerSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleProductClick = () => {
        if (!flagSearch) {
            searchResults!.map(item => {
                Router.push(`/clothes/${slugify(item.slug, { lower: true, strict: true })}`)
                setSearchResults([])
                setSearchTerm("")
                setIsMobileSearchOpen(false)
            })
            setFlagSearch(true)
        } else {
            return (<p>Your Path Was Wrong</p>)
        }
    }

    const clearSearch = () => {
        setSearchTerm("")
        setSearchResults([])
    }

    return (
        <div className='z-50 max-lg:w-full'>
            <section className='max-md:hidden'>
                <div className='ml-10 w-[50vw] h-10 relative'>
                    <label className='bg-white text-[#2d2d2d] flex  justify-center w-[48vw] max-lg:w-[60vw]  rounded-4xl '>
                        <input onChange={(e) => { handlerSearchChange(e) }} type="text"
                            onFocus={() => setIsInputFocused(true)}
                            placeholder="Search for items and brands"
                            value={searchTerm}
                            className="h-[39px] w-[50vw] ml-4 px-4  max-xl:ml-4 outline-0" />
                        {searchTerm && (
                            <button onClick={clearSearch} className="absolute left-3 top-1/2 -translate-y-1/2">
                                <IoClose className="w-5 h-5 text-gray-400" />
                            </button>
                        )}
                        <button>
                            <Search onClick={() => { handleProductClick() }} className='font-bold w-5 mr-1 max-lg:ml-15 cursor-pointer' />
                        </button>
                    </label>
                </div>

                {/* field search */}
                <section className='flex justify-center max-lg:flex max-lg:justify-center max-xl:w-full'>
                    {<nav className='absolute'>
                        <div className='flex justify-center w-full flex-col'>
                            {searchResults?.map((item, index) =>
                                <ul key={index} className={`${searchResults.length !== undefined ? "flex flex-col justify-center mx-auto w-full" : "hidden"}  cursor-pointer 
                            items-center bg-white  text-black `} >
                                    <Link target='_blank' href={`/clothes/${slugify(item.slug, { lower: true, strict: true })}`} referrerPolicy="no-referrer">
                                        <li className='hover:bg-neutral-300 w-full transition duration-300 px-4 rounded-full ease-linear my-1'>
                                            {item.slug}
                                        </li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                    </nav>
                    }
                </section>

            </section>

            <div className="md:hidden max-lg:flex max-xl:justify-end max-xl:mr-5">
                <Search onClick={() => setIsMobileSearchOpen(true)} />
            </div>

            {/*Mobile search modal*/}
            {isMobileSearchOpen && (
                <div className="fixed inset-0 z-50 bg-white">
                    <div className="sticky top-0 bg-white border-b p-4 flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input value={searchTerm} onChange={handlerSearchChange}
                                autoFocus
                                className="w-full h-12 pr-10 pl-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-black"
                                type="text"
                                placeholder="Search for items and brands" />
                            {searchTerm && (
                                <button onClick={clearSearch} className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <IoClose className="w-5 h-5 text-gray-400" />
                                </button>
                            )}
                        </div>
                        <button onClick={() => setIsMobileSearchOpen(false)} className="px-4 py-2 text-black font-medium">
                            <X />
                        </button>
                    </div>

                    {/* Search results on mobile*/}
                    <div className="px-4">
                        {searchResults!.length > 0 ? (
                            searchResults?.map((value, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleProductClick()}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 bg-white transition-colors border-b last:border-b-0">
                                    <p className="text-sm text-gray-800 font-medium">{value.slug}</p>
                                </button>
                            ))
                        ) : searchTerm ? (
                            <div className="text-center py-10 text-black bg-white">
                                No Product Found With The Name {searchTerm}
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </div >
    )
};
export default SearchItems;