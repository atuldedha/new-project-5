import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css';
import '../styles/DiscoverInfluencers.css';
import '../styles/DiscoverClient.css';
import '../styles/Client.css';
import '../styles/Influencer.css'
import '../styles/Campaigns.css'
import "../styles/Report.css";
import "../styles/SinlgeCampTable.css";
import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css' // @fullcalendar/timegrid is a direct import

import Header from '../Components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.className = 'bg';
  });


  const [head, setHead] = useState();

  return <div>
      <Header head={head}/>
      <Container fluid>
        <Row>
          <Col  className="px-0" lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <Component {...pageProps}  setHead={setHead} />
          </Col>
        </Row>
      </Container>
    </div>
}

export default MyApp
