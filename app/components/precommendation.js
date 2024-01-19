"use client";
import React from 'react'
import { Row, Col, Divider, Space } from "antd";
import { TiArrowSortedUp,TiArrowSortedDown } from "react-icons/ti";


export default function Precommendation() {
  return (
    <Col sm={24} xs={24} xl={12} md={12}>
          <div className= "Precommendation_tabletab">
           <h5>Past Recommendations
               <br/>Accuracy Report</h5>
              <table className="table-gainstriped">
                <thead className="thead_design">
                  <tr>
                    <th>Code</th>
                    <th>Buy Price</th>
                    <th>Sell Price</th>
                    <th>Gain/Loss</th>
                  </tr>
                </thead>
                <tbody id="top_recommendations">
                  <tr>
                  <td>NYSE: UEC</td>
                  <td>3.24</td>
                  <td>4.88</td>
                  <td>
                    <div className="recoomend_downvalue">
                    50.62%
                    <TiArrowSortedUp/> 
                    </div>
                  </td>
                  </tr>
                  <tr>
                    <td>NASDAQ: MDB</td>
                    <td>361.65</td>
                    <td>507.41</td>
                    <td>
                      <div className="recoomend_downvalue">
                      40.30% 
                      <TiArrowSortedUp/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>NASDAQ: CERE</td>
                    <td>25.51</td>
                    <td>35.19</td>
                    <td>
                      <div className="recoomend_downvalue">
                       37.95% 
                       <TiArrowSortedUp/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>NYSE: RIG</td>
                    <td>4.75</td>
                    <td>4.10</td>
                    <td>
                      <div className="recoomend_upvalue">
                      -13.68% 
                      <TiArrowSortedDown/>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>NYSE: HIMS</td>
                    <td>8.70</td>
                    <td>7.50</td>
                    <td>
                    <div className="recoomend_upvalue">
                    -13.79% 
                    <TiArrowSortedDown/>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td>NASDAQ: VFF</td>
                    <td>2.28</td>
                    <td>1.94</td>
                    <td>
                      <div className="recoomend_upvalue">
                      -14.91% 
                      <TiArrowSortedDown/>
                      </div>
                    </td>
                  </tr>
                 </tbody>
              </table>
              <div>
              <p>Past performance is neither an indicator nor a guarantee of future performance.</p>
               </div>
                <div>
                  <p>Our Recommendation Speaks! ["
                  <a href="/past-recommendation">Learn More</a>"]</p>
                </div>
          </div>
        </Col>
  )
}
