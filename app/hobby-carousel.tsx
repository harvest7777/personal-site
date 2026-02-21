"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import BulletedParagraph from "./bulleted-paragraph";

export type HobbySlide = { src: string; alt: string; title: string };

const SCALE_FACTOR = 0.15;

function applyTweenScale(
  emblaApi: ReturnType<typeof useEmblaCarousel>[1],
  innerNodes: HTMLElement[]
) {
  if (!emblaApi) return;
  const progress = emblaApi.scrollProgress();
  const snapList = emblaApi.scrollSnapList();
  snapList.forEach((snap: number, i: number) => {
    const scale =
      1 - Math.min(Math.abs(snap - progress), 1) * SCALE_FACTOR;
    if (innerNodes[i]) {
      innerNodes[i].style.transform = `scale(${scale})`;
    }
  });
}

export default function HobbyCarousel({ slides }: { slides: HobbySlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScroll = useCallback(() => {
    const nodes = innerRefs.current.filter(Boolean) as HTMLElement[];
    applyTweenScale(emblaApi, nodes);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    onScroll();
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full">
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className="flex items-center"
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="flex-[0_0_70%] min-w-0 px-3"
            >
              <div
                ref={(el) => { innerRefs.current[i] = el; }}
                className="origin-center will-change-transform max-w-[50%] mx-auto"
              >
                <BulletedParagraph title={slide.title}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={600}
                    height={400}
                    className="w-full"
                    style={{ height: "auto" }}
                  />
                </BulletedParagraph>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4 font-mono text-sm">
        <button
          onClick={scrollPrev}
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label="previous slide"
        >
          {"<-"}
        </button>
        <button
          onClick={scrollNext}
          className="opacity-70 hover:opacity-100 transition-opacity"
          aria-label="next slide"
        >
          {"->"}
        </button>
      </div>
    </div>
  );
}
