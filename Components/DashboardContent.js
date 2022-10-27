import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
  Pagination,
  Row,
} from "react-bootstrap";
import profilePic from "../public/Images/profile-circle-2 1.png";
import { BsInstagram, BsThreeDotsVertical } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import DiscoverInfluencerFilterDetail from "./DiscoverInfluencerFilterDetail";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { Typeahead } from "react-bootstrap-typeahead";
import moment from "moment";
import USAFlag from "../public/Images/usaFlag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import {
  FaLocationArrow,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function DashboardContent() {
  const ref = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];

  const [showFilter, setShowFilter] = useState(false);

  const [action, setAction] = useState();

  const [actionShow, setActionShow] = useState(false);
  const handleActionShow = () => setActionShow(true);

  const [exportShow, setExportShow] = useState(false);
  const handleExportClose = () => setExportShow(false);
  const handleExportShow = () => setExportShow(true);

  const [actionContChoose, setActionContChoose] = useState("Default");
  const handleActionClose = () => {
    setActionShow(false);
    setAction();
    setActionContChoose("Default");
  };
  // const [noteShow, setNoteShow] = useState(false);
  // const handleNoteClose = () => setNoteShow(false);
  // const handleNoteShow = () => setNoteShow(true);

  // const [contactShow, setContactShow] = useState(false);
  // const handleContactClose = () => setContactShow(false);
  // const handleContactShow = () => setContactShow(true);

  const [hover, setHover] = useState(false);

  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];
  const [multiSelections, setMultiSelections] = useState([]);

  const data = [
    {
      headingInner: "Contacted",
      num: "79660",
    },
    {
      headingInner: "Registered",
      num: "29670",
    },
    {
      headingInner: "Identified",
      num: "89670",
    },
    {
      headingInner: "Scheduled Call",
      num: "100",
    },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  useEffect(() => {
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".dataCard");
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    }, []);

    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }, []);

  const [editDisable, setEditDisable] = useState(true);

  function handleEdit() {
    setEditDisable((prevState) => !prevState);
  }

  const [singleSelections, setSingleSelections] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    platform: "",
    email: "",
    diseaseArea: "",
    location: "",
    comments: "",
    labels: "",
    meeting: "",
    reminders: "",
    tasks: "",
    status: "",
    dateAdded: "",
    dateStatusChanged: "",
  });

  const [newFormData, setNewFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    platform: "",
    email: "",
    diseaseArea: [],
    location: "",
  });

  const [filterData, setFilterData] = useState({
    platform: "",
    diseaseArea: "",
    location: "",
    followers: "",
    ageMin: "",
    ageMax: "",
    statusMin: "",
    statusMax: "",
    addLabel: "",
    thoseWithTask: "",
  });
  function handleChange(e) {
    const { type, name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleNewInfluencer(e) {
    const { name, value } = e.target;
    console.log(name);
    setNewFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    // if(singleSelections){
    //   setNewFormData(prevData => {
    //     return {
    //      ...prevData,
    //      diseaseArea: singleSelections,
    //     }
    //    })
    // }
  }

  function handleFilter(e) {
    const { type, name, checked, value } = e.target;
    setFilterData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleAction(actionType) {
    handleActionShow();
    setAction(actionType);
  }

  function handleTypehead(selected, name) {
    setNewFormData((prevData) => {
      return {
        ...prevData,
        diseaseArea: selected,
      };
    });
    console.log(name);
  }
  console.log(formData);
  console.log(newFormData);
  return (
    <div className="mainContent">
      <div className="contentNav">
        <div className="heading">
          <h2>All Influencers</h2>
          <span>More than 290+ new Influencers</span>
        </div>
        <div>
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={
              showFilter ? "outlinedBtn cmmBtn active" : "outlinedBtn cmmBtn"
            }
            onClick={() => setShowFilter((prevState) => !prevState)}
          >
            <div className="filterContent">
              <Image
                src={
                  hover || showFilter
                    ? "/Images/sliderWhite.png"
                    : "/Images/slider.png"
                }
                alt="filters"
                width="18px"
                height="18px"
                objectFit="contain"
                className="filterImage"
              />
              <span className="filterText">Filter</span>
            </div>
          </Button>
          <Button className="ligBtn cmmBtn" onClick={handleExportShow}>
            Export
          </Button>
          <Button className="primBtn cmmBtn" onClick={handleShow}>
            Add Influencer
          </Button>
        </div>
      </div>
      {showFilter && <DiscoverInfluencerFilterDetail />}
      <div className="rowContainer">
        {data.map((d, index) => {
          return (
            <div className="columContainer" key={index}>
              <div className="dataCard">
                <div className="spanWrapper">
                  <span className="s1">
                    {d.headingInner}: <span className="s2">{d.num}</span>
                  </span>
                </div>

                {[1, 2, 3, 4, 5, 6].map((a, index) => {
                  return (
                    <div
                      key={index}
                      draggable="true"
                      className="singleData draggable"
                    >
                      <Image
                        src={profilePic}
                        width="50px"
                        onClick={handleEditShow}
                      />
                      <div className="innerDataCard">
                        <div className="user" onClick={handleEditShow}>
                          <div className="userContainer">
                            <span>
                              <BsInstagram color="#2D3779" size={14} />
                              {" Username"} {" 1.5K"}
                            </span>
                          </div>
                          <div className="userContainer">
                            <span>Switzerland</span>
                            <span
                              style={{
                                color: "#B5B5C3",
                                marginLeft: "2px",
                              }}
                            >
                              Heart Disease
                            </span>
                          </div>
                        </div>
                        <div
                          className="info"
                          onClick={handleEditClose}
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <DropdownButton
                            variant="link"
                            id="dropdown-basic-button"
                            title={<BsThreeDotsVertical />}
                          >
                            <Dropdown.Item
                              onClick={() => handleAction("Contact")}
                            >
                              Contact
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleAction("Note")}>
                              Note
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleAction("Schedule")}
                            >
                              Schedule
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleAction("Remove")}
                            >
                              Remove
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            </div>
          );
        })}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="campModal">
          <h2>Add New Influencer</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="userName"
                value={newFormData.userName}
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="firstName"
                value={newFormData.firstName}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="lastName"
                value={newFormData.lastName}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Platform</Form.Label>
              <Form.Select
                onChange={handleNewInfluencer}
                name="platform"
                value={newFormData.platform}
                defaultValue="Choose..."
              >
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
                onChange={(selected) =>
                  setNewFormData((prevData) => ({
                    ...prevData,
                    diseaseArea: selected,
                  }))
                }
                selected={newFormData.diseaseArea}
                name="diseaseArea"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleNewInfluencer}
                name="email"
                value={newFormData.email}
                type="email"
                placeholder="Enter Email address"
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
          </Form>
          <Button className="primBtn cmmBtn" style={{ width: "100%" }}>
            Add New Influencer
          </Button>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}

      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Body className="campModal">
          <h2>Edit Influencer</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Platform</Form.Label>
              <Form.Select
                disabled={editDisable}
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Instagram</option>
                <option>Tiktok</option>
                <option>Youtube</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Email address"
                style={{ backgroundColor: "#fff" }}
              />
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
                value={formData.diseaseArea}
                onChange={handleChange}
              />
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
                value={formData.location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                as="textarea"
                rows={2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="labels"
                value={formData.labels}
                onChange={handleChange}
                type="text"
                placeholder="Enter Label"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Meetings</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="meeting"
                value={formData.meeting}
                onChange={handleChange}
                type="text"
                placeholder="Enter Meetings"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Reminders</Form.Label>
              <Form.Control
                disabled={editDisable}
                name="reminders"
                value={formData.reminders}
                onChange={handleChange}
                type="text"
                placeholder="Enter Reminders"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Tasks </Form.Label>
              <Form.Control
                disabled={editDisable}
                name="tasks"
                value={formData.tasks}
                onChange={handleChange}
                type="text"
                placeholder="Enter Tasks"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Status </Form.Label>
              <Form.Select
                disabled={editDisable}
                name="dateAdded"
                value={formData.status}
                onChange={handleChange}
                defaultValue="Choose..."
              >
                <option>--- Please Select ---</option>
                <option>Ongoing</option>
                <option>Done</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Date Added </Form.Label>
              <Form.Control
                disabled
                readOnly
                name="tasks"
                value={moment(dateRange[0]).format("LL")}
                type="text"
                style={{ backgroundColor: "#F8FAFB" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridState">
              <Form.Label>Date Status Changed </Form.Label>
              <Form.Control
                disabled
                readOnly
                name="tasks"
                value={moment(dateRange[1]).format("LL")}
                type="text"
                style={{ backgroundColor: "#F8FAFB" }}
              />
            </Form.Group>
          </Form>
          {editDisable && (
            <Button
              className="primBtn cmmBtn"
              onClick={handleEdit}
              style={{ width: "100%" }}
            >
              Edit
            </Button>
          )}
          {!editDisable && (
            <Button className="primBtn cmmBtn" style={{ width: "100%" }}>
              Save
            </Button>
          )}
        </Modal.Body>
      </Modal>

      {/* actionModal */}

      <Modal
        show={actionShow}
        onHide={handleActionClose}
        className="optionsModal"
      >
        {action === "Contact" && (
          <Modal.Body className="actdionModal">
            <div className="actionCloseImage" onClick={handleActionClose}>
              <Image
                src="/Images/close.png"
                alt="close"
                width="10px"
                height="10px"
                objectFit="contain"
              />
            </div>
            <div className="actionModalHeading">Contact @username</div>
            <Form.Select
              onChange={(e) => setActionContChoose(e.target.value)}
              defaultValue="Choose..."
              className="messageSelection"
            >
              <option>Please Select</option>
              <option>Direct Message</option>
              <option>Email</option>
            </Form.Select>
            {actionContChoose === "Direct Message" && (
              <div className="actionDm">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="messageHeading">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    type="text"
                    placeholder="Text"
                    style={{ backgroundColor: "#fff" }}
                    className="emailModalTextArea"
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Send</Button>
                </div>
              </div>
            )}
            {(actionContChoose === "Default" ||
              actionContChoose === "Email") && (
              <div className="actionDm">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="emailModalSubject">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    style={{ backgroundColor: "#fff" }}
                    className="emailModalTextField"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="emailModalSubject">
                    Receiver
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name@company.com"
                    style={{ backgroundColor: "#fff" }}
                    className="emailModalTextField"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="emailModalSubject">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    style={{ backgroundColor: "#fff" }}
                    placeholder="Text"
                    className="emailModalTextArea"
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Send</Button>
                </div>
              </div>
            )}
          </Modal.Body>
        )}

        {action === "Note" && (
          <Modal.Body className="actdionModal">
            <h2>Note</h2>
            <Form.Select
              onChange={(e) => setActionContChoose(e.target.value)}
              defaultValue="Choose..."
            >
              <option>--- Please Select ---</option>
              <option>Comment</option>
              <option>Label</option>
            </Form.Select>
            {(actionContChoose === "Default" ||
              actionContChoose === "Comment") && (
              <div className="actionDm">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Add Text</Button>
                </div>
              </div>
            )}
            {actionContChoose === "Label" && (
              <div className="actionLabel">
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
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn sendBtn">Save</Button>
                </div>
              </div>
            )}
          </Modal.Body>
        )}

        {action === "Schedule" && (
          <Modal.Body className="scheduleModal">
            <div className="actionCloseImage" onClick={handleActionClose}>
              <Image
                src="/Images/close.png"
                alt="close"
                width="10px"
                height="10px"
                objectFit="contain"
              />
            </div>
            <div className="scheduleModalHeading">Schedule</div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="emailModalSubject">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Title"
                className="scheduleModalTextField"
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="emailModalSubject">Type</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                className="scheduleModalTextField"
              >
                <option>Please Select</option>
                <option>Meeting</option>
                <option>Task</option>
                <option>Reminder</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="emailModalSubject">Time</Form.Label>
              <DatePicker
                className="scheduleModalTextField"
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
              <Form.Label className="emailModalSubject">
                Add Influencers
              </Form.Label>
              <Typeahead
                id="basic-typeahead-multiple"
                labelKey="name"
                multiple
                onChange={setMultiSelections}
                options={options}
                placeholder="Please Select"
                selected={multiSelections}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="emailModalSubject">
                Add Description
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add description"
                className="scheduleModalTextField"
                rows={2}
                style={{ backgroundColor: "#fff" }}
              />
            </Form.Group>
            <div className="btnRightCont">
              <Button className="primBtn cmmBtn schedultBtn">Save</Button>
            </div>
          </Modal.Body>
        )}
      </Modal>

      <div className="exportModal">
        <Modal show={exportShow} onHide={handleExportClose}>
          <Modal.Body className="modalBody">
            <div className="closeImage" onClick={handleExportClose}>
              <Image
                src="/Images/close.png"
                alt="close"
                width="10px"
                height="10px"
                objectFit="contain"
              />
            </div>
            <div className="exportModalHeading">Do you want to export:</div>
            <br />
            <div className="expoModalCont">
              <Form.Check type="checkbox" label="All" />
              <Form.Check type="checkbox" label="Identified" />
              <Form.Check type="checkbox" label="Contacted" />
              <Form.Check type="checkbox" label="Registered" />
              <Form.Check type="checkbox" label="To be Approved" />
            </div>
            <div className="btnCenCont">
              <Button className="primBtn cmmBtn expoBtn">Export</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
