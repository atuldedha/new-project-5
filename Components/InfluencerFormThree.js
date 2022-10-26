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

export default function InfluencerFormThree() {
  return (
    <div className="third-form-con">
      <Row>
        <Col>
          <div className="input-con">
            <Form.Label>Cost per click</Form.Label>
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
          <div className="input-con">
            <Form.Label>Cost per target</Form.Label>
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
          <div className="input-con">
            <Form.Label>Post type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>--- Please select ---</option>
              <option value="1">Instagram Post</option>
              <option value="2">Instagram Reel</option>
              <option value="3">Instagram Story</option>
              <option value="3">TikTok Post</option>
              <option value="3">Youtube 10 Sec video</option>
              <option value="3">Youtube 30 Sec video</option>
              <option value="3">Youtube 60 Sec video</option>
            </Form.Select>
          </div>
        </Col>
        <Col>
          <div className="input-con">
            <Form.Label>Price</Form.Label>
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
