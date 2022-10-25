import React, { useState } from 'react'
import FilterDSClientsDetail from './FilterDSClientsDetail';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DSclientDaashboard from './DSclientDaashboard';
import { Typeahead } from 'react-bootstrap-typeahead';
import Image from "next/image";


export default function FiltersDSClients() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const options =["A","B","C","D","EE","FFF","GGG"]
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='mainFilterSec'>
    <Row>
        <Col lg={12}>
        <div className='contentNav'>
            <div className='heading'>
                <h2>Clients</h2>
                <span>20 new Clients</span>
            </div>
            <div>
                <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
                  <FiFilter size={16} /> Filters 
                  {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
                  {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
                  </Button>
                <Button className="ligBtn cmmBtn"  onClick={handleExportShow}>Export</Button>
                <Button className="primBtn cmmBtn"  onClick={handleShow}>Add Client</Button>

            </div>
        </div>
        </Col>
        {showFilter && <FilterDSClientsDetail />}
        <DSclientDaashboard />
    </Row>

    <Modal show={show} onHide={handleClose}>
      <Modal.Body className='campModal'>
        <h2>Add Client</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Client Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Client Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter Role" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Industry</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Company</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" placeholder="Enter Product" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Disease Area</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>
        </Form>
        <Button className='primBtn cmmBtn' style={{width: "100%"}}>Add Client</Button>
      </Modal.Body>
    </Modal>

    {/* export Modal */}
    <Modal show={exportShow} onHide={handleExportClose} className="expoModalOuter">
        <Modal.Body>
           <b>Do you want to export:</b><br />
          <div className='expoModalCOnt'>
           <Form.Check type="checkbox" label="All" />
           <Form.Check type="checkbox" label="Identified" />
           <Form.Check type="checkbox" label="Contacted" />
           <Form.Check type="checkbox" label="Registered" />
           <Form.Check type="checkbox" label="Scheduled" />
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body> 
      </Modal>
    </div>
  )
}
