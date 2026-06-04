import Image from "next/image";
import assos from "../assets/assos.svg";

const BannerNav = () => {
    return (
        <section >
            {/* Top Banner */}
            <div className="w-screen border-b pb-2 max-lg:mt-[-25px] flex items-center justify-between px-4 lg:px-12 gap-4">
                <button className=" border-2 border-white px-4 py-1 tracking-[1px] text-[12px]
                 hover:opacity-50 transition duration-300 cursor-pointer shrink-0">
                    WOMEN
                </button>

                <div className="text-center max-md:hidden">
                    <p className="text-[14px]">
                        New here? Get 15% off + Free Next Day Delivery on your first order with code NEWHERE when you subscribe.
                    </p>

                    <p className="text-[14px] mt-1">
                        Want more? Order on the app with code HEYAPP and get 20% off instead!
                    </p>
                </div>

                <button className="border-2 border-white px-6 py-1 text-[12px] tracking-[1px]
                    hover:opacity-50 transition duration-300 cursor-pointer shrink-0">
                    MEN
                </button>
            </div>

            {/* Main Banner */}
            <section className="pt-6 pb-10 px-4 hidden md:block">
                <div className="flex justify-center items-center text-center gap-4">
                    <Image src={assos} alt="asos" className="invert" />

                    <p className="text-[30px] font-semibold">BLACK FRIDAY DAILY DEALS</p>
                </div>

                <div className=" flex justify-center items-center flex-col text-[#00ff00]  mt-6 text-center">
                    <h1 className="text-[50px] font-extrabold leading-tight">
                        UP TO 25% OFF BIG BRANDS
                    </h1>

                    <p className="font-bold mt-3 text-[22px]">Use code: LOOKS</p>

                    <p className="mt-4 text-base">
                        Valid on selected products only. See website banner for full Ts&Cs
                    </p>
                </div>
            </section>
        </section>
    );
};
export default BannerNav;