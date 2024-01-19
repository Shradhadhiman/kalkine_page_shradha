"use client";
import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";


export default function Stockresearch() {
  return (
        <Row>
          <Col>
            <div className="stockscoop_backgroundcolor">
              <div className="stockresearch_heading">
                <h2>Stock Research</h2>
                <div className="tabs">
                  <ul className="stockreserachtabs list_tab nav nav-tabs">
                    <li className="nav_item">
                      <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#blue-chip" aria-selected="true">
                        Blue-Chip
                      </a>
                    </li>
                    <li className="nav_item">
                      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#mid-chip" aria-selected="false">
                        Mid-Cap
                      </a>
                    </li>
                    <li className="nav_item">
                      <a class="nav-link" data-bs-toggle="tab" data-bs-target="#small-cap" aria-selected="false">
                        Small-Cap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Row>
                <Col span={24}>
                  <div className="tab-content stockrepo">
                    <div className="tab-pane fade active show" id="blue-chip" role="tabpanel" aria-labelledby="blue-chip">
                      <ul className="lateststockresarch">
                        <li>
                          <div className="sectiodndd">
                            <div className="research_image">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <img
                                  src="static/image/image1.jpeg"
                                  alt="One"
                                  className="image_first"
                                />
                              </a>
                            </div>
                            <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                            <div class="stockresearchcontent">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <h2 className="nyse_text">
                                  One NYSE– Listed Healthcare Stock at Resistance
                                  Levels: Abbott Laboratories
                                </h2>
                              </a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <p className="nyse_para">
                                  Abbott Laboratories,Company Overview:,Abbott
                                  Laboratories (NYSE: ABT),is a global healthcare
                                  company. The Company’s portfolio of technologies
                                  spans the spectrum of healthcare, with businesses
                                  and products in diagnostics, medical devices,
                                  nutritional and b...
                                </p>
                              </a>
                              <p class="researchtype_author">
                                <span>Team Kalkine</span>
                                <span>Jan 09, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/update-on-one-nasdaq-listed-finance-stock-ares-capital-corporation">
                                <img src="static/image/image5.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep"></a>
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep">
                                <h2>
                                  Technical Analysis on Two US-Listed Stocks- ET,
                                  IEP
                                </h2>
                                <p>
                                  Energy Transfer LP (NYSE: ET),Energy Transfer LP
                                  (NYSE: ET),offers services for the transportation
                                  and transmission of natural gas through various …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 04, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <img src="static/image/stockresearch_default.png" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation"></a>
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <h2>
                                  One REIT Stock Trading Near Resistance Levels–
                                  Realty Income Corporation
                                </h2>
                                <p>
                                  Realty Income Corporation,O Details,Realty Income
                                  Corporation (NYSE: O) is a REIT which invests in
                                  people and places to deliver dependable …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <img src="static/image/image3.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <h2>
                                  One NYSE– Listed Mining Stock at Resistance
                                  Levels: Barrick Gold Corporation
                                </h2>
                                <p>
                                  Barrick Gold Corporation,Company Overview:,Barrick
                                  Gold Corporation (NYSE: GOLD),is a Canada-based
                                  gold and copper producer. The Company is
                                  principally engaged in …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <img src="static/image/image4.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company"></a>
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <h2>
                                  One NYSE– Listed Industrial Stock at Resistance
                                  Levels: 3M Company
                                </h2>
                                <p>
                                  3M Company,Company Overview:,3M Company (NYSE:
                                  MMM),is a diversified technology company. The
                                  Company is a manufacturer and marketer of a
                                  variety …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated"></a>
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <h2>
                                  One NASDAQ – Listed Semiconductor Stock at
                                  Resistance Levels: Texas Instruments Incorporated
                                </h2>
                                <p>
                                  Texas Instruments Incorporated,Company
                                  Overview:,Texas Instruments Incorporated (NASDAQ:
                                  TXN),designs, makes and sells semiconductors to
                                  electronics designers and manufacturers across the
                                  world. …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <h2>
                                  One NYSE– Listed Banking Stock at Resistance
                                  Levels: State Street Corporation
                                </h2>
                                <p>
                                  State Street Corporation,Company Overview:,State
                                  Street Corporation (NYSE: STT),is a financial
                                  holding company. The Company, through its
                                  subsidiary, State Street Bank …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="mid-chip" role="tabpanel" aria-labelledby="mid-chip">
                      <ul className="lateststockresarch">
                        <li>
                          <div className="sectiodndd">
                            <div className="research_image">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <img
                                  src="static/image/image1.jpeg"
                                  alt="One"
                                  className="image_first"
                                />
                              </a>
                            </div>
                            <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                            <div class="stockresearchcontent">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <h2 className="nyse_text">
                                  One NYSE– Listed Healthcare Stock at Resistance
                                  Levels: Abbott Laboratories
                                </h2>
                              </a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <p className="nyse_para">
                                  Abbott Laboratories,Company Overview:,Abbott
                                  Laboratories (NYSE: ABT),is a global healthcare
                                  company. The Company’s portfolio of technologies
                                  spans the spectrum of healthcare, with businesses
                                  and products in diagnostics, medical devices,
                                  nutritional and b...
                                </p>
                              </a>
                              <p class="researchtype_author">
                                <span>Team Kalkine</span>
                                <span>Jan 09, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/update-on-one-nasdaq-listed-finance-stock-ares-capital-corporation">
                                <img src="static/image/image5.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep"></a>
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep">
                                <h2>
                                  Technical Analysis on Two US-Listed Stocks- ET,
                                  IEP
                                </h2>
                                <p>
                                  Energy Transfer LP (NYSE: ET),Energy Transfer LP
                                  (NYSE: ET),offers services for the transportation
                                  and transmission of natural gas through various …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 04, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <img src="static/image/stockresearch_default.png" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation"></a>
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <h2>
                                  One REIT Stock Trading Near Resistance Levels–
                                  Realty Income Corporation
                                </h2>
                                <p>
                                  Realty Income Corporation,O Details,Realty Income
                                  Corporation (NYSE: O) is a REIT which invests in
                                  people and places to deliver dependable …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <img src="static/image/image3.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <h2>
                                  One NYSE– Listed Mining Stock at Resistance
                                  Levels: Barrick Gold Corporation
                                </h2>
                                <p>
                                  Barrick Gold Corporation,Company Overview:,Barrick
                                  Gold Corporation (NYSE: GOLD),is a Canada-based
                                  gold and copper producer. The Company is
                                  principally engaged in …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <img src="static/image/image4.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company"></a>
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <h2>
                                  One NYSE– Listed Industrial Stock at Resistance
                                  Levels: 3M Company
                                </h2>
                                <p>
                                  3M Company,Company Overview:,3M Company (NYSE:
                                  MMM),is a diversified technology company. The
                                  Company is a manufacturer and marketer of a
                                  variety …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated"></a>
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <h2>
                                  One NASDAQ – Listed Semiconductor Stock at
                                  Resistance Levels: Texas Instruments Incorporated
                                </h2>
                                <p>
                                  Texas Instruments Incorporated,Company
                                  Overview:,Texas Instruments Incorporated (NASDAQ:
                                  TXN),designs, makes and sells semiconductors to
                                  electronics designers and manufacturers across the
                                  world. …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <h2>
                                  One NYSE– Listed Banking Stock at Resistance
                                  Levels: State Street Corporation
                                </h2>
                                <p>
                                  State Street Corporation,Company Overview:,State
                                  Street Corporation (NYSE: STT),is a financial
                                  holding company. The Company, through its
                                  subsidiary, State Street Bank …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane fade" id="small-cap" role="tabpanel" aria-labelledby="small-cap">
                      <ul className="lateststockresarch">
                        <li>
                          <div className="sectiodndd">
                            <div className="research_image">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <img
                                  src="static/image/image1.jpeg"
                                  alt="One"
                                  className="image_first"
                                />
                              </a>
                            </div>
                            <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                            <div class="stockresearchcontent">
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories"></a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <h2 className="nyse_text">
                                  One NYSE– Listed Healthcare Stock at Resistance
                                  Levels: Abbott Laboratories
                                </h2>
                              </a>
                              <a href="/stock-research/one-nyse-listed-healthcare-stock-at-resistance-levels-abbott-laboratories">
                                <p className="nyse_para">
                                  Abbott Laboratories,Company Overview:,Abbott
                                  Laboratories (NYSE: ABT),is a global healthcare
                                  company. The Company’s portfolio of technologies
                                  spans the spectrum of healthcare, with businesses
                                  and products in diagnostics, medical devices,
                                  nutritional and b...
                                </p>
                              </a>
                              <p class="researchtype_author">
                                <span>Team Kalkine</span>
                                <span>Jan 09, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/update-on-one-nasdaq-listed-finance-stock-ares-capital-corporation">
                                <img src="static/image/image5.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep"></a>
                              <a href="/stock-research/technical-analysis-on-two-us-listed-stocks-et-iep">
                                <h2>
                                  Technical Analysis on Two US-Listed Stocks- ET,
                                  IEP
                                </h2>
                                <p>
                                  Energy Transfer LP (NYSE: ET),Energy Transfer LP
                                  (NYSE: ET),offers services for the transportation
                                  and transmission of natural gas through various …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 04, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <img src="static/image/stockresearch_default.png" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation"></a>
                              <a href="/stock-research/one-reit-stock-trading-near-resistance-levels-realty-income-corporation">
                                <h2>
                                  One REIT Stock Trading Near Resistance Levels–
                                  Realty Income Corporation
                                </h2>
                                <p>
                                  Realty Income Corporation,O Details,Realty Income
                                  Corporation (NYSE: O) is a REIT which invests in
                                  people and places to deliver dependable …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <img src="static/image/image3.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-mining-stock-at-resistance-levels-barrick-gold-corporation">
                                <h2>
                                  One NYSE– Listed Mining Stock at Resistance
                                  Levels: Barrick Gold Corporation
                                </h2>
                                <p>
                                  Barrick Gold Corporation,Company Overview:,Barrick
                                  Gold Corporation (NYSE: GOLD),is a Canada-based
                                  gold and copper producer. The Company is
                                  principally engaged in …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 03, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <img src="static/image/image4.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company"></a>
                              <a href="/stock-research/one-nyse-listed-industrial-stock-at-resistance-levels-3m-company">
                                <h2>
                                  One NYSE– Listed Industrial Stock at Resistance
                                  Levels: 3M Company
                                </h2>
                                <p>
                                  3M Company,Company Overview:,3M Company (NYSE:
                                  MMM),is a diversified technology company. The
                                  Company is a manufacturer and marketer of a
                                  variety …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated"></a>
                              <a href="/stock-research/one-nasdaq-listed-semiconductor-stock-at-resistance-levels-texas-instruments-incorporated">
                                <h2>
                                  One NASDAQ – Listed Semiconductor Stock at
                                  Resistance Levels: Texas Instruments Incorporated
                                </h2>
                                <p>
                                  Texas Instruments Incorporated,Company
                                  Overview:,Texas Instruments Incorporated (NASDAQ:
                                  TXN),designs, makes and sells semiconductors to
                                  electronics designers and manufacturers across the
                                  world. …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="reserach_image_right">
                            <div className="researchimage_block">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <img src="static/image/image6.jpeg" />
                              </a>
                            </div>
                            <div className="stockreaserch_contentsdata">
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation"></a>
                              <a href="/stock-research/one-nyse-listed-banking-stock-at-resistance-levels-state-street-corporation">
                                <h2>
                                  One NYSE– Listed Banking Stock at Resistance
                                  Levels: State Street Corporation
                                </h2>
                                <p>
                                  State Street Corporation,Company Overview:,State
                                  Street Corporation (NYSE: STT),is a financial
                                  holding company. The Company, through its
                                  subsidiary, State Street Bank …
                                </p>
                              </a>
                              <p className="reaserchtypes_authordata">
                                <span class="card_footer">Team Kalkine</span>
                                <span class="card_footer">Jan 02, 2024</span>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  
                  <Col span={24}>
                    <div className="px-5">
                      <button className="stkrsrch-button float-end">
                        <span className="main-text" href="/blue-chip/">
                          <a
                            className="text-decoration-none text-white fw-bolder"
                            href="/blue-chip/"
                          >
                            View All
                          </a>
                          <span>
                            <span>→</span>{" "}
                          </span>
                        </span>
                      </button>
                    </div>
                  </Col>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
  );
}
