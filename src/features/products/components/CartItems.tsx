"use client"
import { formatNumberWithCommas, routes, useCartContext } from "@/shared";
import Image from "next/image";
import { allImg } from "@/shared";
import { X } from 'lucide-react';
import QtyCart from "./QtyCart";
import CartSizeManager from "./CartSizeManager";
import Link from "next/link";


const CartItems = () => {
    const { ProductItems, handle_Remove_Product, handle_Size_Product, selectedSize } = useCartContext()

    //calculates the total price of all products by multiplaying the price of each product by its quantity and summing them up.
    //if a product is not found or the price is invalid,it defaults to 0.
    const totalPrice = ProductItems.reduce((total, item) => {
        const selectedProduct = allImg.find(p => p.id === item.id)
        //extracts the price from the string,conerts it to a number,and multiplies by the quantity.
        //defaults to 0 if the product or price is not found
        return total + (Number(selectedProduct?.price.split("£")[1]?.trim() || 0)) * item.qty
    }, 0)


    //creates a list of displayed products by combining the main product information with the selected size and quantity.
    const showProduct = ProductItems.map(item => {
        const product = allImg.find(p => p.id === item.id)!  // find the complete product using its ID
        //combine product properties with size and quantity from  the current item
        return {
            ...product,// copy all original product properties
            size: item.size,//add the  size
            qty: item.qty,// add the quantity
        }
    })

    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 px-4 lg:px-10 items-start">
            <div className="min-h-screen flex flex-col gap-4 justify-start items-center w-full">
                {
                    showProduct.map((item, index) =>
                        <section key={index}
                            className="grid grid-cols-1 sm:grid-cols-3 bg-[#eeeeee]
                         gap-3 w-full shadow-sm p-3 rounded-md">
                            <div className="flex justify-center items-center">
                                <Image src={item.imgBef} alt="img"
                                    className="w-full max-w-[120px] h-auto object-contain" />
                            </div>

                            <div className="flex flex-col gap-2 sm:ml-0">
                                <span className="text-sm">{item.price}</span>
                                <p className="text-xs sm:text-sm w-full sm:w-[250px]">{item.description}</p>

                                <section className="flex flex-wrap items-center gap-2">
                                    <QtyCart size_selector={item.QtyProduct} id={item.id} qty={item.qty} size={item.size} />
                                    <CartSizeManager id={item.id} size={item.size} qty={item.qty} size_selector={item.QtyProduct} />
                                </section>
                            </div>

                            <div className="flex justify-end sm:justify-end">
                                <X className="cursor-pointer" onClick={() => handle_Remove_Product(item.id, item.size)} />
                            </div>
                        </section>
                    )
                }
            </div>

            <section className="bg-[#eeeeee] w-full lg:w-[320px] h-fit p-4 rounded-md sticky">
                <div className="border-b border-black px-2 pb-2">
                    <h1 className="">TOTAL</h1>
                </div>

                <div className="flex justify-between px-2 mt-2">
                    <p>sub-total</p>
                    <p>£{formatNumberWithCommas(totalPrice)}</p>
                </div>

                <div>
                    <p className="px-2 mt-2">Delivery</p>
                </div>

                <section className="flex justify-center items-center mt-6">
                    <Link href={routes.shippingform}>
                        <button onClick={() => ProductItems.forEach(item => handle_Size_Product(item.id, item.size, selectedSize))} className=" bg-[#018849]  
                         text-[#ffffff] font-bold w-[200px] h-10 hover:bg-[#05683a] cursor-pointer">CHECKOUT</button>
                    </Link>
                </section>
            </section>
        </section >
    )
};
export default CartItems;