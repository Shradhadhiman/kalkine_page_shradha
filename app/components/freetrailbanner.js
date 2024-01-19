"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Banners from "../../public/static/image/7days.png";
import Screener from "../../public/static/image/Screener_Banner_2_bX8fxvB.png";

export default function Freetrailbanner() {
  return (

        <Row className="bannerdiv">
          <Col>
            <Carousel
              autoplay
              speed={500}
              dots={false}
              dotActiveWidth={30}
              dotHeight={1}
              dotWidth={16}
              effect="scrollx"
              arrows={true}
            >
              <img src={Banners.src} alt="banners" className="myimage" />
              <img src={Screener.src} alt="banners" className="myimage" />
            </Carousel>
            <div className="btn_navs">
              <div className="left-btn">
                <button type="button" role="presentation" class="btn-prev" />
                <img src="/static//image/arrowicon.jpeg" />
              </div>
              <div className="right-btn">
                <button type="button" role="presentation" class="btn-next" />
                <img src="/static//image/arrowicon.jpeg" />
              </div>
            </div>
          </Col>
        </Row>
  );
}
