import React, {useState, useRef, useEffect} from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row } from 'react-bootstrap'
import profilePic from "../public/Images/profile-circle-2 1.png"
import { BsInstagram, BsThreeDotsVertical } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import { Typeahead } from 'react-bootstrap-typeahead'
import moment from 'moment'
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';

export default function DSclientDaashboard() {

  const ref = useRef();

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);
  
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const [multiSelections, setMultiSelections] = useState([]);
const data = [{
    headingInner: "Identified",
    num: "89670"
    },
    {
    headingInner: "Contacted",
    num: "79660"
    },
    {
    headingInner: "Registered",
    num: "29670"
    },
    {
    headingInner: "Scheduled Call",
    num: "100"
    },
]

const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
const options =["A","B","C","D","EE","FFF","GGG"]

const [startDate, setStartDate] = useState(new Date());

const [dateRange, setDateRange] = useState([new Date(), new Date()]);

useEffect(() => {
  const draggables = document.querySelectorAll('.draggable')
  const containers = document.querySelectorAll('.dataCard')
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })
  
  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
},[])


const [editDisable, setEditDisable] = useState(true);
const [formData, setFormData] = useState({
  clientName: "", role: "", industry: "", company: "", location:"", product: "",diseaseArea: "", email: "", phoneNum: "",
  comments: "",labels: "",meeting: "",reminders: "",tasks: "", status: "",dateAdded: "", dateStatusChanged: "",
})

function handleEdit(){
  setEditDisable(prevState => !prevState)
}

function handleChange(e){
  const {type,name,value} = e.target;
  setFormData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })
}
function handleAction(actionType){
  handleActionShow()
  setAction(actionType)
}

  return (
    <div className='dataConatiner'>
    <Row>
        { data.map((d, index) => {
          return (
        <Col lg={3} key={index}>
          <div className='dataCard' style={{padding: "10px"}}>
            <span className='s1'>{d.headingInner}: <span className='s2'>{d.num}</span></span>
         { [1,2,3,4,5,6].map((a,index) => {
          return (
            <div key={index} draggable="true" className='singleData draggable' style={{padding: "8px",}}>
              <Image src={profilePic} width="50px" onClick={handleEditShow} />
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
              <div className='innerDataCard' onClick={handleEditShow} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div className='user'>
                  <span style={{fontSize:"13px",}}>Product Name {a}</span>
                </div>
                <div className='info'>
                  <span style={{fontSize:"13px", color: "#A7A9B6"}}><HiLocationMarker color="#2D3779"/> London</span>
                </div>
              </div>
              <div>
              <DropdownButton variant="link"id="dropdown-basic-button" title={<BsThreeDotsVertical />}>
                <Dropdown.Item onClick={() => handleAction('Contact')}>Contact</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Note')}>Note</Dropdown.Item>
                <Dropdown.Item onClick={() => handleAction('Schedule')}>Schedule</Dropdown.Item>
            </DropdownButton>
              </div>
            </div>
          </div>
          )
         }) }
          </div>
         <Pagination style={{marginLeft: "0px"}}>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{32}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
        </Col>
          )
        })
        }
      </Row>
      
      
    {/* Edit Modal */}


    <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Body className='campModal'>
        <h2>Edit Influencer</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Client Name</Form.Label>
            <Form.Control disabled={editDisable} name="clientName" value={formData.clientName} onChange={handleChange} type="text" placeholder="Enter Client Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Role</Form.Label>
            <Form.Control disabled={editDisable} name="role" value={formData.role} onChange={handleChange} type="text" placeholder="Enter Role" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Industry</Form.Label>
            <Form.Select disabled={editDisable} name="industry" value={formData.industry} onChange={handleChange} defaultValue="Choose...">
              <option>--- Please Select ---</option>
              <option>Tech</option>
              <option>Bio</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control disabled={editDisable} name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Enter Industry" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
              disabled={editDisable} 
              name="location" 
              value={formData.diseaseArea} onChange={handleChange} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product</Form.Label>
            <Form.Control disabled={editDisable} name="product" value={formData.product}  onChange={handleChange} type="text" placeholder="Enter Product" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Disease area</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
              disabled={editDisable} 
              name="diseaseArea" 
              value={formData.diseaseArea} onChange={handleChange} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control disabled={editDisable} name="email" value={formData.email}  onChange={handleChange} type="email" placeholder="Enter Email address" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control disabled={editDisable} name="phoneNum" value={formData.phoneNum}  onChange={handleChange} type="num" placeholder="Enter Phone number" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control disabled={editDisable} name="comments" value={formData.comments}  onChange={handleChange} as="textarea" rows={2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Label</Form.Label>
            <Form.Control disabled={editDisable} name="labels" value={formData.labels}  onChange={handleChange} type="text" placeholder="Enter Label" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Meetings</Form.Label>
            <Form.Control disabled={editDisable} name="meeting" value={formData.meeting}  onChange={handleChange} type="text" placeholder="Enter Meetings" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Reminders</Form.Label>
            <Form.Control disabled={editDisable} name="reminders" value={formData.reminders}  onChange={handleChange} type="text" placeholder="Enter Reminders" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Tasks </Form.Label>
            <Form.Control disabled={editDisable} name="tasks" value={formData.tasks}  onChange={handleChange} type="text" placeholder="Enter Tasks" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Status </Form.Label>
          <Form.Select disabled={editDisable} name="dateAdded" value={formData.status}  onChange={handleChange} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Ongoing</option>
            <option>Done</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Date Added </Form.Label>
          <Form.Control disabled readOnly name="tasks" value={moment(dateRange[0]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Date Status Changed </Form.Label>
          <Form.Control disabled readOnly name="tasks" value={moment(dateRange[1]).format('LL')} type="text" style={{backgroundColor: "#F8FAFB"}} />
        </Form.Group>
        </Form>
        {editDisable && <Button className='primBtn cmmBtn' onClick={handleEdit}style={{width: "100%"}}>Edit</Button>}
        {!editDisable && <Button className='primBtn cmmBtn' style={{width: "100%"}}>Save</Button>}
      </Modal.Body>
    </Modal>


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
    </div>
  )
}
