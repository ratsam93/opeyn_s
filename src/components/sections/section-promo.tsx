import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative pb-28 pt-10 lg:pb-64 lg:pt-24">
      <PromoTriangle />
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-md">
            Our Priorities Equal Your Needs
          </h2>
          <p className="mb-10 text-lg">
          We provide cutting-edge digital marketing solutions tailored to your needs, along with advanced lead scoring techniques and comprehensive sales intelligence. Explore our range of Chrome extensions, SOPs, and templates designed to streamline your processes. Elevate your online presence with targeted advertisements and expert SEO strategies.
          </p>
          <Button>
            <a href="/contact">Get Started</a>
            <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
