import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
// import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((item) => item.id !== eventId));
  }

  //using key to re-create a form when props are changed (solve update form)
  return (
    <Grid stackable>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={handleDeleteEvent}
        ></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
