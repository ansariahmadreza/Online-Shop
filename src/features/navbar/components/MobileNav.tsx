"use client"
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openAccordion, setOpenAccordion] = useState<string | null>(null)

    const toggleAccordion = (value: string) => {
        setOpenAccordion(openAccordion === value ? null : value)
    }

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [openMenu])

    return (
        <div className="max-md:mt-2">
                {/* BUTTON */}
                <div className="flex justify-end">
                    <Menu size={25} className="full" onClick={() => setOpenMenu(true)} />
                </div>
                {/* OVERLAY */}
                <div onClick={() => setOpenMenu(false)} className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300
          ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}`} />
                <aside className={`fixed top-0 left-0 h-screen w-[320px] bg-white text-black z-50 transition-all duration-300 overflow-y-auto
          ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex items-center justify-between border-b px-5 py-4">
                        <h1 className="font-bold text-[18px]">
                            Menu
                        </h1>
                        <button onClick={() => setOpenMenu(false)}>
                            <X size={28} />
                        </button>
                    </div>
                    {/* MENU */}
                    <nav>
                        {/* CLOTHING */}
                        <div className="border-b">
                            <button onClick={() => toggleAccordion("clothing")}
                                className="flex items-center justify-between w-full px-5 py-4">
                                <span className="font-bold text-[15px]">
                                    Clothing
                                </span>
                                <ChevronDown className={`transition-all duration-300 ${openAccordion === "clothing" ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "clothing" ? "max-h-[300px]" : "max-h-0"}`}>

                                <div className="px-5 pb-5 space-y-3">
                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        T-Shirts
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Hoodies
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Jackets
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* TRENDING */}
                        <div className="border-b">
                            <button onClick={() => toggleAccordion("trending")} className="flex items-center justify-between w-full px-5 py-4">

                                <span className="font-bold text-[15px]">
                                    Trending
                                </span>

                                <ChevronDown className={`transition-all duration-300 ${openAccordion === "trending" ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300  ${openAccordion === "trending" ? "max-h-[300px]" : "max-h-0"}`}>

                                <div className="px-5 pb-5 space-y-3">

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        New Trends
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Essentials
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Denim
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* SHOES */}
                        <div className="border-b">
                            <button onClick={() => toggleAccordion("shoes")} className="flex items-center justify-between w-full px-5 py-4">
                                <span className="font-bold text-[15px]">
                                    Shoes
                                </span>

                                <ChevronDown className={`transition-all duration-300 ${openAccordion === "shoes" ? "rotate-180" : ""}`} />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openAccordion === "shoes" ? "max-h-[300px]" : "max-h-0"}`}>
                                <div className="px-5 pb-5 space-y-3">

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Sneakers
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Boots
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Sandals
                                    </p>

                                </div>

                            </div>
                        </div>

                        {/* GIFTING */}
                        <div className="border-b">
                            <button onClick={() => toggleAccordion("gifting")}
                                className="flex items-center justify-between w-full px-5 py-4">

                                <span className="font-bold text-[15px]">
                                    Gifting
                                </span>
                                <ChevronDown className={`transition-all duration-300 ${openAccordion === "gifting" ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "gifting" ? "max-h-[300px]" : "max-h-0"}`}>
                                <div className="px-5 pb-5 space-y-3">
                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Gifts For Him
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Gifts For Her
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Accessories
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ACCESSORIES */}
                        <div className="border-b">
                            <button onClick={() => toggleAccordion("accessories")} className="flex items-center justify-between w-full px-5 py-4">

                                <span className="font-bold text-[15px]">
                                    Accessories
                                </span>
                                <ChevronDown className={`transition-all duration-300 ${openAccordion === "accessories" ? "rotate-180" : ""}`} />
                            </button>

                            <section className={`overflow-hidden transition-all duration-300  ${openAccordion === "accessories" ? "max-h-[300px]" : "max-h-0"}`}>
                                <div className="px-5 pb-5 space-y-3">

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Watches
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Rings
                                    </p>

                                    <p className="text-[14px] text-neutral-500 cursor-pointer hover:text-blue-600">
                                        Bags
                                    </p>
                                </div>
                            </section>
                        </div>
                    </nav>
                </aside>
        
        </div>
    )
}
export default MobileNav;