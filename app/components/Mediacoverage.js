"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel, Button } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Check } from "heroicons-react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Mediacoverage() {
  library.add(faArrowRight);
  return (
    <div className="container-fluid">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="kalhomescontainers_titles">
              <h2>Kalkine's Media Coverage</h2>
              <p>
                Kalkine is featured on all major publications. Our newsworthy
                and insightful content is grabbing eyeballs across geographies.
                Here is a glimpse of all the latest coverage.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className="Kalhomes_image">
              <img src="/static/image/media.svg" />
            </div>
          </Col>
          <Col span={8}>
            <div className="kalkine_groups">
              <a
                href="https://www.ibtimes.com/oil-prices-2023-boom-bust-3653207"
                target="blank_"
              >
                <h2 title="Oil Prices In 2023: Boom Or Bust?">
                  Oil Prices In 2023: Boom Or Bust?
                </h2>
                <p>
                  Kunal Sawhney, CEO of Kalkine Group, keeps an eye on the
                  dollar, which he expects to depr…
                </p>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </a>
            </div>
            <div className="medias_timestamps">
              <p>
                {" "}
                <span className="coverage_provider">
                  IBT<span style={{ color: "#ffff" }}>abc</span>
                </span>
              </p>
            </div>
            <div className="kalkine_groups">
              <a
                href="https://www.financialexpress.com/investing-abroad/featured-stories/us-cpi-calculation-to-change-for-january-inflation-data/2944976/"
                target="blank_"
              >
                <h2 title="US CPI calculation to change for January inflation data">
                  US CPI calculation to change for J…
                </h2>
                <p>
                  All major indexes have opened in green and tech stocks are
                  likely to see more gains as Na…
                </p>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </a>
            </div>
            <div className="medias_timestamps">
              <p>
                {" "}
                <span className="coverage_provider">Financial Express</span>
              </p>
            </div>
          </Col>

          <Col span={8}>
            <div className="kalkine_groups">
              <a
                href="https://www.financialexpress.com/investing-abroad/featured-stories/us-inflation-cools-down-to-6-5-markets-upbeat-after-december-cpi-data-release/2946424/"
                target="blank_"
              >
                <h2 title="US inflation cools down to 6.5%, markets upbeat after December CPI data release">
                  US inflation cools down to 6.5%, m…
                </h2>
                <p>
                  Markets opened in green on Thursday but were found struggling
                  to gain strength. As the CP…
                </p>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </a>
            </div>
            <div className="medias_timestamps">
              <span className="coverage_provider">Financial Express</span>
            </div>
            <div className="kalkine_groups">
              <a
                href="https://finance.yahoo.com/news/bank-transactions-only-person-130028584.html"
                target="blank_"
              >
                <h2 title="What Bank Transactions Should You Only Make in Person?">
                  What Bank Transactions Should You …
                </h2>
                <p>
                  While you can apply for a loan online, you may be able to get
                  better rates or terms when …
                </p>
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </a>
            </div>
            <div className="medias_timestamps">
              <span className="coverage_provider">Yahoo Finance</span>
            </div>
          </Col>
          <div className="kalkine_anchorlink">
            <a href="/media/media-coverage">View All Media Coverage</a>
          </div>
        </Row>
      </div>
    </div>
  );
}
