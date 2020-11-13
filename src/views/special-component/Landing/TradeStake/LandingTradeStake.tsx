import React, {Component} from "react";
import Card from "../../../../../src/views/public-component/Card/Card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "../../../../../src/views/public-component/Button/Button";
import images from "../../../../resources/images/images";
import styles from "./LandingTradeStake.module.sass";

class LandingTradeStake extends Component {
    render() {
        return (
            <Card backgroundColor="gray" className={styles.landingTradeStake}>
                <div className="container">
                    <Row>
                        <Col span={12}>
                            <div className="d-flex flex-y-center m-b-32">
                                <img
                                    src={images.landing.trading}
                                    width="25px"
                                    height="25px"
                                    className="m-r-16"
                                />
                                <div className="colorWhite fontSizeExtraMedium">
                                    <span>Trading</span>
                                    <div className={styles.tradingTextDecoration}/>
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Low, fixed fees</span>
                                </div>
                                <div className="colorGray100 fontSizeSmall">
                                    Pay just 0.003 TALAN per order filled
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Gateways for popular currencies</span>
                                </div>
                                <div className="colorGray100 fontSizeSmall">
                                    Access major fiat and cryptocurrencies: BTC, LTC, ETH, and
                                    others
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Fast asset creation</span>
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
                            <div className="m-b-32 d-flex flex-y-center">
                                <img
                                    src={images.landing.staking}
                                    width="25px"
                                    height="25px"
                                    className="m-r-16"
                                />
                                <div className="colorWhite fontSizeExtraMedium ">
                                    <span>Staking</span>
                                    <div className={styles.stakingTextDecoration}/>
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Staking income</span>
                                </div>
                                <div className="colorGray100 fontSizeSmall">
                                    Earn revenues by staking cryptocurrency through a smart
                                    contract
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Daily rewards</span>
                                </div>
                                <div className="colorGray100 fontSizeSmall">
                                    Get regular payments in USDN, TALAN and USDT (coming soon)
                                </div>
                            </div>
                            <div className="m-b-24">
                                <div className="colorWhite fontSizeNormal">
                                    <img src={images.public.rectangle} className="m-r-8"/>
                                    <span>Transparency</span>
                                </div>
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
