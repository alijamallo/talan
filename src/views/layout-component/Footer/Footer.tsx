import React from "react";
import AntLayout, { LayoutProps } from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "../../public-component/Card/Card";
import styles from "./Footer.module.sass";
import Logo from "../../public-component/Logo/Logo";

export default function Footer(props: LayoutProps) {
  const { Footer } = AntLayout;
  return (
    <Footer className={styles.talanFooter} {...props}>
      <Card backgroundColor="navy" className="container">
        <Row>
          <Col span={9}>
            <div>
              <Logo />
            </div>
            <div className="m-y-32">
              <div className="colorGray100 fontSizeRegular">©2020 Talan</div>
              <div className="colorGray100 fontSizeNormal">
                support@talan.com
              </div>
            </div>
            <div className="p-r-16">
              <span className="colorGray100 fontSizeExtraSmall">
                By subscribing, you will receive emails about Talan products and
                you agree to our{" "}
                <span className="colorYellow">Terms and Conditions</span> and
                <span className="colorYellow m-x-4">Privacy Policy</span>.
              </span>
            </div>
          </Col>
          <Col span={15}>
            <Row>
              <Col span={6}>
                <div className="colorYellow100 m-b-16 text-bold">PRODUCTS</div>
                <div className="colorGray100 m-b-16">USDN Staking</div>
                <div className="colorGray100 m-b-16">OTC Service</div>
                <div className="colorGray100 m-b-16">Talan Staking</div>
                <div className="colorGray100 m-b-16">DeFo Staking</div>
                <div className="colorGray100 m-b-16">Neutrino Governance</div>
                <div className="colorGray100 m-b-16">Leverage</div>
                <div className="colorGray100 m-b-16">DeFo</div>
              </Col>
              <Col span={6}>
                <div className="colorYellow100 m-b-16 text-bold">TOOLS</div>
                <div className="colorGray100 m-b-16">Talan Blockchain</div>
                <div className="colorGray100 m-b-16">Talan Explorer</div>
                <div className="colorYellow100 m-b-16 text-bold">SUPPORT</div>
                <div className="colorGray100 m-b-16">Support center</div>
                <div className="colorGray100 m-b-16">Documentation</div>
                <div className="colorGray100 m-b-16">Market Maker Program</div>
              </Col>
              <Col span={6}>
                <div className="colorYellow100 m-b-16 text-bold">LEARN</div>
                <div className="colorGray100 m-b-16">USDN Staking FAQ</div>
                <div className="colorGray100 m-b-16">OTC Service FAQ</div>
                <div className="colorGray100 m-b-16">WAVES Staking FAQ</div>
                <div className="colorGray100 m-b-16">DeFo Staking FAQ</div>
                <div className="colorGray100 m-b-16">NSBT FAQ</div>
                <div className="colorGray100 m-b-16">DeFo FAQ</div>
                <div className="colorGray100 m-b-16">Customer FAQ</div>
              </Col>
              <Col span={6}>
                <div className="colorYellow100 m-b-16 text-bold">SOCIAL</div>
                <div className="colorGray100 m-b-16">Instagram</div>
                <div className="colorGray100 m-b-16">Telegram</div>
                <div className="colorYellow100 m-b-16 text-bold">
                  BUY CRYPTO
                </div>
                <div className="colorGray100 m-b-16">Buy BTC</div>
                <div className="colorGray100 m-b-16">Buy TALAN</div>
                <div className="colorGray100 m-b-16">Buy USDN</div>
                <div className="colorGray100 m-b-16"></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card backgroundColor="gray">
        <div className="text-center p-y-16 colorGray100">
          All Rights Are Reserved For Talan
        </div>
      </Card>
    </Footer>
  );
}
