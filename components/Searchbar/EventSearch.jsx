import { EventContext } from "@/contexts/EventContext";
import { Input } from "@/components/ui/input";
import { useContext } from "react";

import { BiSearch } from "react-icons/bi";

const EventSeacrh = () => {
  const { searchTerm, setSearchTerm } = useContext(EventContext);

  return (
    <div className="flex items-center gap-[10px] w-ful xl:w-[190px]">
      <div className="text-lg text-[var(--color-accent)]"><BiSearch/></div>
      <Input
        value={searchTerm}
        type="text"
        placeholder="Nombre del evento o Artista"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default EventSeacrh;
