import { HeroSection } from "@/features/discover"
import { Breadcrumb, Footer, Nav } from "@/shared";
const Home = () => {
  return (
    <div className="min-w-screen">
      <Nav />
      <Breadcrumb />
      <HeroSection />
      <Footer />
    </div>
  )
}
export default Home;