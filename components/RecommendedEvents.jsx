"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { EventContext } from "@/contexts/EventContext";

import Link from "next/link";
import Event from "./Events/Event";
import SkeletonGrid from "./SkeletonGrid";

const RecommendedEvents = () => {
  const { events } = useContext(EventContext);

  const filterRecommendedEvents = events.filter((event) => {
    return event.recommended === true;
  });

  return (
    <section className="mb-32">
      <div className="mb-12 text-center">
        <h3 className="pretitle h3">Recomendados</h3>
        <h2 className="h2">Eventos que te pueden gustar</h2>
      </div>
      {filterRecommendedEvents.length > 0 ? (
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
          {filterRecommendedEvents.map((event, index) => {
            return (
              <SwiperSlide key={index} className="select-none">
              <Link href={`/event/${event._id}`}>
              
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

export default RecommendedEvents;
