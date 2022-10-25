import React, { useRef, useState } from 'react'
import { Col, Dropdown, DropdownButton, Form, Pagination, Row, Table, Button, Modal } from 'react-bootstrap'
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from 'react-icons/bs';
import ReportModal from "./ReportsModal";
import moment from 'moment/moment';
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Link from 'next/link';

export default function ReportTable() {
  
  const ref = useRef();

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [infuDetailShow, setInfuDetailShow] = useState(false);
  const handleInfuDetailClose = () => setInfuDetailShow(false);
  const handleInfuDetailShow = () => setInfuDetailShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  const options =["A","B","C","D","EE","FFF","GGG"]
  
  function handleChange(){
    
  }

  function handleAction(actionType){
    handleActionShow()
    setAction(actionType)
  }

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const [modalShow, setModalShow] = React.useState(false);
  let [isActive, setIsActive] = useState("Tobecreated");
  const [tableChange, setTableChange] = useState("Preparation");

  function handleSwitch(camp) {
    setIsActive((isActive = camp));
    setTableChange(camp);
  }

  return (
    <Col lg={12}>
      <div className="campainTableContainer">
        <div className="miniNav">
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Tobecreated" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Tobecreated");
            }}
          >
            To be created<span>03</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Tobesent" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Tobesent");
            }}
          >
           To be sent<span>01</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Awaitingfeedback" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Awaitingfeedback");
            }}
          >
            Awaiting feedback<span>02</span>
          </Button>
          <Button
            variant="link"
            className={`switchBtn1 ${
              isActive === "Approved" ? "activeBtn" : "inactiveBtn"
            }`}
            onClick={() => {
              handleSwitch("Approved");
            }}
          >
            Approved<span>06</span>
          </Button>
        </div>
        <Table>
        <thead className="custTableHead">
            <tr>
              <th>
                {" "}
                <Form>
                  <Form.Check type="checkbox" label="Clients" />
                </Form>
              </th>
              <th>Product</th>
              <th>Start & Finish Date</th>
              <th>Influencers</th>
              <th>Budget</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((num, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="userinfo">
                      <Form>
                        <Form.Check type="checkbox" />
                      </Form>
                      <div style={{margin: "0px 10px",}}><Link href="singlereporttable" passHref><Image src={ProfilePic} width="50px" height="50px"/></Link></div>
                      <div>
                        <span>Minhas Asif</span>
                        <span>Multiple Sclerosis</span>
                      </div>
                    </div>
                  </td>
                  <td>Depression</td>
                  <td>
                  <div className='dateBox'>
                    {`${moment(dateRange[0]).format('LL')} - ${moment(dateRange[1]).format('LL')}`} <MdOutlineDateRange style={{marginLeft: "5px"}}size={20} />
                  </div>
                  </td>
                  <td>50</td>
                  <td>$700</td>
                  <td>
                  <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                      {isActive === "Tobecreated" && 
                      <Dropdown.Item onClick={() => setModalShow(true)}>Create report</Dropdown.Item>
                      }
                      {isActive === "Tobesent" && 
                      <div><Dropdown.Item onClick={() => handleAction('Send')}>Send</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction('Download')}>Download</Dropdown.Item></div>
                      }
                       {isActive === "Awaitingfeedback" && 
                     <div> <Dropdown.Item onClick={() => handleAction('Appr')}>Approved</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction('Download')}>Download</Dropdown.Item></div>
                      }
                       {isActive === "Approved" && 
                      <Dropdown.Item onClick={() => handleAction('Download')}>Download</Dropdown.Item>
                      }
                      <Dropdown.Item onClick={() => handleAction('Delivered')}>Delivered</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleAction('Remove')}>Remove</Dropdown.Item>
                  </DropdownButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div style={{ float: "right", marginTop: "20px" }}>
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

      {/* actionModal */}

    <Modal show={actionShow} onHide={handleActionClose}>
      
      {( action === "Send" || action === "Delivered") && 
      <Modal.Body className='actdionModal'>
       <h2>Contact</h2>
        
         <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Receiver</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Send</Button>
        </div>
        </div>
      </Modal.Body> }
      
      { action === "Note" && 
      <Modal.Body className='actdionModal'>
       <h2>Note</h2>
       <Form.Select onChange={(e) => setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Comment</option>
            <option>Label</option>
        </Form.Select>
        {(actionContChoose === "Default" || actionContChoose === "Comment") && 
        <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={4} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Add Text</Button>
        </div>
        </div>}
        {actionContChoose === "Label" && 
         <div className='actionLabel'>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Add Label</Form.Label>
            <Typeahead
              defaultSelected={optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={optionLabel}
              placeholder="Add Label"
              ref={ref}
          />
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
        </div>}
      </Modal.Body> }
     
      { action === "Schedule" && 
      <Modal.Body className='actdionModal'>
       <h2>Schedule</h2>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Add Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Type</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Meeting</option>
            <option>Task</option>
            <option>Reminder</option>
        </Form.Select>
        </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Time</Form.Label>
       <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="pt-BR"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          dateFormat="Pp"
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
       <Form.Label>Add Clients</Form.Label>
       <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={setMultiSelections}
          options={options}
          placeholder="--- Please Select ---"
          selected={multiSelections}
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Add Description</Form.Label>
            <Form.Control as="textarea" rows={3} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Schedule</Button>
        </div>
      </Modal.Body> }
      
      </Modal>

      <ReportModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  )
}
