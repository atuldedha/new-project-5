import React, { useEffect, useState,useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import FilterDetail from './FilterDetail'
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CampaignTable from './CampaignTable';
import Modal from 'react-bootstrap/Modal';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileBase from 'react-file-base64';

export default function FilterCampaignSec() {

  const ref = useRef();

  const [showFilter, setShowFilter] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [switchNav, setSwitchNav] = useState();

  useEffect(() => {
      setSwitchNav("Default")
  },[])

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
  const options =["A","B","C","D","EE","FFF","GGG"]

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  return (
    <div className='mainFilterSec'>
    <Row>
        <Col lg={12}>
        <div className='contentNav'>
            <div className='heading'>
                <h2>Campaigns</h2>
                <span>20 new Campaigns</span>
            </div>
            <div>
                <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
                  <FiFilter size={16} /> Filters 
                  {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
                  {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
                  </Button>
                <Button className="ligBtn cmmBtn" onClick={handleExportShow}>Export Campaigns </Button>
                <Button className="primBtn cmmBtn" onClick={handleShow}>Add new Campaign</Button>
            </div>
        </div>
        </Col>
        {showFilter && <FilterDetail />}
        <CampaignTable />
    </Row>

    {/* Add New Campagin Button Modal */}

    <Modal className='campModalAdd' show={show} onHide={handleClose}>
          <h2>Add new Campagin</h2>
          <div className='campModalNav'>
                <Button style={{backgroundColor: (switchNav === "Info" || switchNav === "Default")  && "#2D3779"}}  onClick={() => setSwitchNav("Info")}>Info</Button>
                <Button style={{backgroundColor: switchNav === "Target" && "#2D3779"}} onClick={() => setSwitchNav("Target")}>Target</Button>
                <Button style={{backgroundColor: switchNav === "Inst" && "#2D3779"}} onClick={() => setSwitchNav("Inst")}>Instructions</Button>
            </div>
        { (switchNav === "Info" || switchNav === "Default")  && 
        <Modal.Body>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Campaign Name" style={{backgroundColor: "#fff"}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Client</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Social media</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Info</Form.Label>
            <Form.Control type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Start & Finish date</Form.Label>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
              placeholderText="Select Start & Finish date"
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Package</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>--- Please Select ---</option>
                  <option>Package 1</option>
                  <option>Package 2</option>
                  <option>Package 3</option>
              </Form.Select>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Report</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>--- Please Select ---</option>
                  <option>Report 1</option>
                  <option>Report 2</option>
                  <option>Report 3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" style={{backgroundColor: "#fff"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target Audience Info</Form.Label>
              <Form.Control type="text" placeholder="Enter Target Audience Info" style={{backgroundColor: "#fff"}}/>
            </Form.Group>

            <Button className="primBtn cmmBtn" style={{width: "100%"}}>Add new Campagin</Button>
        </Modal.Body>
        }
        { switchNav === "Target"  && 
        <Modal.Body>

          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Number of Influencers</Form.Label>
              <Form.Control type="number" placeholder="Enter Number of Influencers" style={{backgroundColor: "#fff"}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Influencer size</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>--- Please Select ---</option>
                  <option>Size 1</option>
                  <option>Size 2</option>
                  <option>Size 3</option>
              </Form.Select>
          </Form.Group>

          <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label>Disease area</Form.Label>
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

          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
          </Form.Group>

          
          <Form.Group style={{ marginTop: '20px' }}>
            <Form.Label>Age range</Form.Label>
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
              <Form.Label>Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>--- Please Select ---</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Target audience info</Form.Label>
              <Form.Control type="number" placeholder="Enter Target audience info" style={{backgroundColor: "#fff"}}/>
          </Form.Group>

          <Button className="primBtn cmmBtn" style={{width: "100%"}}>Add new Campagin</Button>
           
        </Modal.Body>
        }
        { switchNav === "Inst"  && 
        <Modal.Body>

           <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Post type</Form.Label>
              <Form.Select defaultValue="Choose...">
                  <option>--- Please Select ---</option>
                  <option>Reel</option>
                  <option>Shorts</option>
                  <option>IGTV</option>
              </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image:</Form.Label>
            <br />
            <FileBase type="file" 
                multiple={false} 
                 />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button className="primBtn cmmBtn" style={{width: "100%"}}>Add new Campagin</Button>

        </Modal.Body>
        }
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


