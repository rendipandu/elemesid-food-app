import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Nav />
        <Hero />
      </div>
      <Category />
      <Trending />
      <Footer />
    </div>
  )
}
