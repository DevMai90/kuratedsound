import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Home = () => (
  <Container>
    {/* This container which will contain services in circular cards with a logo symbolizing what kind of services aka 'Social Proof'*/}
    <Container className='services-container'>
      <Row>COMPREHENSIVE SERVICES</Row>
      <Row className="serviceRow">
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* Benefits container. "What can we do for you?" */}
    <Container className='services-container'>
      <Row>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 1</Card.Title>
              <Card.Text>
                We create unique experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 2</Card.Title>
              <Card.Text>
                Feel the music and turn your social gatherings into more than just the typical meet-up occasion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <i class="fab fa-twitch fa-fw"></i>
              <Card.Title>Service 3</Card.Title>
              <Card.Text>
                We are not your ordinary bluetooth speaker or sound bar playing through your phone.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <hr />
    {/* Features container. How can we do it for you?*/}
    {/* This container will have 4 equal sized pictures that are clickable with text inside saying what it will direct you to: reservations, our tech, about us, contact us */}
    <Container className='features-parent-container'>
      {/* <Container className='features-container'>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                  We use modern-day tech and equipment that is suited to your needs and expectations. Our equipments primarily consists of PA speakers, subwoofers, both wired and wireless microphones, mixers to help amplify and control the sound, and a DJ controller.
                {' '}
              </p>
              <footer className="blockquote-footer">
                Kevin Tran, <cite title="Source Title">Co-Founder</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Row><p>There are particular brands that we use and they are considered some of the best in the current market today:</p></Row>
      </Container> */}

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>Pioneer</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>QSC</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>Turbosound</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>Mackie</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>Shure</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }}>
              <Card.Body>
                <i class="fab fa-twitch fa-fw"></i>
                <Card.Text>Sennheiser</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">text</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
            {/* <Row>Aside from our latest technologies, our best asset is our very own Kurated Sound co-founder and DJ, Khalil! Or better known as Kleos- his on-stage name. He is our personal DJ and can spin the dopest DJ set for your event - bringing to you the best and latest electronic music in today's lineup.</Row> */}
        </Row>
      </Container>
    </Container>
    {/* Call to Action Container */}
    <Container className='call-to-action-container'>
      <Col>
        <Row className='find-dj-container'>If you are a performer or DJ, we’d love to assist and get in contact with you! Please <strong>contact us</strong></Row>
        <Row>
          Don't forget to check us out on Yelp!
        </Row>
      </Col>
      {/* This container will be about how we run on multiple platforms such as youtube and spotify for you to listen to music and get in touch with our genre and curations. */}
    </Container>
    <Container className='music-container'>
      <Col>
        I like music. Do you like music? Here are our youtube and spotify channels. :)
      </Col>
    </Container>
  </Container>
);

export default Home;