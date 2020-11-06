import React from "react";
import Card from "../../../../../src/views/public-component/Card/Card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

export default function LandingDownloadApp() {
  return (
    <Card backgroundColor="gray">
      <div className="container no-padding-bottom">
        <Row justify="space-between">
          <Col span={10}>
            <div className="colorWhite fontSizeMedium text-bold">
              Download Talan Exchange App
            </div>
            <Col span={20}>
              <div className="text-justify m-y-16 fontSizeExtraSmall colorGray100">
                Talan Exchange enables you to join the ecosystem and enjoy the
                full range of digital asset management features
              </div>
            </Col>
          </Col>
          <Col span={7}>
            <img
              width="100%"
              src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A52-6-GFUTU6297453D3D253C/1592019058170_0..png"
            />
          </Col>
        </Row>
      </div>
    </Card>
  );
}
