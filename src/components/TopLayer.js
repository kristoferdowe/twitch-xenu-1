import React from 'react';
import '../components/TopLayer.css';
import '../augmented-ui.min.css';
const TopLayer = () => {
  return (
       <div className="wrapper">
       <div data-augmented-ui=" tl-clip-x tr-2-clip-y bl-2-clip-x both" className="camera">
       <div data-augmented-ui=" tl-clip-x tr-2-clip-y bl-2-clip-x both" className="camera-filler">
       </div>
       </div>
       
       </div>
  );
};

export default TopLayer;