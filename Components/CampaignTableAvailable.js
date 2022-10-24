import React, { useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row, Table } from 'react-bootstrap'
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCheckCircle, BsQuestionLg, BsThreeDotsVertical } from 'react-icons/bs';
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from '../styles/Campaign.module.css'
import Image from 'next/image';

export default function CampaignTableAvailable() {
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const randomText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <Row>
    <Col lg={12}>
      <div className={styles.campainTableContainer}>
        <div className={styles.tableSty}>
        <Table>
        <thead className={styles.custTableHead}>
            <tr>
            <th> <Form><Form.Check type="checkbox" label="Clients" /></Form></th>
            <th>Platform</th>
            <th>Post Type</th>
            <th>Start & Finish Date</th>
            <th>Example</th>
            <th>Instructions</th>
            <th>Accept/Delete</th>
            </tr>
        </thead>
        <tbody>
            {[1,2,3].map((num, index) => {
            return (
            <tr key={index}>
                <td>
                <div className={styles.userinfo}>
                    <Form><Form.Check type="checkbox" /></Form>
                    <div style={{margin: "0px 10px"}}><Image src={ProfilePic} width="50px" height="50px"/></div>
                    <div>
                    <span>Minhas Asif</span>
                    <span>Multiple Sclerosis</span>
                    </div>
                </div>
                </td>
                <td>Instagram</td>
                <td>Reel</td>
                <td><div className={styles.dateBox}>
                    {`${moment(dateRange[0]).format('LL')} - ${moment(dateRange[1]).format('LL')}`} <MdOutlineDateRange style={{marginLeft: "5px"}}size={20} />
                </div></td>
                <td><Image src={ProfilePic} onClick={handleShow} width="50px" height="50px"/></td>
                <td style={{textAlign: "center"}}><Button className={[styles.roundBtn, styles.primaryCustomButton]}>
                    <BsQuestionLg size={12} />
                    <span className={styles.tooltiptext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </Button></td>
                <td style={{textAlign: "center"}}><BsCheckCircle style={{marginRight: "2rem"}} color="#29CC39" size={20}/><AiOutlineDelete color="#b45c6c" size={20}/></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    <div>
    </div>
    </div>
    <div className={styles.flexRow} style={{justifyContent: "end"}}>
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

    <Modal className={styles.custModal} size="md" show={show} onHide={handleClose}>
        <div className={styles.postSizeImg}><Image src={ProfilePic} width="100%" height="100%"/></div>
    </Modal>
    </Col>
    </Row>
  )
}
