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
  Tab,
  Tabs,
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
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRange, DateRangePicker } from "react-date-range";
import TimePicker from "react-times";

// use material theme
import "react-times/css/material/default.css";

import {
  FaLocationArrow,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PreviousCommentsComponent from "./PreviousCommentsComponent";

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

  const [optionLabel, setOptionLabel] = useState([
    "Product Designer",
    "UI",
    "App Design",
    "UX",
  ]);
  const [multiSelections, setMultiSelections] = useState([]);

  const data = [
    {
      headingInner: "Identified",
      num: "79660",
    },
    {
      headingInner: "Contracted",
      num: "29670",
    },
    {
      headingInner: "Registered",
      num: "89670",
    },
    {
      headingInner: "To be approved",
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
    userName: "",
    platform: "",
    email: "",
    diseaseArea: [],
    location: "",
    followers: "",
    city: "",
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
  const [subData, setSubData] = useState(Array(6).fill(1));
  function handleAction(actionType, position, index) {
    console.log(position, index);
    if (actionType === "Remove") {
      return data.map((d, i) => {
        if (i === position) {
          setSubData(
            subData.filter((e, f) => {
              return f !== index;
            })
          );
        }
      });
    }
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

  const [previousComments, setPreviousComments] = useState([
    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    "Cicero are also reproduced in their exact original form",
  ]);
  const [editing, setEditing] = useState(false);
  const handlePreviousCommentAction = (actionName, position) => {
    if (actionName === "remove") {
      setPreviousComments(
        previousComments.filter((comment, index) => {
          return index !== position;
        })
      );
    }
    if (actionName === "edit") {
      setEditing(true);
    }
    if (actionName === "cancel") {
      setEditing(false);
    }
  };

  const saveComment = (newComment, index) => {
    let temp = previousComments;
    temp[index] = newComment;
    setPreviousComments(
      previousComments.map((comment, pos) => {
        if (pos === index) {
          {
            return newComment;
          }
        } else {
          return comment;
        }
      })
    );
  };

  const [beginDate, setBeginDate] = useState(new Date().toLocaleDateString());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:00");
  const [commentText, setCommentText] = useState("");
  const calendarRef = useRef();
  const [allDay, setAllDay] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const optionsLabel = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  const optionsMeetings = [
    "Meeting 1",
    "Meeting 2",
    "Meeting 3",
    "Meeting 4",
    "Meeting 5",
  ];
  const optionsReminders = [
    "Reminder 1",
    "Reminder 2",
    "Reminder 3",
    "Reminder 4",
    "Reminder 5",
  ];
  const optionsTask = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
  const [multiSelectionsLabel, setMultiSelectionsLabel] = useState([
    "Label 1",
    "Label 2",
  ]);
  const [multiSelectionsMeetings, setMultiSelectionsMeetings] = useState([
    "Meeting 1",
    "Meeting 2",
  ]);
  const [multiSelectionsReminder, setMultiSelectionsReminder] = useState([
    "Reminder 1",
    "Reminder 2",
  ]);
  const [multiSelectionsTask, setMultiSelectionsTask] = useState([
    "Task 1",
    "Task 2",
  ]);

  const addMoreLabels = (e) => {
    e.preventDefault();
  };

  const handleSelect = (event) => {
    setBeginDate(new Date(event).toLocaleDateString());
    setOpenDatePicker(false);
  };

  const openDateRange = () => {
    setOpenDatePicker(true);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.hour + ":" + event.minute);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.hour + ":" + event.minute);
  };

  const addComent = () => {
    setPreviousComments([...previousComments, commentText]);
    setCommentText("");
  };
  const handleLabelChange = (event) => {
    console.log(event);
    // event?.map((item) => {
    //   if (item.customOption) {
    //     if (!optionLabel.find((label) => label === item.name)) {
    //       setOptionLabel([...optionLabel, item.name]);
    //     }
    //   }
    // });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenDatePicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  const handleAllDayCheck = (event) => {
    console.log(event);
    setAllDay(event.target.checked);
  };
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
              showFilter
                ? "outlinedBtn cmmBtn active filterBtn"
                : "outlinedBtn cmmBtn filterBtn"
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
          <Button
            className="ligBtn cmmBtn filterBtn"
            onClick={handleExportShow}
          >
            Export
          </Button>
          <Button className="primBtn cmmBtn filterBtn" onClick={handleShow}>
            Add Influencer
          </Button>
        </div>
      </div>
      {showFilter && <DiscoverInfluencerFilterDetail />}
      <div className="rowContainer">
        {data.map((d, position) => {
          return (
            <div className="columContainer" key={position}>
              <div className="dataCard">
                <div className="spanWrapper">
                  <span className="s1">
                    {d.headingInner}: <span className="s2">{d.num}</span>
                  </span>
                </div>

                {subData.map((a, index) => {
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
                              onClick={() =>
                                handleAction("Remove", position, index)
                              }
                            >
                              Remove
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
            </div>
          );
        })}
      </div>

      <Modal show={show} onHide={handleClose} className="addNewModalContainer">
        <Modal.Body className="addNewModal">
          <div className="actionCloseImage" onClick={handleClose}>
            <Image
              src="/Images/close.png"
              alt="close"
              width="10px"
              height="10px"
              objectFit="contain"
            />
          </div>
          <div className="addNewModalHeading">Add Influencer</div>
          <div className="addNewModalFormContainer">
            <div className="addNewModalFormLeft">
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="addNewModalFromValue">
                    Username
                  </Form.Label>
                  <Form.Control
                    onChange={handleNewInfluencer}
                    name="userName"
                    value={newFormData.userName}
                    type="text"
                    className="addNewModalTextField"
                    placeholder="Enter username"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="addNewModalFromValue">
                    Followers
                  </Form.Label>
                  <Form.Control
                    onChange={handleNewInfluencer}
                    name="followers"
                    value={newFormData.followers}
                    type="text"
                    className="addNewModalTextField"
                    placeholder="Enter followers"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label className="addNewModalFromValue">
                    Email address
                  </Form.Label>
                  <Form.Control
                    onChange={handleNewInfluencer}
                    name="email"
                    value={newFormData.email}
                    type="email"
                    className="addNewModalTextField"
                    placeholder="Enter Email"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="addNewModalFormRight">
              <Form>
                <Form.Group as={Col} controlId="formGridState" className="mb-3">
                  <Form.Label className="addNewModalFromValue">
                    Social Media
                  </Form.Label>
                  <Form.Select
                    className="addNewModalTextField"
                    onChange={handleNewInfluencer}
                    name="platform"
                    value={newFormData.platform}
                  >
                    <option>Select Social Media</option>
                    <option>Instagram</option>
                    <option>Tiktok</option>
                    <option>Youtube</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 addNewModalDiseaseWrapper"
                  controlId="formGroupEmail"
                >
                  <Form.Label className="addNewModalFromValue">
                    Disease area
                  </Form.Label>
                  <Typeahead
                    id="basic-typeahead-single"
                    labelKey="diseaseArea"
                    options={options}
                    placeholder="UK, Fashion, Food"
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
                <Form.Group
                  className="mb-3 addNewModalLocationContainer"
                  controlId="formGroupEmail"
                >
                  <Form.Label className="addNewModalFromValue">
                    Location
                  </Form.Label>
                  <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    options={options}
                    placeholder="Select location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <Button className="primBtn cmmBtn addNewModalBtn">
            Add Influencer
          </Button>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={editShow} onHide={handleEditClose} id="editClient">
        <Modal.Body>
          <div className="editHeader">
            <h2>Influencer Name</h2>
            <div className="btnActions">
              {showConfirm && (
                <button
                  type="button"
                  class="ligBtn cmmBtn btn btn-primary"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  Cancel
                </button>
              )}
              {!showConfirm && (
                <button
                  type="button"
                  class="primBtn cmmBtn btn btn-primary"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  Edit
                </button>
              )}
              {showConfirm && (
                <button
                  type="button"
                  class="primBtn cmmBtn btn btn-primary"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
          <Form>
            <Tabs defaultActiveKey="info" id="editClients">
              <Tab eventKey="info" title="Info">
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        disabled={!showConfirm ? true : false}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        disabled={!showConfirm ? true : false}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        disabled={!showConfirm ? true : false}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter Email address"
                        style={{ backgroundColor: "#fff" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        disabled={!showConfirm ? true : false}
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Username"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* <hr/> */}
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Social Media</Form.Label>
                      <Form.Select
                        disabled={!showConfirm ? true : false}
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        defaultValue="Choose..."
                      >
                        <option>Please Select</option>
                        <option>Instagram</option>
                        <option>Tiktok</option>
                        <option>Youtube</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Disease area</Form.Label>
                      <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        options={options}
                        placeholder="Please Select"
                        disabled={!showConfirm ? true : false}
                        name="diseaseArea"
                        value={formData.diseaseArea}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Location</Form.Label>
                      <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        options={options}
                        placeholder="Please Select"
                        disabled={!showConfirm ? true : false}
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="management" title="Management">
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Comments</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        disabled={!showConfirm ? true : false}
                        style={{ backgroundColor: "#fff", height: "81.5px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group
                      className="mb-3 labelsSection"
                      controlId="formGroupEmail"
                    >
                      <Form.Label>Labels</Form.Label>
                      <Typeahead
                        id="basic-typeahead-multiple"
                        labelKey="name"
                        multiple
                        onChange={setMultiSelectionsLabel}
                        options={optionsLabel}
                        placeholder="--- Select Label ---"
                        selected={multiSelectionsLabel}
                        disabled={!showConfirm ? true : false}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group
                      className="mb-3 labelsSection"
                      controlId="formGroupEmail"
                      id="meetingsSection"
                    >
                      <Form.Label>Meetings</Form.Label>
                      <Typeahead
                        disabled={!showConfirm ? true : false}
                        id="basic-typeahead-multiple"
                        labelKey="name"
                        multiple
                        onChange={setMultiSelectionsMeetings}
                        options={optionsMeetings}
                        placeholder="--- Select Meetings ---"
                        selected={multiSelectionsMeetings}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group
                      className="mb-3 labelsSection"
                      controlId="formGroupEmail"
                      id="remindersSection"
                    >
                      <Form.Label>Reminders</Form.Label>
                      <Typeahead
                        disabled={!showConfirm ? true : false}
                        id="basic-typeahead-multiple"
                        labelKey="name"
                        multiple
                        onChange={setMultiSelectionsReminder}
                        options={optionsReminders}
                        placeholder="--- Select Reminder ---"
                        selected={multiSelectionsReminder}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs={6}>
                    <Form.Group
                      className="mb-3 labelsSection"
                      controlId="formGroupEmail"
                      id="tasksSection"
                    >
                      <Form.Label>Tasks</Form.Label>
                      <Typeahead
                        disabled={!showConfirm ? true : false}
                        id="basic-typeahead-multiple"
                        labelKey="name"
                        multiple
                        onChange={setMultiSelectionsTask}
                        options={optionsTask}
                        placeholder="Select Task"
                        selected={multiSelectionsTask}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Status </Form.Label>
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        defaultValue="Choose..."
                        disabled={!showConfirm ? true : false}
                      >
                        <option>Select Status</option>
                        <option>Ongoing</option>
                        <option>Done</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Date Added</Form.Label>
                      <Form.Control
                        name="tasks"
                        type="text"
                        style={{ backgroundColor: "#F8FAFB" }}
                        disabled={!showConfirm ? true : false}
                        value={new Date().toLocaleDateString()}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formGridState">
                      <Form.Label>Date Status Changed </Form.Label>
                      {showConfirm ? (
                        <Form.Control
                          name="tasks"
                          type="text"
                          style={{ backgroundColor: "#F8FAFB" }}
                          disabled={!showConfirm ? true : false}
                          value={new Date().toLocaleDateString()}
                        />
                      ) : (
                        <Form.Control
                          readOnly
                          name="tasks"
                          value=""
                          type="text"
                          style={{ backgroundColor: "#F8FAFB" }}
                          disabled={!showConfirm ? true : false}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <Modal show={editShow} onHide={handleEditClose}>
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
      </Modal> */}

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
            <Form.Label className="messageHeading messageSelection">
              Method
            </Form.Label>
            <Form.Select
              onChange={(e) => setActionContChoose(e.target.value)}
              defaultValue="Choose..."
            >
              <option>Email</option>
              <option>Direct Message</option>
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
                    placeholder="Enter Email"
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
                    placeholder="Enter Message"
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
            <div className="scheduleModalHeading">Note</div>
            <Form.Label className="emailModalSubject">Type</Form.Label>
            <Form.Select
              onChange={(e) => setActionContChoose(e.target.value)}
              defaultValue="Choose..."
              className="noteModalTextField"
            >
              <option>Comment</option>
              <option>Label</option>
            </Form.Select>
            {(actionContChoose === "Default" ||
              actionContChoose === "Comment") && (
              <div>
                <Form.Label className="scheduleModalSubject">
                  Comment
                </Form.Label>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    className="emailModalTextArea"
                    as="textarea"
                    value={commentText}
                    placeholder="Enter comment"
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={3}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Form.Group>

                {previousComments.length > 0 ? (
                  <div className="noteModalPreviousWrapper">
                    <Form.Label className="emailModalSubject">
                      Previous Comments
                    </Form.Label>
                    {previousComments.map((comment, index) => (
                      <PreviousCommentsComponent
                        key={index}
                        comment={comment}
                        handleEditClose={handleEditClose}
                        handlePreviousCommentAction={
                          handlePreviousCommentAction
                        }
                        index={index}
                        saveComment={saveComment}
                      />
                    ))}
                  </div>
                ) : null}
                <div className="btnRightCont">
                  <Button
                    className="primBtn cmmBtn noteModalBtn"
                    onClick={addComent}
                  >
                    Add Comment
                  </Button>
                </div>
              </div>
            )}
            {actionContChoose === "Label" && (
              <div className="noteModalGroup">
                <Form.Group className="labelGroup" controlId="formGridState">
                  <Form.Label className="noteModalSelection">
                    Existing labels:
                  </Form.Label>
                  {optionLabel?.length > 3 ? (
                    <>
                      <Form.Label className="noteModalOptions">{`${optionLabel[0]}`}</Form.Label>
                      <span className="noteModalSelection">, </span>
                      <Form.Label className="noteModalOptions">{`${optionLabel[1]}`}</Form.Label>
                      <span className="noteModalSelection">, </span>
                      <Form.Label className="noteModalOptions">{`${optionLabel[2]}`}</Form.Label>
                    </>
                  ) : (
                    optionLabel.map((label) => {
                      <>
                        <Form.Label className="noteModalOptions">
                          {label}
                        </Form.Label>
                        <span className="noteModalSelection">, </span>
                      </>;
                    })
                  )}
                  <Typeahead
                    defaultSelected={optionLabel.slice(0, 1)}
                    id="public-methods-example"
                    allowNew
                    onChange={handleLabelChange}
                    labelKey="name"
                    multiple
                    options={optionLabel}
                    placeholder="Add Label"
                    newSelectionPrefix="Add a new label: "
                    ref={ref}
                  />
                </Form.Group>
                <div className="btnRightCont">
                  <Button className="primBtn cmmBtn schedultBtn">Save</Button>
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
            <div className="dateTime">
              <div className="dateCont">
                <Form.Label className="emailModalSubject">Date</Form.Label>
                <Form.Control
                  type="text"
                  value={`${beginDate}`}
                  style={{ backgroundColor: "#fff" }}
                  className="emailModalTextField"
                  onClick={openDateRange}
                />
              </div>
              <div className="timeLabel">
                <Form.Label className="emailModalSubject">Time</Form.Label>
                <div className="timeContainer">
                  <div style={{ marginRight: "10px" }}>
                    <TimePicker
                      time={startTime}
                      onTimeChange={handleStartTimeChange}
                    />
                  </div>
                  <span>-</span>
                  <TimePicker
                    time={endTime}
                    onTimeChange={handleEndTimeChange}
                  />
                </div>
              </div>
              <div className="allDayCont">
                <span className="emailModalSubject">{"All Day "}</span>
                <Form.Check
                  type="checkbox"
                  checked={allDay}
                  onChange={handleAllDayCheck}
                  className="checkboxContainer"
                />
              </div>
            </div>
            {openDatePicker && (
              <div className="date" ref={calendarRef}>
                <Calendar onChange={handleSelect} minDate={new Date()} />
              </div>
            )}
            {/* <Form.Group
              className="mb-3 scheduleDateGroup"
              controlId="formGroupEmail"
            >
              <Form.Label className="emailModalSubject">Date</Form.Label>
              <Form.Control
                type="text"
                value={`${beginDate}`}
                style={{ backgroundColor: "#fff" }}
                className="emailModalTextField"
                onClick={openDateRange}
              />
              <div className="timeCont">
                <Form.Label className="emailModalSubject">Time</Form.Label>
                <TimePicker
                  time={startTime}
                  onTimeChange={handleStartTimeChange}
                />
                <TimePicker time={endTime} onTimeChange={handleEndTimeChange} />
              </div>
              <div className="checkboxCont">
                <span className="emailModalSubject">{"All Day "}</span>
                <Form.Check
                  type="checkbox"
                  checked={allDay}
                  onChange={handleAllDayCheck}
                />
              </div>
            </Form.Group> */}
            <Form.Group
              className="mb-3 scheduleModalInfluenersGroup"
              controlId="formGroupEmail"
            >
              <Form.Label className="emailModalSubject">Influencer</Form.Label>
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
              <Form.Label className="emailModalSubject">Description</Form.Label>
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
