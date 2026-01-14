"use client";

import Link from "next/link";

import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] bg-cover bg-blend-multiply pt-16">
      <div className="container mx-auto border-b">
        <div className="flex flex-col max-w-[550px] mx-auto text-center">
          <div className="mb-9">
            <h2 className="h2 mb-3">Conecta con tus eventos</h2>
            <p>Únete a nuestra lista exclusiva y recibe recomendaciones de expertos.</p>
          </div>

          <form className="relative flex items-center mb-16">
            <input type="email" placeholder="Ingrese su correo" className="pl-8 w-full h-[60px] rounded-full bg-[var(--color-primary)] outline-none placeholder:text-[var(--color-text-muted)] text-[var(--color-text)] text-sm"/>
            <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] transition-all w-[114px] h-[52px] rounded-full text-sm uppercase absolute right-1">Únete</button>

          </form>

          <div className="mb-[72px]">Redes Sociales</div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <Link href="/" className="relative ">
              <LogoFooter />
            </Link>
            <p className="text-sm">
              Copyright &copy; Todos los derechos reservados. 2026.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
