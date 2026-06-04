"use client"
import { BannerNav, MobileNav, NavMenu, TopNav } from '@/features/navbar';
import Headroom from 'react-headroom';
import { useIsMobile } from '../hooks/use-mobile';


const Nav = () => {
    const isMobile = useIsMobile()
    return (
        <section className="text-white overflow-x-hidden bg-black w-full">
            <header>
                <Headroom className="fixed w-full left-0 top-0 z-9999">
                    <TopNav />
                    {
                        isMobile ?
                            <nav className='flex justify-start mt-[-42px] ml-4'>
                                <MobileNav />
                                <div className='pb-10'>
                                </div>
                            </nav>
                            :
                            <nav className="bg-[#525050] flex justify-start  items-center">
                                <NavMenu />
                            </nav>
                    }
                </Headroom>
            </header>
            <div className="h-[100px]">
            </div>
            <BannerNav />
        </section>
    )
};
export default Nav;