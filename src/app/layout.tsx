import { Providers } from "@/shared";
import "./globals.css"
import { Metadata } from "next";
import RegisterSw from "@/components/RegisterSw";
import AuthProvider from "@/providers/Authproviders";

export const metadata: Metadata = {
    title: {
        default: "Men's Clothes | Shop for Men's Fashion | ASOS",
        template: "%s | ASOS",
    },
    manifest: "/manifest.webmanifest",  // reference to the manifest file
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className="p-0 m-0">
                <Providers>
                    <AuthProvider>
                        <RegisterSw />
                        {children}
                    </AuthProvider>
                </Providers>
            </body>
        </html >
    );
};