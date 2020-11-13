import React, {Component} from "react";
import Card from "../../../../../src/views/public-component/Card/Card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import images from "../../../../resources/images/images";
import styles from "./LandingBuyBTC.module.sass"
import LandingBuyBtcForm from "./Buy/LandingBuyBTCForm";
import {url} from "inspector";

export default function LandingBuyBTC() {
    return (
        <div className={styles.landingBuyBTC}>
            <div className="container">
                <Row className="font">
                    <Col span={12}>
                        <div className="colorWhite fontSizeLarge">
                            <div>The world's safest</div>
                            <div>cryptocurrency exchange</div>
                        </div>
                        <Col span={20} className="m-t-32 m-b-48">
                            <p className="text-justify colorGray100">
                                Buy, sell and stake assets quickly and securely with all the
                                advantages of a centralized exchange, but retaining complete
                                control of your funds .
                            </p>
                        </Col>
                        <Col span={24}>
                            <LandingBuyBtcForm/>
                        </Col>
                    </Col>
                    <Col span={12} className="d-flex flex-x-end">
                        <img width="250px" src={images.landing.cryptocurrency}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
