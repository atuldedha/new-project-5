import Image from 'next/image'
import React from 'react'
import { Button, Col, Form, Pagination, Row, Table } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ProfilePic from '../../../public/Images/profile-circle-2 1.png'
import styles from './InfluencersTable.module.css'
import instagramIcon from '../../../public/Images/InstagramLogo.png'
import mapPin from '../../../public/Images/mapPin.png'

function InfluencersTable() {
  return (
    <div className={styles.campainTableContainer}>
      <div className={styles.tableSty}>
        <Table>
          <thead className={styles.custTableHead}>
            <tr>
              <th>
                <Form>
                  <Form.Check type="checkbox" label="Username" />
                </Form>
              </th>
              <th>Campaigns</th>
              <th>CPC</th>
              <th>CPT</th>
              <th>Price</th>
              <th>Overlap</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map(num => {
              return (
                <tr key={num}>
                  <td>
                    <div className="d-flex gap-2 align-items-center">
                      <Form>
                        <Form.Check type="checkbox" />
                      </Form>
                      <div style={{ margin: '0px 10px' }}>
                        <Image
                          src={ProfilePic}
                          width={37}
                          height={37}
                          alt="profile image"
                        />
                      </div>
                      <Row className="flex-grow-1">
                        <Col>
                          <span className={styles.emphUserinfo}>Username</span>
                          <br />
                          <div className="d-flex gap-1 align-items-center">
                            <Image src={instagramIcon} alt="Instagram logo" />
                            <span className={styles.secondaryTextUserinfo}>
                              1.5k
                            </span>
                          </div>
                        </Col>
                        <Col>
                          <span className={styles.emphUserinfo}>
                            Heart Disease
                          </span>
                          <br />
                          <div className="d-flex gap-1 align-items-center">
                            <Image src={mapPin} alt="map pin icon" />
                            <span className={styles.secondaryTextUserinfo}>
                              Swizerland
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </td>
                  <td>50</td>
                  <td>
                    {new Intl.NumberFormat('en-EN', {
                      currency: 'USD',
                      style: 'currency',
                      maximumFractionDigits: 0,
                    }).format(7)}
                  </td>
                  <td>
                    {new Intl.NumberFormat('en-EN', {
                      currency: 'USD',
                      style: 'currency',
                      maximumFractionDigits: 0,
                    }).format(10)}
                  </td>
                  <td>
                    {new Intl.NumberFormat('en-EN', {
                      currency: 'USD',
                      style: 'currency',
                      maximumFractionDigits: 0,
                    }).format(20)}
                  </td>
                  <td>20</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button className={styles.actionsButton}>
                      <BsThreeDotsVertical />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <div></div>
      </div>
      <div className={styles.flexRow} style={{ justifyContent: 'end' }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  )
}

export default InfluencersTable
