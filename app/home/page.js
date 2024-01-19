"use client";
import React from "react";
import styles from "./home.css";
import { Row, Col, Divider, Space } from "antd";
import { images } from "../../public/static/image";
import Banners from "../../public/static/image/7days.png";
import Screener from "../../public/static/image/Screener_Banner_2_bX8fxvB.png";
import Image from "next/image";
import { Button } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Precommendation from "../components/precommendation";
import Stockscoop from "../components/stockscoop";
import Stockresearch from "../components/stockresearch";
import Freshkalkine from "../components/freshkalkine";
import Freetrailbanner from "../components/freetrailbanner";
import Sciencebehind from "../components/sciencebehind";
import Stockideaportfolio from "../components/stockideaportfolio";
import Latestarticle from "../components/Latestarticle";
import Subscriptiondeals from "../components/subscriptiondeals";
import Mediacoverage from "../components/Mediacoverage";
import Footer from "../components/footer";
import Disclaimer from "../components/disclaimer";
import BootstrapBundleMin from "../components/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Carousel } from "antd";


export default function Home() {
  return (
    <div>
       <div className="box_design body_back">
      <Row className="bannerfluid" justify="center">
      </Row>
      <Freetrailbanner/>
      <Sciencebehind/>
      <Row>
        <Stockscoop />
        
        <Precommendation />
      </Row>
    <Stockresearch/>
      <Freshkalkine />
      <Stockideaportfolio/>
      <Latestarticle/>

      <Subscriptiondeals/>
      <Mediacoverage/>
       <Footer/>
      
       <Disclaimer/>
    </div>
    </div>
   
  );
};
