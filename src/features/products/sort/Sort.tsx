import { allImg, useCartContext } from "@/shared";
import { X } from 'lucide-react';
import { useRouter } from "next/navigation";

import { useState } from "react";

const Sort = () => {
    const { setFlagSort } = useCartContext()
    const [sortPrice, setSortPrice] = useState<string>('')
    const Router = useRouter()

    const handlerSort = () => {
        if (sortPrice === "low") {
            allImg.sort((a, b) =>
                parseInt(a.price.split("£")[1].trim()) -
                parseInt(b.price.split("£")[1].trim()))
        } else if (sortPrice === "hight") {
            allImg.sort((a, b) =>
                parseInt(b.price.split("£")[1].trim()) -
                parseInt(a.price.split("£")[1].trim()))
        }
        Router.refresh()
    }

    return (
        <section className="left-0  bg-white shadow-2xl  h-[650px] w-[300px]  z-50 absolute">
            <X onClick={() => { setFlagSort(false) }} className="cursor-pointer float-right" />

            <header className="font-bold text-center">
                Sort
            </header>

            <div className="mt-35">
                <form onSubmit={(e) => e.preventDefault()}>
                    <ul>
                        <li className="cursor-pointer border-b  text-black p-2">
                            <label>
                                <input type="radio" name="priceSort"
                                    checked={sortPrice === "low"}
                                    value="low"
                                    onChange={(e) => setSortPrice(e.target.value)}
                                />
                            </label>
                            Price low to hight
                        </li>

                        <li className="cursor-pointer mt-10 border-b text-black p-2">
                            <label>
                                <input type="radio" name="priceSort"
                                    value={"hight"}
                                    onChange={(e) => { setSortPrice(e.target.value) }}
                                    checked={sortPrice === "hight"}
                                />
                            </label>
                            Price hight to low
                        </li>
                    </ul>
                    <div className="flex justify-center">
                        <button onClick={() => { handlerSort() }}
                            className="bg-[#2d2d2d] hover:bg-black 
                             text-white w-[80%] py-4 px-3 cursor-pointer mt-20">VIEW ITEMS</button>
                    </div>
                </form>


            </div>
        </section>
    )
};
export default Sort;