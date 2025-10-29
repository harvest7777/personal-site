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
    <section id={id} className="w-full scroll-mt-20">
      <h1 className=" w-full text-left">{heading}</h1>
      <div className="w-full h-px bg-foreground/20 my-2"></div>
      <div className="flex flex-col gap-y-4">{children}</div>
    </section>
  );
}
