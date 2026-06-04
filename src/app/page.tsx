import { HeroSection } from "@/features/discover";
import { Breadcrumb, Footer, Nav } from "@/shared";

export default function Page() {
    return (
        <div>
            <Nav />
            <Breadcrumb />
            <HeroSection />
            <Footer />
        </div>
    );
}