import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Homepage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {

  return (
    <>
      <Route exact path='/' component={Homepage}></Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar></NavBar>
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard}></Route>
              <Route exact path='/sandbox' component={Sandbox}></Route>
              <Route path='/events/:id' component={EventDetailedPage}></Route>
              <Route path={['/createEvent', '/manage/:id']} component={EventForm}></Route>
            </Container>
          </>
        )}
      ></Route>
    </>
  );
}

export default App;
