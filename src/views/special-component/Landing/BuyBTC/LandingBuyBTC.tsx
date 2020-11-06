import React, { Component } from "react";
import Card from "../../../../../src/views/public-component/Card/Card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

class LandingBuyBTC extends Component {
  render() {
    return (
      <Card backgroundColor="navy">
        <div className="container">
          <Row>
            <Col span={12}>
              <div className="colorWhite fontSizeExtraMedium">
                <div>The world's safest </div>
                <div>cryptocurrency exchange</div>
              </div>
              <Col span={20} className="m-y-48">
                <p className="text-justify colorGray100">
                  Buy, sell and stake assets quickly and securely with all the
                  advantages of a centralized exchange, but retaining complete
                  control of your funds .
                </p>
              </Col>
            </Col>
            <Col span={12}></Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default LandingBuyBTC;
