"use client"

import Image from "next/image";
import Link from "next/link";


import AppleIcon from "./icons/AppleIcon";
const DownloadApp = ()=>{
    return(
        <section className="w-full md:h-[364px] bg-[var(--color-accent)] mb-16 rounded-2xl bg-pattern bg-cover p-10 xl:p-20 bg-blend-multiply flex items-center justify-center">
            <div className="flex flex-col xl:flex-row items-center gap-6">
                {/*Text*/}
                <div className="flex-1 text-center xl:text-left">
                    <h2 className="h2 mb-4">Disfruta de los eventos en tu teléfono</h2>
                    <p className="max-w-[410px] mx-auto xl:mx-0"> Descarga tu aplicación y obtén acceso instantáneo a próximos eventos y recomendaciones personalizadas </p>
                </div>
                {/*butons */}
                <div className="flex-1">
                    <Link href="/" className="relative flex w-[192px] h-[64px]">

                    <div className="flex items-center gap-3">
                             <AppleIcon className="w-[80px] h-[80px] text-[var(--color-text)] group-data-[state=active]:text-[var(--color-text)]" />
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
                </div>
            </div>
        </section>
    )
}

export default DownloadApp