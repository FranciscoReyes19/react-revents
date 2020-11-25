import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import TableExampleApprove from "../TableExampleApprove";

const EventDashboard = ({ formOpen, setFormOpen, handleSelectEvent, selectedEvent }) => {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvents(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updateEvent){
    setEvents(events.map( item => item.id === updateEvent.id ? updateEvent : item ))
    handleSelectEvent(null);
  }

  //using key to re-create a form when props are changed (solve update form)
  return (
    <Grid stackable>
      <Grid.Column width={10}>
        <EventList events={events} handleSelectEvent={handleSelectEvent} ></EventList>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvents}
            selectedEvent={selectedEvent}
            updateEvent = {handleUpdateEvent}
            key= {selectedEvent ? selectedEvent.id : null }
          ></EventForm>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
