"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

type SlideshowProps = {
  images: {
    src: string;
    alt: string;
    blurDataURL: string;
    position?: "top" | "center" | "bottom";
  }[];
  className?: string;
};

const SLIDESHOW_DURATION = 5000;

export const Slideshow: React.FC<SlideshowProps> = ({ images, className }) => {
  // This animation probably can be made using CSS only.
  // But it was easier to implement with some JS.
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((index) => {
        if (index === images.length - 1) {
          return 0;
        }
        return index + 1;
      });
    }, SLIDESHOW_DURATION);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={clsx("w-full h-full relative", className)}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={clsx(
            "transition-opacity duration-500",
            { "opacity-100": visibleIndex === index },
            { "opacity-0": visibleIndex !== index },
          )}
        >
          <Image
            className={clsx("z-10 object-cover", {
              "object-top": image.position === "top",
              "object-center": image.position === "center",
              "object-bottom": image.position === "bottom",
            })}
            src={image.src}
            alt={image.alt}
            fill
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
          <Image
            src={image.blurDataURL}
            alt="blur-sm"
            className="absolute z-1 left-4 top-4 bg-cover w-full h-full opacity-50"
            width={360}
            height={480}
          />
        </div>
      ))}
    </div>
  );
};
