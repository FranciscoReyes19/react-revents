import React from "react";
import { Item, Segment, Image, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ event, handleSelectEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Image size='tiny' circular src={event.hostPhotoURL}></Image>
            <Item.Content>
              <Item.Header content={event.title}></Item.Header>
              <Item.Description>
                Hosted by Bob {event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />
          {event.date}
          <Icon name='marker' />
          {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee
              key={attendee.id}
              attendee={attendee}
            ></EventListAttendee>
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => handleSelectEvent(event)}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
}
