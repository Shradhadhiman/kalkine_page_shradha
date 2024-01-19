"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel, Button } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Sciencebehind() {
  return (
        <Row className="datascience_reserch">
          <Col span={14}>
            <div className="second_content">
              <h3>Science Behind Our</h3>
              <h2>Unique Data-Driven Research!</h2>
              <p>
                <strong>
                  Kalkine is a Tech-Enabled Business, based on a Digitally
                  Powered Architecture, and Extensive Data Science led Research.
                </strong>
              </p>
              <p>
                Our analysis is supported by financial and other data using
                Kalkine’s Proprietary Technology. We provide{" "}
                <span>
                  <strong>Independent Equity Research</strong>
                </span>{" "}
                based on technology-powered detailed analysis and{" "}
                <span>
                  <strong>
                    actionable insights on various listed stocks for Buy, Sell
                    or Hold Positions.
                  </strong>
                </span>
              </p>
              <div className="datareasearch_anchor">
                <a href="/about-us">Know More About Us</a>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <div className=" second_content_data">
              {/* 
         <Col className="span" span={12}>
         */}
              <h2>Exclusive Stock Insights</h2>
              <div className="table-responsive  second_contents">
                <table className="price_data table-sm">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Price at review</th>
                      <th>Buy / Hold / Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MOS</td>
                      <td>35.09</td>
                      <td>
                        <Button type="UNLOCK">UNLOCK</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>HMST</td>
                      <td>6.8</td>
                      <td>
                        <Button type="UNLOCK">UNLOCK</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>ABBV</td>
                      <td>132</td>
                      <td>
                        <Button type="UNLOCK">UNLOCK</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="para">
                “Price at review” denotes the price at which the recent
                recommendation was given by Kalkine.
              </p>
              {/* </Col> */}
            </div>
          </Col>
        </Row>
  );
}
