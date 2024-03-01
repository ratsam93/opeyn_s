"use client";
import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";
import SectionTitle from "./section-title";

export const iconBoxes = [
  {
    icon: "/icons/SALES.png",
    title: "Sales Intelligence",
    description:
      "Providing actionable insights to optimize sales strategies and drive revenue growth effectively.",
  },
  {
    icon: "/icons/SEO.png",
    title: "SEO",
    description:
      "Strategies to improve website visibility and organic traffic through optimized content and technical enhancements.",
  },
  {
    icon: "/icons/growth.png",
    title: "Growth Hacking",
    description:
      "Deploying innovative tactics to accelerate user acquisition and maximize business growth.",
  },
  {
    icon: "/icons/SOP.png",
    title: "SOPs and Templates",
    description:
      "Offering standardized workflows and customizable templates for achieving operational excellence.",
  },
  {
    icon: "/icons/pay-2643_cf4ecaa0-bcfb-4c2b-91e1-7353cb0dccdd.svg",
    title: "Scalable Marketing",
    description:
      "Implementing scalable strategies to drive sustainable business expansion and revenue generation.",
  },
  {
    icon: "/icons/handshake-3124_670c4553-214a-4d06-830f-4d0855736c60.svg",
    title: "Customer Loyalty",
    description:
      "Fostering lasting relationships and building brand advocates through exceptional experiences and personalized engagement.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxesLayout3 = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="pb-10 pt-16 lg:pb-20 lg:pt-24">
      <div className="container">
        {!noTitle && (
          <SectionTitle
            subtitle="We offer a variety of services here to get you started and successfully suite every need using Opeyn."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
            Top 6 reasons why we are the best
          </SectionTitle>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox
                  iconBox={iconBox}
                  className="py-7 text-center shadow-none before:hidden"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout3;
