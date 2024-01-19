import React from 'react';
import { Carousel, Image } from 'antd';
import Freetrailbanner from '../components/freetrailbanner';
const contentStyle = {
  height: '10px',
  color: '#fff',
  lineHeight: '30px',
  overflow: "hidden",
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <>
  <Carousel autoplay controlHeightSM>
    <div>
    <img style={contentStyle} src="static/image/image4.jpeg" />
    </div>
    <div>
    <img style={contentStyle} src="static/image/image4.jpeg" />

    </div>
    <div>
    <img style={contentStyle} src="static/image/image4.jpeg" />
    </div>
    <div>
    <img style={contentStyle} src="static/image/image4.jpeg" />

    </div>
  </Carousel>
  <Freetrailbanner />
  </>
);
export default App;