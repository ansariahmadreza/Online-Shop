"use client"
import logo from "@/features/auth/assets/logo.png";
import Image from "next/image";
import logoRight from "@/features/auth/assets/right-logo (2).png";
import Link from "next/link";
import { routes, useCartContext } from "@/shared";
import { useForm } from "react-hook-form"; ///for managing the form and retrieving the data
import { zodResolver } from "@hookform/resolvers/zod";///connecting zod validation rules to react hook form
import { z } from "zod";/// defining validation rules
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";



export const userSchema = z.object({/// define an object z with the following properties and rules
    email: z.string().email("Email is Not Valid")
});
export type RegisterFormData = z.infer<typeof userSchema>  //create a custom type based on value

const SignIn = () => {

    const Router = useRouter()
    const { handlerEmail } = useCartContext()

    const { register, /// connects every input to the form
        handleSubmit, // to handle form submission
        formState: { errors // if there was an error in fetching data,the message should be stored here
            , isSubmitting /// it indicates whether the from is currently submitting or not
        } }
        /// use the zod library for from data validation and apply the rules specified in userSchema
        = useForm<RegisterFormData>({
            resolver: zodResolver(userSchema)
        })

    const onSubmit = (data: RegisterFormData) => {
        try {
            const response = {
                token: "sdikujhfdskij",
                export: 465
            }
            cookie.set("token", response.token, { expires: response.export }) /// setting a cookie and its expiration time
            handlerEmail({ email: data.email })
            Router.push(routes.Product.Clothes)
        } catch (error) {
            console.log("error:", error)
        }
    };

    const handlerGoogle = () => {
        signIn("google")
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen  w-full">
            <section className="flex flex-col items-center justify-center px-4 py-10 lg:py-0 w-full">

                <div className="flex justify-center items-center">
                    <Link href={routes.home}>
                        <Image src={logo} alt="logo" width={70} height={70} />
                    </Link>
                </div>

                <div className="flex flex-col items-center text-center w-full max-w-[500px]">
                    <h1 className="font-bold text-[20px] my-5">
                        Hi friend!
                    </h1>
                    <p className="mb-6">
                        Enter your email to sign in or join for
                    </p>
                    <section className="grid grid-cols-3 gap-6 w-full max-w-[340px] place-items-center">
                        <div className="w-[90px] flex flex-col items-center">
                            <section className="relative">
                                <span className="bg-blue-600 text-white rounded-3xl text-[10px] p-1 absolute -top-2 -right-2 font-extrabold">
                                    FREE
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none">
                                    <circle cx="24" cy="24.5" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                    <path fill="#2D2D2D" d="M32 35.5H16v-16h16zm-14-2h5v-5h-5zm7 0h5v-5h-5zm-7-7h5v-5h-5zm7 0h5v-5h-5zm2-12c.944 0 2 .903 2 2.014 0 1.57-1.117 1.986-1.709 1.986H20.71c-.591 0-1.71-.415-1.71-1.986 0-1.11 1.056-2.014 2-2.014 1.622 0 2.462 1.37 3 2.352.538-.982 1.379-2.352 3-2.352m-6.006 1s-.994 0-.994 1 .994 1 .994 1H23c-.301-.462-1.224-2-2.006-2m6.006 0c-.93 0-1.642 1.22-2 2h2c.159-.002 1-.09 1-1 0-.568-.62-1-1-1"></path>
                                </svg>
                            </section>

                            <p className="text-[14px] mt-3 text-neutral-800">
                                ASOS.WORLD rewards
                            </p>
                        </div>

                        <div className="w-[90px] flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                                <circle cx="24" cy="24" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                <path fill="#2D2D2D" fillRule="evenodd"
                                    d="M34 14h-9L14 25l9 9 11-11zm-2 2h-6l-9 9 6 6 9-9zm-2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                                    clipRule="evenodd" />
                            </svg>

                            <p className="text-[14px] mt-3 text-neutral-800">
                                Exclusive discounts
                            </p>
                        </div>

                        <div className="w-[90px] flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                                <circle cx="24" cy="24" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                <path fill="#2D2D2D" fillRule="evenodd"
                                    d="M16.38 30.7H13.8l-.85-15.3h18.7l.85 1.7h4.25C38.167 19.36 41 23.05 41 23.05v7.65h-2.648c-.14 1.406-1.14 2.55-2.863 2.55s-2.787-1.21-2.862-2.55H22.27a2.976 2.976 0 0 1-5.89 0"
                                    clipRule="evenodd" />
                            </svg>

                            <p className="text-[14px] mt-3 text-neutral-800">
                                Speedy checkout
                            </p>
                        </div>

                    </section>

                    <div className="w-full max-w-[300px] mt-8">
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="type email..."
                                className="border-2 w-full h-[50px] pl-4 focus:border-blue-500 outline-0"
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}

                            <button disabled={isSubmitting}
                                className="w-full h-[50px] bg-neutral-800 hover:bg-black text-white"
                            >
                                CONTINUE
                            </button>
                        </form>
                    </div>
                </div>

                <button onClick={() => handlerGoogle()} className="cursor-pointer mt-5">
                    Login With Google
                </button>
            </section>



            <section className="hidden lg:flex w-full h-screen sticky top-0">
                <Image src={logoRight} alt="logo" fill
                    className="object-cover"
                    priority
                />
            </section>
        </div>
    )
};
export default SignIn; 