"use client";
import { createContext, useEffect, useState } from "react";

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {
  const [event, setEvent] = useState(null);
  const [seat, setSeat] = useState({ seat: null, price: null });
  const [showMenu, setShowMenu] = useState(false);
  const [itemAmount, setItemAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutData, setCheckoutData] = useState(null);

  const initializeEvent = (fetchedEvent) => {
    setEvent(fetchedEvent);
    setItemAmount(1);
    const frontseat = fetchedEvent?.seats.find(
      (seat) => seat.seat === "delantero",
    );
    if (frontseat) {
      setSeat({ seat: frontseat.seat, price: frontseat.price });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".custom-select")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(seat.price * itemAmount);
  }, [seat.price, itemAmount]);

  const handleSeat = (seat, price) => {
    setSeat({ seat, price });
    setShowMenu(false);
  };
  const buyNow = (event) => {
    const ticketData = {
      eventId: event.id,
      eventName: event.title,
      ticketType: seat.seat,
      ticketPrice: seat.price,
      amount: itemAmount,
      totalPrice,
    };
    setCheckoutData(ticketData);
    
  };


  const increaseAmount =()=>{
    setItemAmount((prevAmount)=> prevAmount+1);
  }

  const decreaseAmount =()=>{
    setItemAmount((prevAmount)=> (prevAmount > 1 ? prevAmount -1 :1))
  }
  return (
    <TicketContext.Provider
      value={{
        event,
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
        decreaseAmount 

      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
