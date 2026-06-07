"use client"
import { routes, useCartContext } from "@/shared";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import img1 from "../assets/1.avif";
import Image from "next/image";
import SignOut from "../assets/Sign Out.svg";
import img11 from "../assets/11.svg";
import img12 from "../assets/12.svg";
import img13 from "../assets/13.svg";
import img14 from "../assets/14.svg";
import img20 from "../assets/20.svg";
import img19 from "../assets/19.svg";
import img18 from "../assets/18.svg";
import img17 from "../assets/17.png";
import img16 from "../assets/16.svg";
import img15 from "../assets/15.svg";

const UserInfo = () => {
    const { currentEmailValue } = useCartContext()
    const Router = useRouter()

    const menuItems = [
        { id: 1, title: "My orders", icon: img15 },
        { id: 2, title: "My returns", icon: img16 },
        { id: 3, title: "ASOS Premier", icon: img17 },
        { id: 4, title: "Need help?", icon: img18 },
        { id: 5, title: "Gift cards & vouchers", icon: img19 },
        { id: 6, title: "My details", icon: img20 },
        { id: 7, title: "Address book", icon: img14 },
        { id: 8, title: "Payment methods", icon: img13 },
        { id: 9, title: "Contact preferences", icon: img12 },
        { id: 10, title: "Social accounts", icon: img11 },
    ];

    return (
        <section className="min-h-screen bg-[#EEEEEE] w-full px-4 py-8 sm:px-6 lg:px-10">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

                {/* ─── Sidebar ─── */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-5 sm:p-6">

                    <section className="mb-6 border-b pb-4">
                        <span className="text-gray-500 text-sm">Hi,</span>
                        <p className="text-base sm:text-lg font-semibold break-all">
                            {currentEmailValue?.email}
                        </p>
                    </section>

                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.id}
                                className="flex items-center gap-4 px-3 py-2.5 rounded-lg cursor-pointer
                                           hover:bg-gray-50 transition-colors">
                                <Image src={item.icon}
                                    alt={item.title}
                                    className="h-5 w-5 shrink-0"/>
                                <span className="text-sm text-gray-800 border-b border-transparent hover:border-black">
                                    {item.title}
                                </span>
                            </li>
                        ))}

                        <li className="flex items-center gap-4 px-3 py-2.5 mt-4 pt-4 border-t cursor-pointer">
                            <Image src={SignOut} alt="SignOut" className="w-5 h-5 shrink-0" />
                            <span
                                onClick={() => {
                                    cookie.remove("token");
                                    Router.push(routes.home);
                                }}
                                className="text-sm font-medium hover:underline">
                                Sign Out
                            </span>
                        </li>
                    </ul>
                </div>

                {/* ─── Banner Image ─── */}
                <div className="lg:col-span-2 hidden lg:flex items-center justify-center
                                bg-black rounded-xl overflow-hidden min-h-[400px]">
                    <Image
                        src={img1}
                        alt="My Account"
                        priority
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>
            </div>
        </section>
    );
};

export default UserInfo;