import React from "react";
import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

export default function InfluencerFormTwo() {
  const options =["A","B","C","D","EE","FFF","GGG"]
  return (
    <div className="second-form-con">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Age</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
              />
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <Form.Label>Min</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Gender</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
              >
                <option>--- Please select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Country</Form.Label>
            <div className="min-max-input">
              <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop: '20px'}}>
      <Col>
        <div className="input-con1">
          <Form.Label>Country</Form.Label>
          <div className="min-max-input">
          <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
            />
          </div>
        </div>
      </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>City</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
              >
                <option>--- Please select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con1">
            <Form.Label>Language</Form.Label>
            <div className="min-max-input">
              <Form.Select
                style={{ width: "194px" }}
                aria-label="Default select example"
              >
                <option>--- Please select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
              />
            </div>
          </div>
        </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
        <Col>
          <div className="input-con1">
            <Form.Label>Ethnicity</Form.Label>
            <div className="min-max-input">
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              <Form.Control
                style={{ width: "74px" }}
                type="number"
                placeholder="0%"
                min="0"
                max="100"
              />
            </div>
          </div>
        </Col>
      <Col>
        <div className="input-con1">
          <Form.Label>Patients</Form.Label>
          <div className="min-max-input">
          <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
            />
          </div>
        </div>
      </Col>
      <Col>
        <div className="input-con1">
          <Form.Label>Brand affinity</Form.Label>
          <div className="min-max-input">
            <Form.Select
              style={{ width: "194px" }}
              aria-label="Default select example"
            >
              <option>Free text entry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
            />
          </div>
        </div>
      </Col>
      </Row>
      <Col style={{marginTop: '20px'}}>
        <div className="input-con1">
          <Form.Label>Symptoms</Form.Label>
          <div className="min-max-input">
            <Form.Select
              style={{ width: "194px" }}
              aria-label="Default select example"
            >
              <option>Enter to select from entry</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control
              style={{ width: "74px" }}
              type="number"
              placeholder="0%"
              min="0"
              max="100"
            />
          </div>
        </div>
      </Col>
      <div className="influencer-buttons-con">
            <div className="influencer-buttons">
              <Button className="filter-button">Filter</Button>
              <Button className="clear-filter-button">
                <div className="clear-button">04</div> Clear all filter
              </Button>
            </div>
          </div>
    </div>
  );
}
