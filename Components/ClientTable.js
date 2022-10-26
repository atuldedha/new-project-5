import React, { useRef, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row, Table } from 'react-bootstrap'
import ProfilePic from "../public/Images/profile-circle-2 1profil.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import { Typeahead } from 'react-bootstrap-typeahead';
import moment from 'moment';
import ClientDetailsPopUp from './ClientDetailsPopUp';

export default function ClientTable() {

  
  const ref = useRef();

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [clientDetailShow, setClientDetailShow] = useState(false);
  const handleClientDetailClose = () => setClientDetailShow(false);
  const handleClientDetailShow = () => setClientDetailShow(true);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  const options =["A","B","C","D","EE","FFF","GGG"]

  const [startDate, setStartDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);

  function handleAction(actionType){
    handleActionShow()
    setAction(actionType)
  }

  return (
    <Col lg={12}>
      
        <Table>
      <thead className='custTableHead'>
        <tr>
          <th> <Form><Form.Check type="checkbox" label="Clients" /></Form></th>
          <th className="center">Locations</th>
          <th className="center">Disease Area</th>
          <th className="center">Campaigns</th>
          <th className="center">Revenue</th>
          <th className="center">Label</th>
          <th className="center">Tasks</th>
          <th className="center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[1,2,3,4,5].map((num, index) => {
          return (
          <tr key={index}>
            <td>
              <div className='userinfo'>
                <Form><Form.Check type="checkbox" /></Form>
                <div className="imgTableProfile"  onClick={handleClientDetailShow} ><Image src={ProfilePic}  width="50px" height="50px"/></div>
                <div  onClick={handleClientDetailShow} >
                  <span>Minhas Asif</span>
                  <span>Multiple Sclerosis</span>
                </div>
              </div>
              </td>
            <td className="center">00</td>
            <td className="center">10</td>
            <td className="center">11</td>
            <td className="center">CHF300</td>
            <td className="center">Label</td>
            <td className="center">Task</td>
            <td className="center">
            <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                <Dropdown.Item onClick={() => handleAction('Contact')}>Contact</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item>
            </DropdownButton>
            </td>
          </tr>
          )
        })}
      </tbody>
    </Table>
    <hr className='trSty'/>
    <div style={{float: "right", marginTop: "0px"}}>
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

    {/* actionModal */}

    <Modal show={actionShow} onHide={handleActionClose}>
      
      { action === "Contact" && 
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
      <ClientDetailsPopUp 
        handleClientDetailClose={handleClientDetailClose}
        clientDetailShow={clientDetailShow}
        setClientDetailShow={setClientDetailShow}
      />
    </Col>
  )
}
