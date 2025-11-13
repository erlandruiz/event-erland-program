import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";
import Event from "./Event";
import SkeletonGrid from "../SkeletonGrid";

const EventList = () => {
  const {
    events,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    filteredEvents,
    handleSubmit,
    handleClearSearch,
  } = useContext(EventContext);

  if(error) return <p>Error:{error}</p>;
  if(filteredEvents.length === 0 && !isLoading){
    return(
        <div>
            <p>NO hay eventos</p>
        </div>
    )
  }

  if (isLoading) {
    return <SkeletonGrid/>
  } else {
    
      return (<div>
       {filteredEvents.map((event, index)=>{
        return(
            <div key={index}>
                <Event event={event}/>
        
            </div>
        )
       })}
        </div>);
  }
};
export default EventList;
