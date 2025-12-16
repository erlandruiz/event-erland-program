"use client";

import { EventContext } from "@/contexts/EventContext";
import { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

import Link from "next/link";
import Image from "next/image";
import SkeletonGrid from "./SkeletonGrid";
import Event from "./Events/Event";
import SportIcon from "./icons/SportIcon";
import MusicIcon from "./icons/MusicIcon";

const UpcomingEvents = () => {
  const { events } = useContext(EventContext);

  const [eventValue, setEventValue] = useState("todos");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "todos") {
        setFilteredEvents(events);
      } else {
        const result = events.filter((event) => {
          return event.type === eventValue;
        });
        setFilteredEvents(result);
      }
    };

    filterEvents();
  }, [eventValue, events]);

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h3 className="pretitle">Próximos Eventos</h3>
        <h2 className="h2">Eventos Populares</h2>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
        <Tabs
          value={eventValue}
          onValueChange={setEventValue}
          className="w-full max-w-[600px] h-full flex justify-center items-center mb-12 xl:mb-0"
        >
          <TabsList className="flex flex-col lg:flex-row gap-6 w-full h-full bg-transparent">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            {/* <TabsTrigger value="deporte">
              <Image 
              
                src={"/assets/upcoming/sport.svg"}
                width={18}
                height={18}
                alt=""
              />Deporte
            </TabsTrigger> */}
            <TabsTrigger value="deporte" className="group flex items-center gap-2">
              <SportIcon className="w-[18px] h-[18px] text-[var(--color-text)] group-data-[state=active]:text-[var(--color-text)]" />
              <span className="group-data-[state=active]:text-[var(--color-text)]">
                Deporte
              </span>
            </TabsTrigger>
            <TabsTrigger>
              <MusicIcon  className="w-[18px] h-[18px] text-[var(--color-text)] group-data-[state=active]:text-[var(--color-text)]" />
              <span className="group-data-[state=active]:text-[var(--color-text)]">Música</span>
            </TabsTrigger>
          
            <TabsTrigger value="gastronomia">
              <Image
                src={"/assets/upcoming/food.svg"}
                width={18}
                height={18}
                alt=""
              />
              Gastronomia
            </TabsTrigger>
            <TabsTrigger value="arte">
              <Image
                src={"/assets/upcoming/art.svg"}
                width={18}
                height={18}
                alt=""
              />
              Arte
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Link
          href={""}
          className="uppercase border-b-2 border-[var(--color-accent)] text-sm font-semibold text-[var(--color-accent)]"
        >
          Ver todos los eventos
        </Link>
      </div>

      {/*slider*/}
      {filteredEvents.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ dynamicBullets: true, clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1310: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
          className="w-full h-[500px]"
        >
          {filteredEvents.map((event, index) => {
            return (
              <SwiperSlide key={index} className="select-none">
                <Link href="">
                  <Event event={event} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </section>
  );
};

export default UpcomingEvents;
