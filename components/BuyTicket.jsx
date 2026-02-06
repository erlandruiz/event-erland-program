"use client";

import { TicketContext } from "@/contexts/TicketContext";
import { useContext, useState } from "react";

import { BiPlus, BiMinus } from "react-icons/bi";
import { TbTicket } from "react-icons/tb";

const BuyTicket = ({ event }) => {
  const {
    seat,
    showMenu,
    itemAmount,
    totalPrice,
    checkoutData,
    handleSeat,
    setSeat,
    setShowMenu,
    buyNow,
    initializeEvent,
    increaseAmount,
    decreaseAmount,
  } = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true);
    buyNow(event);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      <div className="w-[200px] md:w-[300px] flex items-center justify-between bg-[var(--color-secondary)] p-2 rounded-full">
        <div
          onClick={() => {
            return decreaseAmount();
          }}
          className="cursor-pointer bg-[var(--color-accent)] w-[48px] h-[48px] flex items-center justify-center select-none rounded-full"
        >
          <BiMinus className="text-lg" />
        </div>
        <div>{itemAmount}</div>
        <div
          onClick={() => {
            return increaseAmount();
          }}
          className="cursor-pointer bg-[var(--color-accent)] w-[48px] h-[48px] flex items-center justify-center select-none rounded-full"
        >
          <BiPlus className="text-lg" />
        </div>
      </div>

      <button
        onClick={handleBuyNow}
        className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all p-4 rounded-full w-full"
      >
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Cargando...</div>
          ) : (
            <div className="flex items-center gap-4">
              <TbTicket className="text-2xl" />
              <div>{`${itemAmount} x ticket - $${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};
export default BuyTicket;
