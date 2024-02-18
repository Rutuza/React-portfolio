import React from "react";
import { Barcode } from "../Assets/img/icon";
function Loading() {
  return (
    <div className="loading">
      <div className="container">
        <div className="animation">
          <Barcode />
          <div className="text">
            <p>PORTFOLIO OF JYOTIKA DALAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
