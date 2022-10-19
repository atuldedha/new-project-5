import React, { useRef, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function ClientFilterDetail() {
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
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Campaign Status</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Date Joined</Form.Label>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Select Start & End Date"
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Numbers of Campaign</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Revenue</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
      </Row>
      <Row>
        <Col xs={3}>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Location of Interest</Form.Label>
            <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                
                options={options}
                placeholder="--- Please Select ---"
                
            />
        </Form.Group>
        </Col>
        <Col xs={6}>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Add Lable</Form.Label>
          <Typeahead
            defaultSelected={optionLabel.slice(0, 2)}
            id="public-methods-example"
            labelKey="name"
            multiple
            options={optionLabel}
            placeholder="Add Label"
            ref={ref}
        />
        </Form.Group>
        </Col>
        <Col xs={3}>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Check type="checkbox" label="Only those with task" />
        </Form.Group>
        </Col>
      </Row>
    </Form>
    <div className='btnCont' style={{justifyContent: "space-between", }}>
    <div>
        <Form>
            <Form.Group as={Col} controlId="formGridState" className='checkB'>
                <Form.Check type="checkbox" label="Only those with task" />
            </Form.Group>
        </Form>
    </div>
    <div>
        <Button className='primBtn cmmBtn'>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn' style={{backgroundColor: "#2D3779"}}>00</span>Clear all filter</Button>
    </div>
    </div>
    </div>

    </Col>
  )
}
