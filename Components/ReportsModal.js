import { Button, Modal, Form } from "react-bootstrap";
import profilePic from "../public/Images/profile-circle-2 1.png"
import { BsInstagram } from 'react-icons/bs'
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";

function ReportModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{
          display: "flex",
          AlignItems: "center",
          justifyContent: "center",
        }}
        className="border-0"
      >
        <Modal.Title className="report-modal-title">
          Create a report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div>
          <Form.Label>Report Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--- Please select ---</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="switch-con">
          <label>Reach</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div className="switch-con">
          <label>Comments</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div className="switch-con">
          <label>New Followers</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div className="switch-con">
          <label>Number of likes</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div className="switch-con">
          <label>Number of comments</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div className="switch-con">
          <label>Mentions in the next month</label>
          <Form.Check type="switch" id="custom-switch" />
        </div>
        <div style={{marginTop: '15px'}}>
          <Form.Label>Campaign status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--- Please select ---</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Group style={{marginTop: '10px'}} className="mb-3" controlId="formBasicCheckbox">
            <Form.Check style={{color: '#7E839F'}} type="checkbox" label="Select All" />
          </Form.Group>
        </div>
        <div className="modal-last-sec">
        { [1,2,3].map(data => {
          return (
          <div className='singleData'>
          <Form.Check style={{color: '#7E839F'}} type="checkbox" />
              <Image src={profilePic} width="50px"/>
              <div className='innerDataCard'>
                <div className='user'>
                  <span>Username</span>
                  <a><BsInstagram color="#2D3779"/> &nbsp;1.5k</a>
                </div>
                <div className='info'>
                <span>Ongoing Campaign</span>
                  <a><HiLocationMarker color="#2D3779"/> &nbsp;Swizerland</a>
                </div>
              </div>
            </div>
          )
        })}
          </div>
          <Button style={{width: "100%", marginTop: "20px"}} className="primBtn cmmBtn">Create Report</Button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
}
export default ReportModal;