"use client";
import React from "react";
import { Row, Col, Divider, Space } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Stockscoop() {
  return (
    
        <Col sm={24} xs={24} xl={12} md={12}>
          <div className="scoopdata_content">
            <h4>Kalkine's</h4>
            <h2>Stock Scoop</h2>
            <h6>A Premium and Exclusive Service for Intelligent Investors!</h6>
            <p>
              Kalkine's Stock Scoop can help you identify opportunities that are
              right for you. In-depth and extensive research of high-quality
              companies well suited for investors with financial flexibility.
            </p>
            <ul className="scoopul_content">
              <li>
                <span>600+</span>
                <p>Stocks Coverage</p>
              </li>
              <li>
                <span>25+</span>
                <p>Sectors</p>
              </li>
              <li>
                <span>100K+</span>
                <p>Research Reports</p>
              </li>
              <li className="borders">
                <span>15+</span>
                <p>Types of Reports</p>
              </li>
            </ul>
          </div>
          {
            <div className="stockscoop_anchor">
              <a href="/free-trial/?utm_source=Stock-Scoop&amp;utm_medium=web&amp;utm_campaign=Organic">
                Start 7 Day Free Trial
              </a>
            </div>
          }
        </Col>
  );
}
