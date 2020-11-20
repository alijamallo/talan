import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import images from "../../../../resources/images/images"
import styles from "./LandingDownloadApp.module.sass"


export default function LandingDownloadApp() {
    return (
        <div className={styles.LandingDownloadApp}>
            <Row justify="space-between">
                <Col span={11}>
                    <div className="colorWhite fontSizeLarge text-bold">
                        Download Talan Exchange App
                    </div>
                    <Col span={20}>
                        <p className="text-justify m-y-16 fontSizeExtraSmall colorGray100">
                            Talan Exchange enables you to join the ecosystem and enjoy the
                            full range of digital asset management features
                        </p>
                    </Col>
                    <Col span={22}>
                        <div className="d-flex flex-x-between">
                            <img
                                width="125px"
                                src={images.landing.androidStore}
                                className="boxShadowYellow"
                            />
                            <img
                                width="125px"
                                src={images.landing.iosStore}
                                className="boxShadowYellow"
                            />
                            <img
                                width="125px"
                                src={images.landing.googlePlay}
                                className="boxShadowYellow"
                            />
                        </div>
                    </Col>
                </Col>
                <Col span={7}>
                    <img
                        width="100%"
                        src={images.landing.mobile}
                    />
                </Col>
            </Row>
        </div>
    );
}
