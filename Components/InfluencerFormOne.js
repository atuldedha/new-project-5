import React, { useState } from 'react'
import {
  Button,
  Nav,
  Col,
  Pagination,
  Row,
  Form,
  Container,
} from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';



export default function  InfluencerOneForm () {

  const options =["A","B","C","D","EE","FFF","GGG"]
  const [multiSelections, setMultiSelections] = useState([]);

  return (
    <div>
      <div className="input-box">
        <Container>
          <Row>
            <Col>
              <div className="input-con">
                <Form.Label>Select Platform</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--- Please select ---</option>
                  <option value="1">Instagram</option>
                  <option value="2">TikTok</option>
                  <option value="3">Youtube</option>
                </Form.Select>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Select Disease Area</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Select Location</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              </div>
            </Col>
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
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Followers</Form.Label>
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
                <Form.Label>Engagement</Form.Label>
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
                    max="100"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Average Likes</Form.Label>
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
                    max="100"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Average Comments</Form.Label>
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
                    max="100"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Reach Multipler</Form.Label>
                <div className="min-max-input">
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Min"
                    min="100"
                  />
                  <Form.Control
                    style={{ width: "92px" }}
                    type="number"
                    placeholder="Max"
                    max="100"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Real Followers</Form.Label>
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
                <Form.Label>Interests</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Mentions</Form.Label>
                <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="name"
                  multiple
                  onChange={setMultiSelections}
                  options={options}
                  placeholder="--- Please Select ---"
                  selected={multiSelections}
                 />
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div className="input-con">
                <Form.Label>Hashtags</Form.Label>
                <Typeahead
                  id="basic-typeahead-multiple"
                  labelKey="name"
                  multiple
                  onChange={setMultiSelections}
                  options={options}
                  placeholder="Choose several states..."
                  selected={multiSelections}
                 />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Brands</Form.Label>
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  options={options}
                  placeholder="--- Please Select ---"
                />
              </div>
            </Col>
            <Col>
              <div className="input-con">
                <Form.Label>Campaigns</Form.Label>
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
                <Form.Label>Total Campaigns</Form.Label>
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
        </Container>
      </div>
    </div>
  );
}
