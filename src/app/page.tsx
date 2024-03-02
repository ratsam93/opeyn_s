import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SectionCTA from "@/components/sections/section-cta";
import SectionHero from "@/components/sections/section-hero";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
// import SectionLatestNews from "@/components/sections/section-latest-news";
import SectionPartners from "@/components/sections/section-partners";
import SectionPromo from "@/components/sections/section-promo";
// import SectionTestimonialsSlider from "@/components/sections/section-testimonials-slider";
import type { Metadata } from "next";
import Head from 'next/head';


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "OPEYN",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>OPEYN</title>
        <meta name="description" content="We provide cutting-edge digital marketing solutions tailored to your needs, along with advanced lead scoring techniques and comprehensive sales intelligence. Explore our range of Chrome extensions, SOPs, and templates designed to streamline your processes. Elevate your online presence with targeted advertisements and expert SEO strategies." />
      </Head>
      <Header />
      <main className="relative">
        <SectionHero />
        <SectionIconBoxes />
        <SectionPromo />
        {/* <SectionTestimonialsSlider /> */}
        {/* <SectionLatestNews /> */}
        <SectionPartners />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}
