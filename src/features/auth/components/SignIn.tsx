"use client"
import logo from "@/features/auth/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { routes, useCartContext } from "@/shared";
import { useForm } from "react-hook-form"; ///for managing the form and retrieving the data
import { zodResolver } from "@hookform/resolvers/zod";///connecting zod validation rules to react hook form
import { z } from "zod";/// defining validation rules
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

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


    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 lg:px-0">

            {/* LEFT SECTION */}
            <section className="flex flex-col items-center justify-center w-full max-w-md mx-auto">

                <Link href={routes.home} className="mb-6">
                    <Image src={logo} alt="logo" width={70} height={70} />
                </Link>

                <h1 className="font-bold text-xl text-center mb-2">Hi friend!</h1>
                <p className="text-center text-neutral-600 mb-6">
                    Enter your email to sign in or join for
                </p>

                {/* FEATURES */}
                <section className="grid grid-cols-3 gap-4 w-full text-center mb-8">

                    <div className="flex flex-col items-center">
                        <span className="bg-blue-600 text-white rounded-full text-[10px] px-2 py-1 mb-2">
                            FREE
                        </span>
                        <p className="text-xs text-neutral-800">
                            ASOS.WORLD rewards
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-xs text-neutral-800">
                            Exclusive discounts
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-xs text-neutral-800">
                            Speedy checkout
                        </p>
                    </div>

                </section>

                {/* FORM */}
                <form
                    className="flex flex-col gap-3 w-full"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="text-neutral-600 font-bold text-sm">EMAIL:</p>

                    <input
                        type="email"
                        {...register("email")}
                        className="border w-full h-[50px] px-4 focus:border-blue-500 outline-none"
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full h-[50px] bg-neutral-800 hover:bg-black text-white"
                    >
                        CONTINUE
                    </button>
                </form>
            </section>
        </div>
    )
};
export default SignIn;