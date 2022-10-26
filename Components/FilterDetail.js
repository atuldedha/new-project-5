import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-typeahead/css/Typeahead.css';


export default function FilterDetail() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const options =["A","B","C","D","EE","FFF","GGG"]
  
  return (
    <Col>
    <div className='filterContainer'>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Company</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Client</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Location</Form.Label>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            options={options}
            placeholder="--- Please Select ---"
            />
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
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Platform</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>--- Please Select ---</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Numbers of Influencer</Form.Label>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Min" InputProps={{ inputProps: { min: 0, max: 10 } }} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Influencer Size</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Promotion Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Start</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              isClearable={true}
              placeholderText="Entry date range"
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>End</Form.Label>
          <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              isClearable={true}
              placeholderText="Entry date range"
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Budget</Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Min" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="text" placeholder="Max" />
            </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          
        </Form.Group>
      </Row>
    </Form>
    <div className='btnCont'>
        <Button className='primBtn cmmBtn'>Filter</Button>
        <Button className='ligBtn cmmBtn'><span className='clrBtn'>00</span>Clear all filter</Button>
    </div>
    </div>
    </Col>
  )
}
