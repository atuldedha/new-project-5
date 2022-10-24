import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsGraphUp } from 'react-icons/bs'
import { BiLoaderCircle } from "react-icons/bi";
import { RiTimerFill } from "react-icons/ri";
import Graph from "../public/Images/Vector 3.2.png"
import Image from 'next/image';
import styles from '../styles/Campaign.module.css'

export default function CampaignContainerAv() {
    const status =[{
        statusName: "Available campaings",
        iconsStatus: <BiLoaderCircle color="#fff" size={30}/>,
        bg: "cmbg inPrepBg",
        camp: 3,
    },
    {
        statusName: "Campaigns in Progress",
        iconsStatus: <BsGraphUp color="#fff" size={30}/>,
        bg: "cmbg onGoingBg",
        camp: 3,
    },
    {
        statusName: "Finished campaigns",
        iconsStatus: <RiTimerFill color="#fff" size={30}/>,
        bg: "cmbg finishedBg",
        camp: 3,
    },
    ]
  return (
    <Row>
    { status.map((st, index) => {
          return (
          <Col lg={4} key={index}>
          <div className={styles.cardCm}>
              <div className={styles.csHeading}>
                  <span className={st.bg}>{st.iconsStatus}</span>
                  <span>{st.statusName}</span>
              </div>
              <div className={styles.csInfo}>
                  <div className={styles.csRv}>
                      <span>Total</span>
                      <span>{st.camp}</span>
                  </div>
                  <div className={styles.csGr}>
                      <Image src={Graph} className={styles.graph}/>
                      <span className={styles.infoText}><b>+5%</b> Since last month</span>
                  </div>
              </div>
          </div>
          </Col>
          )
      })}
    </Row>
  )
}
