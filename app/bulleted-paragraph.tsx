export default function BulletedParagraph({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full scroll-mt-16 ${className ?? ""}`.trim()}>
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="text-foreground/50 mt-1 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
