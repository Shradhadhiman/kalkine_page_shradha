"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel, Button } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Latestarticle() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Row>
          <Col span={8}>
            <div className="latest_article">
              <h3>Latest Articles</h3>
            </div>
            <div className="latest_article_ajax">
              <img src="/static/image/pexels.jpg" />
              <a
                class="article_title"
                href="/news/premium/bofa-initiates-coverage-on-weatherford-international-with-a-buy-rating-stock-jumps-25"
                target="_blank"
              ></a>
              <h5>
                {" "}
                BofA initiates coverage on Weatherford International with a Buy
                rating; stock jumps 2.5%
              </h5>
              <p className="article_name">
                Mon 13 Nov 23, 03:33 PM | Akanksha Vashisht
              </p>
            </div>
          </Col>

          <Col span={16}>
            <ul className="latest_news">
              <li>
                <a
                  class="article_title"
                  href="/news/premium/da-davidson-upgrade-drives-booking-holdings-share-price-5-higher"
                  target="_blank"
                ></a>
                <h5>
                  D.A. Davidson upgrade drives Booking Holdings’ share price 5%
                  higher
                </h5>
                <p className="article_data">Tue 07 Nov 23, 03:16 PM</p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/gene-editing-firm-editas-obtains-rating-upgrade-from-citi"
                  target="_blank"
                ></a>
                <h5>
                  Gene editing firm Editas obtains rating upgrade from Citi
                </h5>
                <p className="article_data">
                  Wed 25 Oct 23, 01:43 PM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/keybancs-rating-upgrade-pushes-uber-stock-price-11-higher"
                  target="_blank"
                ></a>
                <h5>
                  KeyBanc’s rating upgrade pushes UBER stock price 1.1% higher
                </h5>
                <p className="article_data">
                  Mon 06 Nov 23, 03:07 PM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/brokers-upgrade-dycom-to-strong-buy-on-favorable-fiber-upgrade-prospects"
                  target="_blank"
                ></a>
                <h5>
                  Brokers upgrade Dycom to Strong Buy on favorable fiber upgrade
                  prospects
                </h5>
                <p className="article_data">
                  Mon 23 Oct 23, 01:46 PM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/barclays-upgrades-rating-on-these-automobile-stocks"
                  target="_blank"
                ></a>
                <h5>Barclays upgrades rating on these automobile stocks</h5>
                <p className="article_data">
                  Mon 06 Nov 23, 05:23 AM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/morgan-stanley-says-selloff-in-the-clean-tech-industry-overdone-upgrades-ratings"
                  target="_blank"
                ></a>
                <h5>
                  Morgan Stanley says selloff in the clean tech industry
                  overdone; upgrades ratings
                </h5>
                <p className="article_data">
                  Thu 19 Oct 23, 02:23 PM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/william-blair-initiates-coverage-on-eyenovia-with-an-outperform-rating"
                  target="_blank"
                ></a>
                <h5>
                  William Blair initiates coverage on Eyenovia with an
                  Outperform rating
                </h5>
                <p className="article_data">
                  Fri 03 Nov 23, 06:31 AM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/stifel-cuts-price-target-on-colgate-despite-rating-upgrade"
                  target="_blank"
                ></a>
                <h5>
                  Stifel cuts price target on Colgate despite rating upgrade
                </h5>
                <p className="article_data">
                  Tue 17 Oct 23, 01:59 PM | Akanksha Vashisht
                </p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/wells-fargo-sees-22-upside-potential-in-gap-upgrades-to-overweight"
                  target="_blank"
                ></a>
                <h5>
                  Wells Fargo sees 22% upside potential in Gap, upgrades to
                  Overweight
                </h5>
                <p>Fri 27 Oct 23, 04:40 AM | Akanksha Vashisht</p>
              </li>
              <li>
                <a
                  class="article_title"
                  href="/news/premium/needham-upgrades-amat-lrcx-to-buy-as-it-expects-semiconductor-sale-volume-to-rebound-in-fy24"
                  target="_blank"
                ></a>
                <h5>
                  Needham upgrades AMAT, LRCX to Buy as it expects semiconductor
                  sale volume to rebound in FY24
                </h5>
                <p>Tue 17 Oct 23, 04:40 AM | Akanksha Vashisht</p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
