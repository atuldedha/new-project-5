import React, { useRef, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function FilterDSClientsDetail() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const ref = useRef();
    const options =["A","B","C","D","EE","FFF","GGG"]
    const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  return (
    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Industry</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Company</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Disease Area</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            options={options}
            placeholder="--- Please Select ---"
            />
          
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            options={options}
            placeholder="--- Please Select ---"
            />
        </Form.Group>
      </Row>
      <Row>
        <Col lg={3}>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Label</Form.Label>
            <Form.Control type="text" placeholder="Label" />
        </Form.Group>
        </Col>   
        <Col lg={3}>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
        </Form.Group>
        </Col>
        <Col lg={6}>        
            <div className='btnCont' >
            <div>
                <Button className='primBtn cmmBtn'>Filter</Button>
                <Button className='ligBtn cmmBtn' style={{marginRight: "0px"}}><span className='clrBtn' style={{backgroundColor: "#A0A5C0"}}>00</span>Clear all filter</Button>
            </div>
            </div>
        </Col>   
      </Row>
    </Form>
    </div>
    </Col>
  )
}
