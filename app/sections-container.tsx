export default function SectionsContainer({
  heading,
  children,
  id,
}: {
  heading: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="w-full scroll-mt-24">
      <h1 className="text-xl font-bold w-full text-left">{heading}</h1>
      <div className="w-full h-px bg-foreground my-2"></div>
      {children}
    </section>
  );
}
