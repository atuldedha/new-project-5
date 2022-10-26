import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InfluencerTableModal(props) {
    const [startDate, setStartDate] = useState(new Date());
    const options =["A","B","C","D","EE","FFF","GGG"]

  return (
    <Modal show={props.actionShow} onHide={props.handleActionClose}>
      
      { props.action === "Contact" && 
      <Modal.Body className='actdionModal'>
      <h2>Contact</h2>
      <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
           <option>--- Please Select ---</option>
           <option>DM</option>
           <option>Email</option>
       </Form.Select>
       {props.actionContChoose === "DM" && 
       <div className='actionDm'>
         <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Message</Form.Label>
           <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
       </Form.Group>
       <div className='btnRightCont'>
         <Button className="primBtn cmmBtn sendBtn">Send</Button>
       </div>
       </div>}
       {(props.actionContChoose === "Default" || props.actionContChoose === "Email") && 
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
         <Form.Control as="textarea" rows={5} style={{backgroundColor: "#fff"}}/>
       </Form.Group>
       <div className='btnRightCont'>
         <Button className="primBtn cmmBtn sendBtn">Send</Button>
       </div>
       </div>}
     </Modal.Body> }
      
      { props.action === "Note" && 
      <Modal.Body className='actdionModal'>
       <h2>Note</h2>
       <Form.Select onChange={(e) => props.setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Comment</option>
            <option>Label</option>
        </Form.Select>
        {(props.actionContChoose === "Default" || props.actionContChoose === "Comment") && 
        <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control as="textarea" rows={5} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Add Text</Button>
        </div>
        </div>}
        {props.actionContChoose === "Label" && 
         <div className='actionLabel'>
          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Add Label</Form.Label>
            <Typeahead
              defaultSelected={props.optionLabel.slice(0, 1)}
              id="public-methods-example"
              labelKey="name"
              multiple
              options={props.optionLabel}
              placeholder="Add Label"
              ref={props.ref}
          />
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Save</Button>
        </div>
        </div>}
      </Modal.Body> }
     
      { props.action === "Schedule" && 
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
          onChange={props.setMultiSelections}
          options={options}
          placeholder="--- Please Select ---"
          selected={props.multiSelections}
        />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Add Description</Form.Label>
            <Form.Control as="textarea" rows={5} style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Schedule</Button>
        </div>
      </Modal.Body> }
      
      </Modal>
  )
}
