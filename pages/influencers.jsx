import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SocialStatCard from '../Components/influencer/SocialStatCard'
import DateNoti from '../Components/DateNoti'
import '../styles/Influencer.module.css'
import instagramCircle from '../public/Images/instagramCircle.png'
import youtubeCircle from '../public/Images/youtubeCircle.png'
import tiktokCircle from '../public/Images/tiktokCircle.png'
import InfluencersTable from '../Components/influencer/InfluencersTable'

function influencers() {
  return (
    <Container className="p-3">
      <Row>
        <Col lg={9}>
          <Row>
            <Col>
              <SocialStatCard
                title="Instagram"
                value={9000}
                image={instagramCircle}
              />
            </Col>
            <Col>
              <SocialStatCard
                title="Youtube"
                value={9000}
                image={youtubeCircle}
              />
            </Col>
            <Col>
              <SocialStatCard
                title="Tiktok"
                value={9000}
                image={tiktokCircle}
              />
            </Col>
          </Row>
          <InfluencersTable />
        </Col>
        <Col lg={3}>
          <DateNoti />
        </Col>
      </Row>
    </Container>
  )
}

export default influencers
