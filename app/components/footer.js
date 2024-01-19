"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Banners from "../../public/static/image/7days.png";
import Screener from "../../public/static/image/Screener_Banner_2_bX8fxvB.png";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Row className="footer_background">
          <Col span={6}>
            <div className="kalfooters_awd">
              <img src="/static/image/n-logo.svg" />
            </div>
            <div className="kalfooter_awds">
              <a
                href="https://www.corporatevision-news.com/issues/issue-2-2021/46/"
                target="_blank"
              >
                <img src="/static/image/uk_award.svg" />
              </a>
            </div>
          </Col>
          <Col span={6}>
            <div className="footers_mission">
              <h2>Our Company</h2>
              <ul className="list_footer">
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/cms/vision-mission">Vision and Mission</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/media/media-coverage">Media Coverage</a>
                </li>
                <li>
                  <a href="/glossary/">Glossary</a>
                </li>
                <li>
                  <a href="/pricing/"> Pricing </a>
                </li>
                <li>
                  <a href="https://kalkinemedia.com/" target="_blank">
                    Kalkine Media
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="footers_mission">
              <h2>Useful Links</h2>
              <ul className="list_footer">
                <li>
                  <a href="/cms/research-overview-and-methodology">
                    Research Overview and Methodology{" "}
                  </a>
                </li>
                <li>
                  <a href="/cms/stocks-covered">Stocks Covered</a>
                </li>
                <li>
                  <a href="/cms/past-performance-dynamic">Past Performance</a>
                </li>
                <li>
                  <a href="/past-recommendation">Past Recommendations</a>
                </li>
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
                <li>
                  <a href="/kalkine-professional/">Kalkine professional</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer_location">
              <h2>Contact Us</h2>
              <ul className="list_footers">
                <li>
                  <p className="kalfooter_location">
                    50 California St, Suite 1500, San Francisco, CA, United
                    States of America, USA, 94111
                  </p>
                </li>
                <li>
                  <p className="kalfooter_phone">
                    <a href="tel:+14154506569"> +1 415-450-6569</a>
                  </p>
                </li>
                <li>
                  <p className="kalfooter_mail">
                    <a href="mailto:support@kalkine.com">support@kalkine.com</a>
                  </p>
                </li>
                <li>
                  <p className="kalfooter_time">Mon - Fri [9.00am - 5.00pm]</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
