import { Breadcrumb, Footer, Nav } from "@/shared";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="p-0 m-0">
        <Nav />
        <Breadcrumb />
        {children}
        <Footer />
      </main >

    </>
  );
};