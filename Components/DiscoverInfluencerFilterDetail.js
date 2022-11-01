import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

export default function DiscoverInfluencerFilterDetail() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [filterCount, setFilterCount] = useState("00");
  const [filtersActive, setFiltersActive] = useState({
    platformFilter: false,
    disease: false,
    followers: false,
    location: false,
    age: false,
    days: false,
    label: false,
    task: false,
  });
  const [startDate, endDate] = dateRange;
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [minFollowers, setMinFollowers] = useState();
  const [maxFollowers, setMaxFollowers] = useState();
  const [minDays, setMinDays] = useState("");
  const [maxDays, setMaxDays] = useState("");
  let minAgeApplied = false;
  let maxAgeApplied = false;
  let minFollowersApplied = false;
  let maxFollowersApplied = false;
  let minDaysApplied = false;
  let maxDaysApplied = false;
  const ref = useRef();
  const options = ["A", "B", "C", "D", "EE", "FFF", "GGG"];
  const optionLabel = ["Product Designer", "UI", "App Design", "UX"];

  const platformRef = useRef("Please Select");
  const diseaseRef = useRef();
  const locationRef = useRef();
  const taskRef = useRef("Please Select");

  const handleDropdownSelection = (e, target) => {
    if (e.target.value !== "Select Platform") {
      setFiltersActive({ ...filtersActive, [target]: true });
    } else {
      setFiltersActive({ ...filtersActive, [target]: false });
    }
    if (target === "platform") {
      platformRef.current = e.target.value;
    }
    if (target === "task") {
      taskRef.current = e.target.value;
    }
  };

  const handleTypeAheadSelection = (e, target) => {
    if (e.length > 0) {
      setFiltersActive({ ...filtersActive, [target]: true });
    } else {
      setFiltersActive({ ...filtersActive, [target]: false });
    }
  };

  const handleAgeSelection = () => {
    if (minAgeApplied || maxAgeApplied) {
      setFiltersActive({ ...filtersActive, age: true });
    } else {
      setFiltersActive({ ...filtersActive, age: false });
    }
  };
  const handleFollowersSelection = () => {
    if (minFollowersApplied || maxFollowersApplied) {
      setFiltersActive({ ...filtersActive, followers: true });
    } else {
      setFiltersActive({ ...filtersActive, followers: false });
    }
  };

  const handleDaysSelection = () => {
    if (minDaysApplied || maxAgeApplied) {
      setFiltersActive({ ...filtersActive, days: true });
    } else {
      setFiltersActive({ ...filtersActive, days: false });
    }
  };

  const clearFilters = () => {
    setFilterCount("00");
    ref.current.clear();
    platformRef.current = "Please Select";
    diseaseRef.current.clear();
    locationRef.current.clear();
    taskRef.current = "Please Select";
    setMaxAge("");
    setMinAge("");
    setMinFollowers("");
    setMaxFollowers("");
    setMinDays("");
    setMaxDays("");
    setFiltersActive({
      platformFilter: false,
      disease: false,
      followers: false,
      location: false,
      age: false,
      days: false,
      label: false,
    });
  };

  useEffect(() => {
    setFilterCount(
      "0" + Object.values(filtersActive).reduce((a, item) => a + item, 0)
    );
  }, [filtersActive]);
  return (
    <Row>
      <Col>
        <div className="filterContainer">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">
                  Platform
                </Form.Label>
                <Form.Select
                  className="filterTextField"
                  defaultValue="Choose..."
                  onChange={(e) => handleDropdownSelection(e, "platformFilter")}
                  ref={platformRef}
                  value={platformRef.current}
                >
                  <option>Select Platform</option>
                  <option>Instagram</option>
                  <option>Youtube</option>
                  <option>Tiktok</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">
                  Disease Area
                </Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  onChange={(e) => handleTypeAheadSelection(e, "disease")}
                  options={options}
                  placeholder="Select Disease Area"
                  ref={diseaseRef}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">
                  Location
                </Form.Label>
                <Typeahead
                  onChange={(e) => handleTypeAheadSelection(e, "location")}
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="Select Location"
                  ref={locationRef}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">
                  Followers
                </Form.Label>
                <Row className="mb-6">
                  <div className="container">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={minFollowers}
                        onChange={(e) => {
                          if (e.target.value != null) {
                            minFollowersApplied = true;
                          }
                          setMinFollowers(e.target.value);
                          handleFollowersSelection();
                        }}
                      />
                    </Form.Group>
                    <span className="dash">-</span>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={maxFollowers}
                        onChange={(e) => {
                          if (e.target.value) {
                            maxFollowersApplied = true;
                          }
                          setMaxFollowers(e.target.value);
                          handleFollowersSelection();
                        }}
                      />
                    </Form.Group>
                  </div>
                </Row>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">Age</Form.Label>
                <Row className="mb-6">
                  <div className="container">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={minAge}
                        onChange={(e) => {
                          if (e.target.value != null) {
                            minAgeApplied = true;
                          }
                          setMinAge(e.target.value);
                          handleAgeSelection();
                        }}
                      />
                    </Form.Group>
                    <span className="dash">-</span>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={maxAge}
                        onChange={(e) => {
                          if (e.target.value) {
                            maxAgeApplied = true;
                          }
                          setMaxAge(e.target.value);
                          handleAgeSelection();
                        }}
                      />
                    </Form.Group>
                  </div>
                </Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">
                  Status changed
                </Form.Label>
                <Row className="mb-6">
                  <div className="container">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={minDays}
                        onChange={(e) => {
                          if (e.target.value != null) {
                            minDaysApplied = true;
                          }
                          setMinDays(e.target.value);
                          handleDaysSelection();
                        }}
                      />
                    </Form.Group>
                    <span className="dash">-</span>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={maxDays}
                        onChange={(e) => {
                          if (e.target.value) {
                            maxDaysApplied = true;
                          }
                          setMaxDays(e.target.value);
                          handleDaysSelection();
                        }}
                      />
                    </Form.Group>
                  </div>
                </Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">Label</Form.Label>
                <Typeahead
                  id="public-methods-example"
                  labelKey="name"
                  multiple
                  options={optionLabel}
                  onChange={(e) => handleTypeAheadSelection(e, "label")}
                  placeholder="Add Label"
                  allowNew
                  newSelectionPrefix="Add a new label: "
                  ref={ref}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="addNewModalFromValue">Task</Form.Label>
                <Form.Select
                  className="filterTextField"
                  defaultValue="Choose..."
                  onChange={(e) => handleDropdownSelection(e, "task")}
                  ref={taskRef}
                  value={taskRef.current}
                >
                  <option>Select Platform</option>
                  <option>Show All</option>
                  <option>With Task</option>
                  <option>Without Task</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          <div className="btnCont" style={{ justifyContent: "space-between" }}>
            <div></div>`
            <div>
              <Button className="primBtn cmmBtn">Filter</Button>
              <Button className="ligBtn cmmBtn" onClick={clearFilters}>
                <span className="clrBtn" style={{ backgroundColor: "#2D3779" }}>
                  {filterCount}
                </span>
                <span className="clearFilterText">Clear filters</span>
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
