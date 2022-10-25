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

export default function InfluencerFormFour() {
  const options =["A","B","C","D","EE","FFF","GGG"]
  return (
    <div className="input-box">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Influencers needed</Form.Label>
            <Form.Control type="number" placeholder="Influencers needed" />
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Audience overlap</Form.Label>
            <div className="min-max-input">
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Min"
                min="0"
              />
              <Form.Control
                style={{ width: "92px" }}
                type="number"
                placeholder="Max"
                max="0"
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Priorize by</Form.Label>
            <Typeahead
              id="basic-typeahead-single"
              labelKey="name"
              options={options}
              placeholder="--- Please Select ---"
            />
          </div>
        </Col>
      </Row>
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
