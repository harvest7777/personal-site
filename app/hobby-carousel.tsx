"use client";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import BulletedParagraph from "./bulleted-paragraph";

export type HobbySlide = { src: string; alt: string; title: string };

const SCALE_FACTOR = 0.15;

function applyTweenScale(
  emblaApi: EmblaCarouselType,
  innerNodes: HTMLElement[],
) {
  const viewportRect = emblaApi.rootNode().getBoundingClientRect();
  const viewportCenter = viewportRect.left + viewportRect.width / 2;

  emblaApi.slideNodes().forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const dist = Math.abs(slideCenter - viewportCenter);
    const factor = Math.min(dist / (viewportRect.width / 2), 1);
    const scale = 1 - factor * SCALE_FACTOR;
    if (innerNodes[i]) {
      innerNodes[i].style.transform = `scale(${scale})`;
    }
  });
}

export default function HobbyCarousel({ slides }: { slides: HobbySlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const nodes = innerRefs.current.filter(Boolean) as HTMLElement[];
    applyTweenScale(emblaApi, nodes);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("settle", onScroll);
    onScroll();
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
      emblaApi.off("settle", onScroll);
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
            <div key={slide.src} className="flex-[0_0_50%] min-w-0 px-2">
              <div
                ref={(el) => {
                  innerRefs.current[i] = el;
                }}
                className="origin-center will-change-transform"
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
    </div>
  );
}
