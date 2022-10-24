import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../Components/Sidebar'
import NavHeader from '../Components/NavHeader'

function MyApp({ Component, pageProps }) {
  const [head, setHead] = useState()

  useEffect(() => {
    document.body.className = 'bg'
  })

  return (
    <div>
      <NavHeader />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <Component {...pageProps} setHead={setHead} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyApp
