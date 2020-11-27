import React from "react";
import { Segment, Comment, Form, Button, Header } from "semantic-ui-react";

export default function EventDetailedChat() {
  return (
    <>
      <Segment
        textAlign='center'
        attached='top'
        inverted
        color='teal'
        style={{ border: "none" }}
      >
        <Header>Chat sobre este evento</Header>
      </Segment>

      <Segment attached>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>hoy a las 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>Que artistico!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Comentar</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Ayer a las 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  Esto ha sido muy util para mi investigación. Gracias
                </p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Comentar</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='/assets/user.png' />
                <Comment.Content>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot simpre tiene razón :D</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Comentar</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src='/assets/user.png' />
            <Comment.Content>
              <Comment.Author as='a'>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Amigo, Esto es grandioso. Te agradezco mucho</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Comentar</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content='Agregar comentario'
              labelPosition='left'
              icon='edit'
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </>
  )
}
