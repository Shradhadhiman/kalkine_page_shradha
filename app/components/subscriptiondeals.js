"use client";
import React from 'react'
import { Row, Col, Divider, Space,  Carousel, Button } from "antd";
import { TiArrowSortedUp,TiArrowSortedDown } from "react-icons/ti";
import { Check } from "heroicons-react";

export default function Subscriptiondeals() {
    return (


<div className="color_Subscription" style={{backgroundColor:'#eef0ff'}}>
        <Row>
          <Col span={24}>
            <div className="kalsubscription_titlediv">
              <h3>
                Kalkine Subscription <span>Deals</span>
              </h3>
            </div>
          </Col>

          <Col span={6}>
            <div className="item">
              <div className="kalhome_subscriptionbox">
                <h2>7 Days Free Trial</h2>
                <div className="header_dolar">
                  <h4 className="dollar"> $ 0.00</h4>
                  <p>7 Days Free Trial</p>
                </div>
                <div class="subscription_listitems">
                  <ul className="list_trail">
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> 40+
                      Industry Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Easy
                      Upgrade
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Deep
                      Insights
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Trading
                      Time Support
                    </li>
                  </ul>
                  <div class="dealsubscribe_button">
                    <a href="/free-trial/" class="sublist_anchorlink">
                      Try Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="kalhome_subscriptionbox">
                <h2>Platinum Special</h2>
                <h4>&nbsp</h4>
                <div className="header_dolar">
                  <p>Billing Annually</p>
                </div>
                <div class="subscription_listitems">
                  <ul className="list_trail">
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> American
                      Tech Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Global Big
                      Money Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Global
                      commodity
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Tech
                      Analysis Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Global
                      Fully Charged Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Global
                      Green Energy Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> Kalkine
                      IPO Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" /> US
                      Technical Analysis Report
                    </li>
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" />{" "}
                      Diversified Opportunities Report
                    </li>
                  </ul>
                  <div class="dealsubscribe_button">
                    <a href="/free-trial/" class="sublist_anchorlink">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="kalhome_subscriptionbox">
                <h2>US Dividend Income Report</h2>
                <h4>US$ 2000.0</h4>
                <div className="header_dolar">
                  <p>Billing Annually</p>
                </div>
                <div class="subscription_listitems">
                  <ul className="list_trail">
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" />
                      US Dividend Income Report
                    </li>
                  </ul>
                  <div class="dealsubscribe_button">
                    <a href="/free-trial/" class="sublist_anchorlink">
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="kalhome_subscriptionbox">
                <h2>Inflation Report</h2>
                <h4>US$ 3400.0</h4>
                <div className="header_dolar">
                  <p>Billing Annually</p>
                </div>
                <div class="subscription_listitems">
                  <ul className="list_trail">
                    <li>
                      {" "}
                      <Check className="text-green-500 mr-2 check" />
                      Inflation Report
                    </li>
                  </ul>
                  <div class="dealsubscribe_button">
                    <a href="/free-trial/" class="sublist_anchorlink">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      )
}