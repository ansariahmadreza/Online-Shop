import { allImg, useCartContext } from "@/shared";
import { X } from 'lucide-react';
import { useState } from "react";

type Props = {
    setProducts: React.Dispatch<React.SetStateAction<typeof allImg>>
}

const Sort = ({ setProducts }: Props) => {
    const { setFlagSort } = useCartContext()
    const [sortPrice, setSortPrice] = useState<string>('')


    const handlerSort = () => {

        const sorted = [...allImg]

        if (sortPrice === "low") {
            sorted.sort(
                (a, b) =>
                    Number(a.price.replace("£", "")) -
                    Number(b.price.replace("£", ""))
            )
        }

        if (sortPrice === "hight") {
            sorted.sort(
                (a, b) =>
                    Number(b.price.replace("£", "")) -
                    Number(a.price.replace("£", ""))
            )
        }

        setProducts(sorted)
    }

    return (
        <section className="left-0  bg-white shadow-2xl  h-[650px] w-[300px]  z-100000 absolute">
            <X onClick={() => { setFlagSort(false) }} className="float-right cursor-pointer" />

            <header className="font-bold text-center">
                Sort
            </header>

            <div className="mt-35">
                <form onSubmit={(e) => e.preventDefault()}>
                    <ul>
                        <li className="p-2 text-black border-b cursor-pointer">
                            <label>
                                <input type="radio" name="priceSort"
                                    checked={sortPrice === "low"}
                                    value="low"
                                    onChange={(e) => setSortPrice(e.target.value)}
                                />
                            </label>
                            Price low to hight
                        </li>

                        <li className="p-2 mt-10 text-black border-b cursor-pointer">
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