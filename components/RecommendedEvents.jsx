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
    <div>
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
              <SwiperSlide key={index}>
                <Link href={""}>
                  {" "}
                  <Event event={event} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </div>
  );
};

export default RecommendedEvents;
