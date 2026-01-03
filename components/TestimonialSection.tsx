"use client";

import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The impact you've made in nurturing creativity, building confidence, and turning ideas into actionable plans is remarkable. Kudos to the entire team for consistently going above and beyond to make a difference. Here's to many more milestones and success stories ahead!",
    name: "Dr. G. Kiran Kumar",
    designation: "Faculty Coordinator, E-CELL REC",
    src: "/kirankumar.png",
  },
  {
    quote:
      "As an alumnus, it was an absolute privilege to visit my college as a guest. It's amazing to see how much support and encouragement the students have now. Great work by E-Cell REC, and I'm excited to see the incredible things the students will achieve!",
    name: "Mr. E. Pavan Chandra",
    designation: "CEO, XceedIQ",
    src: "/pavanchandrasir.jpg",
  },
  {
    quote:
      "The E-Cell's dedication to fostering entrepreneurship and providing a platform for students to explore creative and impactful ideas is commendable. Their initiative to connect students with real-world experiences and industry experts is a testament to their commitment to shaping future leaders and innovators.",
    name: "N. Venkata Reddy",
    designation: "Founder & CEO, Teckybot",
    src: "/teckybotsir.jpg",
  },
  {
    quote:
      "The focus on innovation inspired individuals to think beyond traditional approaches and create solutions that effectively address real-world needs. This experience not only enhanced their perspective but also helped them grow into more confident and resourceful individuals.",
    name: "Dr. R. Shivaranjani",
    designation: "Head of the Department, CSE & CSO",
    src: "/hodmam.jpg",
  },
  {
    quote:
      "Young individuals are capable of innovating, sharing ideas, seeking challenges, and benefiting from peer experiences. I am confident that the resources offered by E-Cell REC will help students succeed in their careers and establish strong professional networks.",
    name: "Dr. Bhagavathula Meena",
    designation: "Associate Professor & SBC - CSI",
    src: "/meena-madam.png",
  },
  {
    quote:
      "At E-Cell, we believe every idea has the potential to change the world. Here, innovation meets opportunity, and together, we empower the entrepreneurs of tomorrow. Dream big, take risks, and let's build the future.",
    name: "Bora Suri Venkata Reddy",
    designation: "Assistant Professor, CSE & NSS Programme Officer",
    src: "/kirannsssir.jpg",
  },
  {
    quote:
      "E-Cell helps students in developing their entrepreneurial skills, connecting people with similar or diverse ideologies, and accessing resources to start their businesses.",
    name: "Dr. Ch. Chakradhar",
    designation: "CSE Dept IIC Coordinator",
    src: "/chakradharsir.jpg",
  },
  {
    quote:
      "E-Cell inspires students to launch their own enterprises and fosters an entrepreneurial culture. Additionally, they assist students in transforming their concepts into profitable ventures.",
    name: "Mr. Seshadri Kancherla",
    designation: "IIC: Innovation Ambassador (IA)",
    src: "/mechsir.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[index];

  return (
    <section className="bg-[#F2F2F2] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-section font-semibold text-[#0E0E10]">
          What People Say About CFA
        </h2>

        <div className="mt-12">
          <p className="text-body text-[#0E0E10]/80 leading-relaxed">
            “{t.quote}”
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={t.src}
                alt={t.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold text-[#0E0E10]">{t.name}</p>
              <p className="text-small text-[#0E0E10]/60">
                {t.designation}
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-[#0E0E10]/20 px-4 py-2 text-sm hover:bg-[#0E0E10]/5"
            >
              ←
            </button>
            <button
              onClick={next}
              className="rounded-full border border-[#0E0E10]/20 px-4 py-2 text-sm hover:bg-[#0E0E10]/5"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
