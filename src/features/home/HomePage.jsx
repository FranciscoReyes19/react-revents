import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function Homepage({history}){
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' style={{marginBottom:12}} ></Image>
                    Re-events
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted >
                    Get started
                    <Icon name='right arrow' inverted></Icon>
                </Button>
            </Container>
        </Segment>
    )
}