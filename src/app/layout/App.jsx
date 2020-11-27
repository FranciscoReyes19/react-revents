import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Homepage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Route exact path='/' component={Homepage}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar setFormOpen={handleCreateFormOpen}></NavBar>
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard}></Route>
              <Route path='/events/:id' component={EventDetailedPage}></Route>
              <Route path='/createEvent' component={EventForm}></Route>
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default App;
