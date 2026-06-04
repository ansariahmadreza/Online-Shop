import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import assos from "../assets/assos.svg"
import Image from 'next/image';
import Link from 'next/link';
import Btnheader from './Btnheader';
import DropDownMenu from './DropDownMenu';
import { routes, useCartContext } from '@/shared';
import Search from './Search';


const TopNav = () => {
    const { cartTotalQty } = useCartContext()
    return (
        <section className="bg-[#2d2d2d] text-white max-lg:py-2 w-full h-auto flex max-lg:pr-10
        justify-center max-sm:justify-center max-sm:items-center items-center max-lg:flex max-lg:justify-between max-md:flex max-md:justify-between max-md:pr-6">
            <Link href={routes.home} target='_blank' className='flex justify-end max-md:ml-12 max-lg:ml-12 w-auto 
            h-auto max-md:w-20 max-sm:w-30 max-sm:h-7 max-lg:h-7'>
                <Image src={assos} className='invert-100 pr-3' alt='ASSOS logo' />
            </Link>
            <div className='max-md:mt-5'>
                <Btnheader />
            </div>
            <Search />
            <div className='flex right-0 '>
                <DropDownMenu />
                <Link href={routes.Product.faverite} target='_blank'>
                    <Heart className='mx-5' />
                </Link>
                <Link href={routes.Product.cartlist} className='flex justify-center'>
                    <ShoppingBag className='relative' />
                    <section className='absolute mt-4 w-[1.5%] text-center rounded-full bg-white max-sm:w-[5%] text-black'>
                        {
                            cartTotalQty > 0 && cartTotalQty
                        }
                    </section>
                </Link>
            </div>
        </section>
    )
};
export default TopNav;