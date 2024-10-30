import { BiSolidStar } from "react-icons/bi";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo: ImageProps;
};

export type Testimonial4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial4 = (props: Testimonial4Props) => {
  const { numberOfStars, quote, avatar, name, position, logo } = {
    ...Testimonial4Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-center">
        <div className="flex">
          {Array(numberOfStars)
            .fill(null)
            .map((_, starIndex) => (
              <BiSolidStar key={starIndex} className="size-6 text-[#FFC107]" />
            ))}
        </div>
        <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">{quote}</blockquote>
        <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
          <div className="rb-4 mb-4 md:mb-0 md:mr-5">
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
            />
          </div>
          <div className="rb-4 mb-4 md:mb-0">
            <p className="font-semibold">{name}</p>
            <p>{position}</p>
          </div>
          <div className="mx-5 hidden w-px self-stretch bg-black md:block" />
          <div>
            <img src={logo.src} alt={logo.alt} className="max-h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial4Defaults: Testimonial4Props = {
  numberOfStars: 5,
  quote:
    '"Developers go beyond just implementing tasks; they take full ownership, consistently deliver outcomes, and add their own perspective and ideas."',
  avatar: {
    src: "/Images/Kamil.webp",
    alt: "Kamil Litman",
  },
  name: "Kamil Litman",
  position: "Founder & CEO @ Neferdata",
  logo: {
    src: "/Images/neferdata-logo.webp",
    alt: "Neferdata",
  },
};
