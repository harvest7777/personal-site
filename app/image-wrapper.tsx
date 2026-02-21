import Image, { type ImageProps } from "next/image";

type Props = {
  src: ImageProps["src"];
  alt: string;
  width: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function ImageWrapper({
  src,
  alt,
  width,
  height = width,
  className,
  imageClassName,
  priority,
}: Props) {
  return (
    <div
      className={`shrink-0 ${className ?? ""}`.trim()}
      style={{ width, maxWidth: "100%" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={`${width}px`}
        priority={priority}
        className={`w-full ${imageClassName ?? ""}`.trim()}
        style={{ height: "auto" }}
      />
    </div>
  );
}
