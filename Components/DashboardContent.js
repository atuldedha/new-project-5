import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Form, Modal, Pagination, Row } from 'react-bootstrap'
import filter from "../public/Images/SlidersHorizontal.png"
import profilePic from "../public/Images/profile-circle-2 1.png"
import { BsInstagram, BsThreeDotsVertical } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import DiscoverInfluencerFilterDetail from './DiscoverInfluencerFilterDetail'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { Typeahead } from 'react-bootstrap-typeahead'
import moment from 'moment'
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image'

export default function DashboardContent() {

  const ref = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const options =["A","B","C","D","EE","FFF","GGG"]

  const [showFilter, setShowFilter] = useState(false);

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionClose = () => setActionShow(false);
  const handleActionShow = () => setActionShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  // const [noteShow, setNoteShow] = useState(false);
  // const handleNoteClose = () => setNoteShow(false);
  // const handleNoteShow = () => setNoteShow(true);

  // const [contactShow, setContactShow] = useState(false);
  // const handleContactClose = () => setContactShow(false);
  // const handleContactShow = () => setContactShow(true);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"]
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
]

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
  },[])
  
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
}, [])




const [editDisable, setEditDisable] = useState(true);

function handleEdit(){
  setEditDisable(prevState => !prevState)
}

const [singleSelections, setSingleSelections] = useState([]);

const [formData, setFormData] = useState({
  firstName: "", lastName: "", userName: "", platform: "", email:"",diseaseArea: "", location: "",comments: "",labels: "",
  meeting: "",reminders: "",tasks: "", status: "",dateAdded: "", dateStatusChanged: "",
})

const [newFormData, setNewFormData] = useState({
  firstName: "", lastName: "", userName: "", platform: "", email:"",diseaseArea: [], location: "",
})

const [filterData, setFilterData] = useState({
  platform: "", diseaseArea: "", location: "", followers: "", ageMin: "",  ageMax: "", statusMin: "", statusMax: "",
  addLabel: "", thoseWithTask: "", 
})
function handleChange(e){
  const {type,name,value} = e.target;
  setFormData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })
}

function handleNewInfluencer(e){
  const {name,value} = e.target;
  console.log(name)
  setNewFormData(prevData => {
   return {
    ...prevData,
    [name] : value,
   }
  })

  // if(singleSelections){
  //   setNewFormData(prevData => {
  //     return {
  //      ...prevData,
  //      diseaseArea: singleSelections,
  //     }
  //    })
  // }
}

function handleFilter(e){
  const {type, name, checked, value} = e.target;
  setFilterData(prevData => {
    return {
      ...prevData,
      [name]:type === "checkbox" ? checked : value,
    }
  })
}

function handleAction(actionType){
  handleActionShow()
  setAction(actionType)
}

