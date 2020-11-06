import React, { Component } from "react";
import Card from "../../../../../src/views/public-component/Card/Card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "../../../../../src/views/public-component/Button/Button";

class LandingTradeStake extends Component {
  render() {
    return (
      <Card backgroundColor="gray">
        <div className="container">
          <Row>
            <Col span={12}>
              <div className="colorWhite fontSizeExtraMedium m-b-32">
                Trading
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">Low, fixed fees</div>
                <div className="colorGray100 fontSizeSmall">
                  Pay just 0.003 TALAN per order filled
                </div>
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">
                  Gateways for popular currencies
                </div>
                <div className="colorGray100 fontSizeSmall">
                  Access major fiat and cryptocurrencies: BTC, LTC, ETH, and
                  others
                </div>
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">
                  Fast asset creation
                </div>
                <div className="colorGray100 fontSizeSmall">
                  Create your own asset in under 60 seconds
                </div>
              </div>
              <Button
                type="default"
                boxShadowColor="yellow"
                horizontalSize="large"
                size="large"
                shape="round"
              >
                Trade Now
              </Button>
            </Col>

            <Col span={12}>
              <div className="colorWhite fontSizeExtraMedium m-b-32">
                Staking
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">Staking income</div>
                <div className="colorGray100 fontSizeSmall">
                  Earn revenues by staking cryptocurrency through a smart
                  contract
                </div>
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">Daily rewards</div>
                <div className="colorGray100 fontSizeSmall">
                  Get regular payments in USDN, TALAN and USDT (coming soon)
                </div>
              </div>
              <div className="m-b-24">
                <div className="colorWhite fontSizeNormal">Transparency</div>
                <div className="colorGray100 fontSizeSmall">
                  Trace any transaction on the blockchain
                </div>
              </div>
              <Button
                type="default"
                boxShadowColor="yellow"
                horizontalSize="large"
                size="large"
                shape="round"
              >
                Stake Now
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default LandingTradeStake;
