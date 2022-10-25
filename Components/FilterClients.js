import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import FilterDetail from './FilterDetail'
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CampaignTable from './CampaignTable';
import ClientFilterDetail from './ClientFilterDetail';
import ClientTable from './ClientTable';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function FilterClients() {
  const [showFilter, setShowFilter] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const options =["A","B","C","D","EE","FFF","GGG"]
  return (
    <div className='mainFilterSec'>
    <Row>
        <Col lg={12}>
        <div className='contentNav'>
            <div className='heading'>
                <h2>Clients</h2>
                <span>More than 290+ new Clients</span>
            </div>
            <div>
                <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
                  <FiFilter size={16} /> Filters 
                  {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
                  {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
                  </Button>
                <Button className="ligBtn cmmBtn" onClick={handleExportShow}>Export Report </Button>
                
                <Button className="primBtn cmmBtn" onClick={handleShow}>Add new Client</Button>
            </div>
        </div>
        </Col>
        {showFilter && <ClientFilterDetail />}
        <ClientTable />
    </Row>
    

    <Modal show={show} onHide={handleClose}>
      <Modal.Body className='campModal'>
        <h2>Add Client</h2>
        <Form>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Company</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Industry</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter Role" />
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
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
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
        
        
        </Form>
        <Button className='primBtn cmmBtn' style={{width: "100%"}}>Add Client</Button>
      </Modal.Body>
    </Modal>

    {/* export Modal */}
    <Modal show={exportShow} onHide={handleExportClose} className="expoModalOuter">
        <Modal.Body>
           <b>Do you want to export:</b><br />
          <div className='expoModalCOnt' style={{justifyContent: "flex-start"}}>
           <Form.Check type="checkbox" label="All"  style={{ marginRight: "10px"}} />
           <Form.Check type="checkbox" label="Selected" />
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body> 
      </Modal>
    </div>
  )
}
