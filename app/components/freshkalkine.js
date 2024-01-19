"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Freshkalkine() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Row gutter={[5,5]}>
          <Col span={24}>
            <div className="kalcontainers_titledev">
              <h3>Fresh & Hot</h3>
              <h2>
                <span class="kallogo_intext">Kalkine</span>
                <span class="title_plusicon">+</span>
                <span class="kaltitle_black">Reports</span>
              </h2>
              <p>Premium Market Opportunities Just for You!</p>
            </div>

            <Carousel
              autoplay
              slidesToShow={5}
              dots={true}
              dotActiveWidth={30}
              dotHeight={3}
              dotWidth={16}
            >
              {/* <div className="item_images"> */}
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepot_image"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <img src="static/image/global.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <p>Shoals Technologies Group, Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <img src="static/image/global2.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <p>Winter started and its recovery time fo…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 9, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/palantir-technologies-inc/"
                  >
                    <img src="static/image/american.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <p>Winter started and its recovery time fo…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 9, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/jinkosolar-holding-coltd/"
                  >
                    <img src="static/image/earnings.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/jinkosolar-holding-coltd/"
                  >
                    <p>Jinkosolar Holding Co,Ltd</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Dec 22, 2023</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/one-nasdaq-listed-technology-stock-gaining-upside-momentum-as-russell-3000-inched-higher-iren/"
                  >
                    <img src="static/image/us-technical.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/one-nasdaq-listed-technology-stock-gaining-upside-momentum-as-russell-3000-inched-higher-iren/"
                  >
                    <p>One NASDAQ-Listed Technology Stock Gain…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Dec 22, 2023</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/bearish-indication-on-one-nyse-listed-technology-stock-aeva/"
                  >
                    <img src="static/image/kalkine-bearish.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/bearish-indication-on-one-nyse-listed-technology-stock-aeva/"
                  >
                    <p>Bearish Indication on One NYSE-Listed T…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/general-mills-inc-0/"
                  >
                    <img src="static/image/us-dividend.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/general-mills-inc-0/"
                  >
                    <p>General Mills Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/renew-energy-global-plc/"
                  >
                    <img src="static/image/global-green.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/renew-energy-global-plc/"
                  >
                    <p>ReNew Energy Global PLC</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <img src="static/image/global-big.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <p>Shoals Technologies Group, Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <img src="static/image/global-commodity.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <p>Shoals Technologies Group, Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 9, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/palantir-technologies-inc/"
                  >
                    <img src="static/image/american-tech-report.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/palantir-technologies-inc/"
                  >
                    <p>Palantir Technologies Inc</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 9, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/jinkosolar-holding-coltd/"
                  >
                    <img src="static/image/earnings.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/jinkosolar-holding-coltd/"
                  >
                    <p>Jinkosolar Holding Co,Ltd</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Dec 22, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    clasName="freshrepo_image"
                    href="/report/one-nasdaq-listed-technology-stock-gaining-upside-momentum-as-russell-3000-inched-higher-iren/"
                  >
                    <img src="static/image/us-technical.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/one-nasdaq-listed-technology-stock-gaining-upside-momentum-as-russell-3000-inched-higher-iren/"
                  >
                    <p>One NASDAQ-Listed Technology Stock Gain…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Dec 22, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/bearish-indication-on-one-nyse-listed-technology-stock-aeva/"
                  >
                    <img src="static/image/kalkine-bearish.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/bearish-indication-on-one-nyse-listed-technology-stock-aeva/"
                  >
                    <p>Bearish Indication on One NYSE-Listed T…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/general-mills-inc-0/"
                  >
                    <img src="static/image/us-dividend.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/general-mills-inc-0/"
                  >
                    <p>General Mills Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/renew-energy-global-plc/"
                  >
                    <img src="static/image/global-green.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/renew-energy-global-plc/"
                  >
                    <p>ReNew Energy Global PLC</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <img src="static/image/global-big.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/shoals-technologies-group-inc-9/"
                  >
                    <p>Shoals Technologies Group, Inc.</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 10, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="kalhome_freshreportbox">
                  <a
                    className="freshrepo_image"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <img src="static/image/global-commodity.jpeg" />
                  </a>
                  <a
                    className="freshreport_title"
                    href="/report/winter-started-and-its-recovery-time-for-commodities-one-commodity-is-expected-to-bounce-back-from-its-support-level-corn-global-commodity-market-wrap-up/"
                  >
                    <p>Winter started and its recovery time fo…</p>
                  </a>
                  <p className="freshreport_readtime">
                    <span className="homefreshreport_data">Jan 9, 2024</span>
                    Read Time :
                    <span className="homefreshreport_duration">5 Mins</span>
                  </p>
                </div>
              </div>
              {/* </div> */}
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
            <div class="kalhot_anchorlink">
              <a href="/signup/">Explore More</a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
