import { EventContext } from "@/contexts/EventContext"
import { useContext } from "react"

const EventLocation = ()=>{
    const{     events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEventList} = useContext(EventContext)
    return(
        <div>
            EVENTLOCATION
        </div>
    )
}

export default EventLocation