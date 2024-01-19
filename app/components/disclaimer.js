"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Banners from "../../public/static/image/7days.png";
import Screener from "../../public/static/image/Screener_Banner_2_bX8fxvB.png";

export default function Disclaimer() {
  return (
        <Row>
          <Col span={24}>
            <div className="footers_disclaimers">
              <ul class="termslink_ullis">
                <li>
                  <a href="/cms/subscription-terms-conditions">T&amp;C</a>
                </li>
                <li>
                  <a href="/cms/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
              <div className="kalfotters_disclaimers">
                <p>
                  <strong>Disclaimer</strong>
                </p>
                <p>
                  Kalkine Equities LLC., having Delaware File Number 4697384 is
                  authorised to provide general advice only. The information on{" "}
                  <a href="https://kalkine.com/">https://kalkine.com/</a>does
                  not take into account any of your investment objectives,
                  financial situation or needs. Before you make a decision about
                  whether to acquire a financial product, you should obtain the
                  Product Disclosure Statement from the product issuer. You
                  should consider the appropriateness of advice taking into
                  account your own objectives, financial situation and needs and
                  seek independent financial advice before making any financial
                  decisions.
                </p>
                <p>
                  The link to our{" "}
                  <a href="https://kalkine.com/cms/terms-and-conditions">
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="https://kalkine.com/cms/privacy-policy">
                    Privacy Policy
                  </a>{" "}
                  of our services have been provided for your reference.
                </p>
                <p>
                  Copyright © 2024 Krish Capital Pty Ltd. All rights reserved.
                  No part of this website, or its content, may be reproduced in
                  any form without our prior consent.
                </p>
              </div>
            </div>
          </Col>
        </Row>
  );
}
