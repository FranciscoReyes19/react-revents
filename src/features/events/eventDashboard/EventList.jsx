import React from "react";
import EventListItem from "./EventListItem";

export default function EventList({ events, handleSelectEvent }) {
  return (
    <>
      {/* () despues de => significa return implicito */}
      {events.map((event) => (
        <EventListItem event={event} key={event.id} handleSelectEvent={handleSelectEvent} />
      ))}
    </>
  );
}
