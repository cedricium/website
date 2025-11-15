export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-[1492px] mx-auto p-6 md:p-12">
      {children}
    </section>
  );
}
