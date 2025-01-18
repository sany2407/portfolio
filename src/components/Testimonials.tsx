"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import testiImage from '../../public/assets/testi.png';
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const Testimonials: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      id: "1",
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: testiImage as StaticImageData,
    },
    {
      id: "2",
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: testiImage as StaticImageData,
    },
    {
      id: "3",
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: testiImage as StaticImageData,
    },
    {
      id: "4",
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: testiImage as StaticImageData,
    },
    {
      id: "5",
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: testiImage as StaticImageData,
    },
  ];

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default Testimonials;

