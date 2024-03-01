"use client";
import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "/icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Digital Marketing Solutions",
    description:
      "Our digital marketing solutions encompass a wide array of strategies and tactics aimed at boosting your online presence, increasing brand visibility, and driving meaningful engagement with your target audience.",
  },
  {
    icon: "/icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Lead Scoring",
    description:
      "Utilizing sophisticated algorithms and data analytics, our lead scoring system helps you prioritize and identify high-quality leads, enabling your sales team to focus their efforts on prospects most likely to convert.",
  },
  {
    icon: "/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Advertising",
    description:
      "Our advertisement services are tailored to help you reach your desired audience, increase brand awareness, and drive conversions through strategic and creative advertising initiatives.",
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

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                {" "}
                <span className="text-primary">We Provide</span>
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
