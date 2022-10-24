import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CampaignContainerAv from '../Components/CampaignContainerAv'
import CampaignTableAvailable from '../Components/CampaignTableAvailable'
import CampaignTableOngoing from '../Components/CampaignTableOngoing'
import DateNoti from '../Components/DateNoti'
import styles from '../styles/Campaign.module.css'

export default function campaigns() {
  return (
    <Row>
      <Col lg={9}>
        <div className={styles.campSection}>
          <h2 className={styles.headingCampign}>Container title</h2>
          <CampaignContainerAv />
          <h2 className={styles.headingCampign}>Available Campaigns</h2>
          <CampaignTableAvailable />
          <h2 className={styles.headingCampign}>Ongoing Campaigns</h2>
          <CampaignTableOngoing />
        </div>
      </Col>
      <Col lg={3}>
        <DateNoti />
      </Col>
    </Row>
  )
}