function handleTypehead(selected,name){
  setNewFormData(prevData => {
    return {
     ...prevData,
     diseaseArea: selected,
    }
   })
   console.log(name)
}
console.log(formData)
console.log(newFormData)


  return (
    <div className='mainContent'>
      <div className='contentNav'>
        <div className='heading'>
          <h2>All Influencers</h2>
          <span>More than 290+ new Influencers</span>
        </div>
        <div>
        <Button className={showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn" } onClick={() => setShowFilter(prevState => !prevState)}>
            <FiFilter size={16} /> Filters 
            {!showFilter && <IoIosArrowDown style={{marginLeft: "10px"}}size={16}/>}
            {showFilter && <IoIosArrowUp style={{marginLeft: "10px"}}size={16}/>}
           </Button>
          <Button className="ligBtn cmmBtn"  onClick={handleExportShow}>Export Report</Button>
          <Button className="primBtn cmmBtn" onClick={handleShow}>Add new Influencer</Button>
        </div>
      </div>
      {showFilter && <DiscoverInfluencerFilterDetail />}
      <Row>
        { data.map((d , index) => {
          return (
        <Col lg={4} key={index}>
          <div className='dataCard'>
            <span className='s1'>{d.headingInner}: <span className='s2'>{d.num}</span></span>
         { [1,2,3,4,5,6].map((a, index) => {
          return (
            <div key={index} draggable="true" className='singleData draggable' >
            <Image src={profilePic} width="50px" onClick={handleEditShow}/>
            <div className='innerDataCard'>
              <div className='user' onClick={handleEditShow}>
                <span><BsInstagram color="#2D3779" size={14}/> Username{a}</span>
                <span style={{color: "#B5B5C3", display: 'flex', alignItems: "center" }}><Image src={USAFlag} width="15px" height="15px"/> &nbsp;  Heart Disease</span>
              </div>
              <div className='info' onClick={handleEditClose} style={{flexDirection: "row",alignItems: "center"}}>
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
         <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
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

      <Modal show={show} onHide={handleClose}>
      <Modal.Body className='campModal'>
        <h2>Add New Influencer</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleNewInfluencer}  name="userName" value={newFormData.userName} type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control  onChange={handleNewInfluencer} name="firstName" value={newFormData.firstName} type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control  onChange={handleNewInfluencer} name="lastName" value={newFormData.lastName} type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Platform</Form.Label>
          <Form.Select  onChange={handleNewInfluencer} name="platform" value={newFormData.platform} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Instagram</option>
            <option>Tiktok</option>
            <option>Youtube</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Disease area</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="diseaseArea"
              options={options}
              placeholder="--- Please Select ---" 
              onChange={(selected) => setNewFormData(prevData => ({...prevData,diseaseArea: selected,})
               )}
              selected={newFormData.diseaseArea}
              name="diseaseArea"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  onChange={handleNewInfluencer} name="email" value={newFormData.email} type="email" placeholder="Enter Email address" />
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
        </Form>
        <Button className='primBtn cmmBtn' style={{width: "100%"}}>Add New Influencer</Button>
      </Modal.Body>
    </Modal>


    {/* Edit Modal */}



    <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Body className='campModal'>
        <h2>Edit Influencer</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control disabled={editDisable} name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control disabled={editDisable} name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Enter Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control disabled={editDisable} name="userName" value={formData.userName} onChange={handleChange} type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Platform</Form.Label>
          <Form.Select disabled={editDisable} name="platform" value={formData.platform} onChange={handleChange} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>Instagram</option>
            <option>Tiktok</option>
            <option>Youtube</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control disabled={editDisable} name="email" value={formData.email}  onChange={handleChange} type="email" placeholder="Enter Email address" style={{backgroundColor: "#fff"}}/>
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
            <Form.Label>Location</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
              disabled={editDisable} name="location" 
              value={formData.location} onChange={handleChange} 
            />
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
       <Form.Select onChange={(e) => setActionContChoose(e.target.value)} defaultValue="Choose...">
            <option>--- Please Select ---</option>
            <option>DM</option>
            <option>Email</option>
        </Form.Select>
        {actionContChoose === "DM" && 
        <div className='actionDm'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
        </Form.Group>
        <div className='btnRightCont'>
          <Button className="primBtn cmmBtn sendBtn">Send</Button>
        </div>
        </div>}
        {(actionContChoose === "Default" || actionContChoose === "Email") && 
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
        </div>}
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
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter message" style={{backgroundColor: "#fff"}}/>
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
       <Form.Label>Add Influencers</Form.Label>
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

      <Modal show={exportShow} onHide={handleExportClose}>
        <Modal.Body>
           <b>Do you want to export:</b><br />
          <div className='expoModalCOnt'>
           <Form.Check type="checkbox" label="All" />
           <Form.Check type="checkbox" label="Identified" />
           <Form.Check type="checkbox" label="Contacted" />
           <Form.Check type="checkbox" label="Registered" />
          </div>
          <div className='btnCenCont'>
            <Button className="primBtn cmmBtn expoBtn">Export</Button>
          </div>
        </Modal.Body> 
      </Modal>
    </div>
  )
}
