
import Link from "next/link";
import LogoErland from "./LogoErland";

const Header = () => {
  return (
    <div className="w-full left-0 right-0 z-10 bg-[var(--color-primary)]">
      <div className="container mx-auto h-full border-b border-[var(--color-secondary)] py-4 xl:py-6">
        <div className="flex justify-between items-center h-full">

            <Link href="/">
                <LogoErland />
            </Link>
            <div className="flex gap-4">
                <button className="btn bg-[var(--color-tertiary)]">Ingresar</button>
                <button className="btn bg-[var(--color-accent)]">Resgistrarse</button>
            </div>
        </div>
  
      </div>
    </div>
  );
};

export default Header;
