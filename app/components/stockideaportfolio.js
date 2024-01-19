"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Stockideaportfolio() {
  return (
    <div className="image_backgroung">
          <Row>
            <Col span={24}>
              <div className="homeportfolio_titlediv">
                <h3>Want to Know</h3>
                <h2>Stock Ideas for a Smart Portfolio?</h2>
                <p>Premium Market Opportunities Just for You!</p>
              </div>
              <ul className="stockportfolio_industrylist">
                <li>
                  <a target="_blank" href="/companies/industrials/">
                    <img src="static/image/industrials.jpeg" />
                    Industrials
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/utilities/">
                    <img src="/static/image/utilities.jpeg" />
                    Utilities
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/healthcare/">
                    <img src="/static/image/healthcare.png" alt="image" />
                    Healthcare
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/real-estate/">
                    <img src="/static/image/real-estate.jpeg" />
                    Real Estate
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/energy/">
                    <img src="/static/image/energy.jpeg" />
                    Energy
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/communication-services/">
                    <img src="/static/image/communication-services.jpeg" />
                    Communication-Srvices
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/consumer-discretionary/">
                    <img src="/static/image/consumer-discretionary.jpeg" />
                    Consumer Discretionary
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/consumer-staples/">
                    <img src="/static/image/consumer-staples.png" />
                    Consumer Staples
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/financials/">
                    <img src="/static/image/financials.jpeg" />
                    Financials
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/information-technology/">
                    <img src="/static/image/information-technology.jpeg" />
                    Information Technology
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/materials/">
                    <img
                      src="/static/image/material_icon.svg"
                      width={100}
                      height={100}
                    />
                    Materials
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/companies/miscellaneous/">
                    <img
                      src="/static/image/miscellenious_companies.svg"
                      width={100}
                      height={100}
                    />
                    Miscellaneous
                  </a>
                </li>
              </ul>
            </Col>
            <Row>
              <Col span={24}>
                <div className="smartpotfolio_features">
                  <ul className="potfoliohomes_points">
                    <li>
                      Get in-depth stock analysis and research from our industry
                      experts
                    </li>
                    <li>
                      Strengthen your portfolio with Kalkine's recommendations
                    </li>
                    <li>
                      Discover an opportunity to meet your short-term or long-
                      term financial goals
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Row>
        </div>
  );
}
