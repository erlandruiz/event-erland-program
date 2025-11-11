"use client"

import EventSeacrh from "@/components/Searchbar/EventSearch";




const Home = () => {
  
  return (
    <div className="bg-white w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h:auto xl:h-[70px] rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm">
   {/**event search */}
   <EventSeacrh/>
   {/**event lOCATION */}
   <div>Event locatioN</div>
   {/**event date */}
   <div>Event DATE</div>
   {/**event TYPE */}
   <div>Event TYPE</div>
   {/**BTN SUBMIT  */}
  <button>Consultar</button>

    </div>
  );
};

export default Home;
