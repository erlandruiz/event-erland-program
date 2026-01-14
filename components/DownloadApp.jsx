"use client";

import Image from "next/image";
import Link from "next/link";

import AppleIcon from "./icons/AppleIcon";
import GooglePlayIcon from "./icons/GooglePlayIcon";

const DownloadApp = () => {
  return (
    <section className="w-full md:h-[364px] bg-[var(--color-secondary)] mb-16 rounded-2xl bg-pattern bg-cover p-10 xl:p-20 bg-blend-multiply flex items-center justify-center relative overflow-hidden">
     
      <div className="flex flex-col xl:flex-row items-center gap-6">
        {/*Text*/}
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2 mb-4">Disfruta de los eventos en tu teléfono.</h2>
          <p className="max-w-[410px] mx-auto xl:mx-0">
            {" "}
            Descarga tu aplicación y obtén acceso instantáneo a próximos eventos
            y recomendaciones personalizadas.{" "}
          </p>
        </div>
        {/*butons */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            <div className="flex items-center gap-3">
              <AppleIcon className="w-6 h-6" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs">Descargar en</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </div>

            {/* <Image
                   src="/assets/download/app-store.svg"
                   fill
                   className="object-contain"
                   alt=""
                   /> */}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            <div className="flex items-center gap-3">
              <GooglePlayIcon className="w-6 h-6" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs">Disponible en</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
