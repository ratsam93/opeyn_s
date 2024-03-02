// import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
// import SectionCTA from "@/components/sections/section-cta";
// import SectionHero from "@/components/sections/section-hero";
// import SectionIconBoxes from "@/components/sections/section-icon-boxes";
// // import SectionLatestNews from "@/components/sections/section-latest-news";
// import SectionPartners from "@/components/sections/section-partners";
// import SectionPromo from "@/components/sections/section-promo";
// // import SectionTestimonialsSlider from "@/components/sections/section-testimonials-slider";
// import type { Metadata } from "next";
// import Head from 'next/head';


// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
//   title: "OPEYN",
//   description: "Home",
// };

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>OPEYN Marketing</title>
//         <meta name="description" content="We provide cutting-edge digital marketing solutions, lead scoring techniques and comprehensive sales intelligence. Explore our range of SOPs and templates designed to streamline your processes." />
//       </Head>
//       <Header />
//       <main className="relative">
//         <SectionHero />
//         <SectionIconBoxes />
//         <SectionPromo />
//         {/* <SectionTestimonialsSlider /> */}
//         {/* <SectionLatestNews /> */}
//         <SectionPartners />
//         <SectionCTA />
//       </main>
//       <Footer />
//     </>
//   );
// }





import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SectionCTA from "@/components/sections/section-cta";
import SectionHero from "@/components/sections/section-hero";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionPartners from "@/components/sections/section-partners";
import SectionPromo from "@/components/sections/section-promo";
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OPEYN Marketing</title>
        <meta name="description" content="Enhance your online presence and decrease lead costs with OPEYN MARKETING's tailored digital marketing solutions." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className="relative">
        <SectionHero />
        <SectionIconBoxes />
        <SectionPromo />
        <SectionPartners />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
