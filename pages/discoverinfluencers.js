import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import GraphGreen from "../public/Images/graphGreen.png";
import GraphRed from "../public/Images/graphRed.png";
import DashboardContent from "../Components/DashboardContent";
import DateNoti from "../Components/DateNoti";
import { useEffect } from "react";
import Image from "next/image";

export default function DiscoverInfluencers(props) {
  const scoialData = [
    {
      socialName: "Instagram",
      imgSocial: <AiOutlineInstagram size={30} />,
      bg: "instaBg",
      rate: "2%",
      rateDesc: "Since Last month",
      rateImg: "/Images/arrowUp.png",
      rateInc: true,
      data: "9,89670",
      desc: "Influencers since last month",
    },
    {
      socialName: "Youtube",
      imgSocial: <BsPlay size={30} />,
      bg: "ytBg",
      rate: "2%",
      rateInc: true,
      rateDesc: "Since Last month",
      rateImg: "/Images/arrowUp.png",
      data: "9,89670",
      desc: "Influencers since last month",
    },
    {
      socialName: "Tiktok",
      imgSocial: <FaTiktok size={30} />,
      bg: "tikBg",
      rate: "6%",
      rateDesc: "Since last month",
      rateInc: false,
      rateImg: "/Images/arrowDown.png",
      data: "9,89670",
      desc: "Influencers since last month",
    },
  ];

  useEffect(() => {
    props.setHead("Discover Influencers");
  }, [props.setHead]);

  return (
    <div className="bg">
      <Row>
        <Col lg={9}>
          <Row>
            {scoialData.map((data, index) => {
              return (
                <Col lg={4} key={index}>
                  <div className="socialCard">
                    <div className="scoialNa">
                      <div className="imageContainer">
                        <span className={data.bg}>{data.imgSocial}</span>
                        <span>{data.socialName}</span>
                      </div>
                      <div className="followingContainer">
                        <div
                          className={`${
                            data.rateInc ? "bgGreen" : "bgRed"
                          } rateContainer`}
                        >
                          <img src={data.rateImg} alt="img" />
                          <span
                            className={`${
                              data.rateInc ? "textGreen" : "textRed"
                            } rate`}
                          >
                            {data.rate}
                          </span>
                        </div>
                        <span className="time">{data.rateDesc}</span>
                      </div>
                    </div>
                    <div className="dataContainer">
                      <img src="/Images/accountIcon.png" alt="account" />
                      <span className="dataText">{data.data}</span>
                    </div>
                    <div className="socialData">
                      <Image src={data.rateInc ? GraphGreen : GraphRed} />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Col lg={12}>
            <DashboardContent />
          </Col>
        </Col>
        <Col lg={3}>
          <DateNoti />
        </Col>
      </Row>
    </div>
  );
}
