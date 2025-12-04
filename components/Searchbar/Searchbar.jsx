import { useContext } from "react";
import EventSeacrh from "./EventSearch";
import { EventContext } from "@/contexts/EventContext";
import EventLocation from "./EventLocation";

const Searchbar = () => {
  const { handleSubmit } = useContext(EventContext);
  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h:auto xl:h-[70px] rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm  bg-[var(--color-secondary)]/80 text-white border boder-[var(--color-tertiary-hover)]">
      {/**event search */}
      <EventSeacrh />
      {/**event lOCATION */}
      <EventLocation/>
      {/**event date */}
      <div>Event DATE</div>
      {/**event TYPE */}
      <div>Event TYPE</div>
      {/**BTN SUBMIT  */}
      <button
        onClick={handleSubmit}
        className="btn bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white "
      >
        Consultar
      </button>
    </div>
  );
};

export default Searchbar;
