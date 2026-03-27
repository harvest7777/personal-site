export default function BulletedParagraph({
  title,
  children,
  className,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full scroll-mt-16 ${className ?? ""}`.trim()}>
      <h2 className="font-bold">{title}</h2>
      <div className="text-foreground/50 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
