"use client";

import {  useMediaQuery } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  leftTestimonials: Testimonial[];
  rightTestimonials: Testimonial[];
};

export type Testimonial33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial33 = (props: Testimonial33Props) => {
  const { heading, description, leftTestimonials, rightTestimonials } = {
    ...Testimonial33Defaults,
    ...props,
  } as Props;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 1440px)");

  const leftCards = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["20vh", "-70vh"] : ["-10rem", "5rem"]
  );
  const rightCards = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["20vh", "-70vh"] : ["10rem", "-5rem"]
  );

  return (
    <section
      id="relume"
      ref={sectionRef}
      className="overflow-hidden px-6 py-12 md:py-16 lg:py-20"
    >
      <div className="container grid min-h-svh auto-cols-fr grid-cols-1 items-stretch overflow-hidden lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-border-primary px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              {leftTestimonials.map((leftTestimonial, index) => (
                <div key={index} className="relative w-full">
                  <TestimonialCard key={index} {...leftTestimonial} />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              {rightTestimonials.map((rightTestimonial, index) => (
                <div key={index} className="relative w-full">
                  <TestimonialCard key={index} {...rightTestimonial} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = (testimonial: Testimonial) => (
  <div className="flex w-full flex-col items-start justify-between  p-6 md:p-8">
    <div className="rb-5 mb-5 md:mb-6">
      <div className="rb-6 mb-6 flex">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="mr-1 size-6 text-[#FFC107]" />
          ))}
      </div>
      <blockquote className="md:text-md">{testimonial.quote}</blockquote>
    </div>
    <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
      <img
        src={testimonial.avatar.src}
        alt={testimonial.avatar.alt}
        className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
      />
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p>
          {testimonial.position}, {testimonial.companyName}
        </p>
      </div>
    </div>
  </div>
);

export const Testimonial33Defaults: Testimonial33Props = {
  heading: "Customer testimonials",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  leftTestimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/Ellipse.png",
        alt: "Ellipse avatar",
      },
      name: "Name Surname",
      position: "CTO",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/google.svg",
        alt: "Google avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/edge.svg",
        alt: "Microsoft avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/netflix.svg",
        alt: "Netflix avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/gmail.svg",
        alt: "Gmail avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
  rightTestimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/appstore.svg",
        alt: "Appstore avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/Faysool.jpg",
        alt: "Faisal avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/Mohamed_Ali.jpg",
        alt: "Mohamed Ali avatar",
      },
      name: "Mohammed Ali",
      position: "Full Stack Developer",
      companyName: "Dragons",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/steam.svg",
        alt: "Steam avatar",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Steam",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "/Images/Ellipse.png",
        alt: "Testimonial avatar 10",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};
