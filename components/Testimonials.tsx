import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. R.Shivaranjani",
      username: "Head of the department CSC&CSO",
      body: "The focus on innovation inspired individual to think beyond traditional approaches and create solutions that effectively address real-world needs. This experience not only enhanced their perspective but also helped them to grow into a more confident and resourceful individual.",
      img: "/hodmam.jpg",
      rating: 5
    },
    {
      name: "Dr. Bhagavathula Meena",
      username: "Associate Professor & SBC - CSI",
      body: "Young individuals are capable of innovating, sharing ideas, seeking for challenges, and benefiting from their Peer experiences. I am confident that the resources offered by E-Cell REC will help the students to succeed in their carreer and establish a strong professional network.",
      img: "/meena-madam.png",
      rating: 5
    },
    {
      name: "Mr.E.Pavan Chandra",
      username: "CEO, XceedIQ",
      body: "As an alumnus, it was an absolute privilege to visit my college as a guest. It's amazing to see how much support and encouragement the students have now. Great work by E-Cell REC, and I'm excited to see the incredible things the students will achieve!",
      img: "/pavanchandrasir.jpg",
      rating: 5
    },
    {
      name: "Bora Suri Venkata Reddy",
      username: "CSE Dept Assistant Professor and NSS Programme Officer",
      body: "At E-Cell, we believe every idea has the potential to change the world. Here, innovation meets opportunity, and together, we empower the entrepreneurs of tomorrow. Dream big, take risks, and let's build the future",
      img: "/kirannsssir.jpg",
      rating: 5
    },
    {
      name: "Dr. Ch.Chakradhar",
      username: "CSE Dept IIC coordinator",
      body: "E-Cell helps students in the development of their entrepreneurial skills, connecting the people with similar or different ideology, and access resources to start their business",
      img: "/chakradharsir.jpg",
      rating: 5
    },
    {
      name: "N. Venkata Reddy",
      username: "Founder - CEO, Teckybot",
      body: "The E-Cell's dedication to fostering entrepreneurship and providing a platform for students to explore creative and impactful ideas is commendable. Their initiative to connect students with real-world experiences and industry experts is a testament to their commitment to shaping future leaders and innovators.",
      img: "/teckybotsir.jpg",
      rating: 5
    }
  ];

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    rating,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    rating: number;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4",
          // light styles
          "border-border bg-card hover:bg-muted/50",
          // dark styles
          "dark:border-border dark:bg-card dark:hover:bg-muted/50",
        )}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <Image
            className="rounded-full w-12 h-12 object-cover border-2 border-primary/20"
            width="48"
            height="48"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-foreground">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex space-x-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-innovation text-innovation" />
          ))}
        </div>

        {/* Quote Icon */}
        <Quote className="w-6 h-6 text-primary/30 mb-3" />

        <blockquote className="text-sm text-foreground leading-relaxed text-justify">
          "{body}"
        </blockquote>
      </figure>
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-innovation to-success bg-clip-text text-transparent mb-6">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our faculty, mentors, and industry experts have to say about E-Cell REC's impact on entrepreneurship
          </p>
        </div>

        {/* Marquee Testimonials */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
