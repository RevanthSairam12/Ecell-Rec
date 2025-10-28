'use client'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const MembersLoveECellSection = () => {


  const testimonials = [

    {
      quote:
        "The impact you've made in nurturing creativity, building confidence, and turning ideas into actionable plans is remarkable. Kudos to the entire team for consistently going above and beyond to make a difference. Here's to many more milestones and success stories ahead!",
      name: "Dr. G. Kiran Kumar",
      designation: "Faculty Coordinator, E-CELL REC",
      src: "/kirankumar.png"
    }, {
      quote:
        "As an alumnus, it was an absolute privilege to visit my college as a guest. It's amazing to see how much support and encouragement the students have now. Great work by E-Cell REC, and I'm excited to see the incredible things the students will achieve!",
      name: "Mr. E. Pavan Chandra",
      designation: "CEO, XceedIQ",
      src: "/pavanchandrasir.jpg"
    },{
      quote:
        "The E-Cell's dedication to fostering entrepreneurship and providing a platform for students to explore creative and impactful ideas is commendable. Their initiative to connect students with real-world experiences and industry experts is a testament to their commitment to shaping future leaders and innovators.",
      name: "N. Venkata Reddy",
      designation: "Founder & CEO, Teckybot",
      src: "/teckybotsir.jpg"
    }, {
      quote:
        "The focus on innovation inspired individual to think beyond traditional approaches and create solutions that effectively address real-world needs. This experience not only enhanced their perspective but also helped them to grow into a more confident and resourceful individual.",
      name: "Dr. R.Shivaranjani",
      designation: "Head of the Department, CSE & CSO",
      src: "/hodmam.jpg"
    }, {
      quote:
        "Young individuals are capable of innovating, sharing ideas, seeking for challenges, and benefiting from their peer experiences. I am confident that the resources offered by E-Cell REC will help the students succeed in their careers and establish a strong professional network.",
      name: "Dr. Bhagavathula Meena",
      designation: "Associate Professor & SBC - CSI",
      src: "/meena-madam.png"
    },{
      quote:
        "At E-Cell, we believe every idea has the potential to change the world. Here, innovation meets opportunity, and together, we empower the entrepreneurs of tomorrow. Dream big, take risks, and let's build the future.",
      name: "Bora Suri Venkata Reddy",
      designation: "CSE Dept Assistant Professor & NSS Programme Officer",
      src: "/kirannsssir.jpg"
    },{
      quote:
        "E-Cell helps students in developing their entrepreneurial skills, connecting people with similar or diverse ideologies, and accessing resources to start their businesses.",
      name: "Dr. Ch. Chakradhar",
      designation: "CSE Dept IIC Coordinator",
      src: "/chakradharsir.jpg"
    },{
      quote:
        "E-Cell inspires students to launch their own enterprises and fosters an entrepreneurial culture. Additionally, they assist students in transforming their concepts into profitable ventures.",
      name: "Mr. Seshadri Kancherla",
      designation: "IIC: Innovation Ambassador (IA)",
      src: "/mechsir.jpg"
    }
  ];


  return (
    <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Members Love E-Cell REC ❤️
        </h2>

        {/* Testimonial Cards Container */}
        <div className="relative min-h-[400px]">


          <AnimatedTestimonials testimonials={testimonials} />

        </div>
      </div>
    </section>
  );
};
export default MembersLoveECellSection;
