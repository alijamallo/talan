import React, {Component} from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Table from "antd/lib/table"
import {ColumnsType} from "antd/lib/table/interface";
import images from "../../../../resources/images/images"
import styles from "./LandingMarkets.module.sass"
import Button from "antd/lib/button"


interface fakeResponse {
    pair: string;
    talan: number;
    dollar: string;
    change: number;
    high: number;
    low: number;
    volume: number;
    id: number
}

class LandingMarkets extends Component {
    columns: ColumnsType<any> = [
        {
            title: "PAIR",
            key: "pair",
            render: (value: fakeResponse) => (
                <span className="colorWhite text-uppercase">{value.pair}</span>
            ),
        },
        {
            title: "LAST PRICE",
            key: "lastPrice",
            render: (value: fakeResponse) => (
                <span>
          <span className="colorWhite">{value.talan} / </span>
          <span className="colorGray100">{value.dollar}</span>
        </span>
            ),
        },
        {
            title: "CHANGE",
            key: "change",
            render: (value: fakeResponse) => (
                <span className={value.change > 0 ? "colorBlue" : "colorRed"}>
          {value.change}%
        </span>
            ),
        },
        {
            title: "24 HIGH",
            key: "high24",
            render: (value: fakeResponse) => (
                <span className="colorWhite">{value.high}</span>
            ),
        },
        {
            title: "24 LOW",
            key: "low24",
            render: (value: fakeResponse) => (
                <span className="colorWhite">{value.low}</span>
            ),
        },
        {
            title: "VOLUME",
            key: "volume",
            render: (value: fakeResponse) => (
                <span className="colorWhite">{value.volume}</span>
            ),
        },
        {
            title: "CHART",
            key: "chart",
            render: (value: fakeResponse) => (
                <div className={styles.tableChart}>
                    {value.change > 0 ? <img src={images.test.blueChart}/> : <img src={images.test.redChart}/>}
                </div>
            ),
        },
    ];

    dataSource: Array<fakeResponse> = [
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: -1.84,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 1
        },
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: 2.16,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 2
        },
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: -1.84,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 3
        },
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: 2.16,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 4
        },
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: -1.84,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 5
        },
        {
            pair: "talan / btc",
            talan: 0.00021346,
            dollar: "2.45$",
            change: 2.16,
            high: 0.00021983,
            low: 0.00019863,
            volume: 0.0001,
            id: 6
        },
    ];

    render() {
        return (
            <div className={styles.landingMarkets}>
                <div className="container">
                    <Row justify="space-between">
                        <Col span={6} className="text-center">
                            <img width="115px" height="115px" src={images.landing.security}/>
                            <div className="colorWhite fontSizeNormal m-y-16">
                                Security due to decentralization
                            </div>
                            <div className="colorGray100 fontSizeExtraSmall">
                                Control of assets is yours alone – funds do not leave your
                                wallet and cannot be frozen
                            </div>
                        </Col>
                        <Col span={6} className="text-center">
                            <img width="115px" height="115px" src={images.landing.ledger}/>
                            <div className="colorWhite fontSizeNormal m-y-16">
                                Ledger support
                            </div>
                            <div className="colorGray100 fontSizeExtraSmall">
                                Use Talan Exchange with hardware wallets Ledger Nano S and
                                Ledger Blue
                            </div>
                        </Col>
                        <Col span={6} className="text-center">
                            <img width="115px" height="115px" src={images.landing.api}/>
                            <div className="colorWhite fontSizeNormal m-y-16">API</div>
                            <div className="colorGray100 fontSizeExtraSmall">
                                Integrate your own trading software into Talan Exchange
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center" className="m-y-48">
                        <Col
                            span={24}
                            className="m-b-32 d-flex flex-y-center flex-column"
                        >
                            <span>
                                <span className="colorWhite fontSizeExtraMedium">Markets</span>
                                <div className={styles.marketsTextDecoration}></div>
                            </span>
                        </Col>
                        <Col span={14} className="colorGray100 text-center">
                            Talamn Exchange allows you to execute trades swiftly and securely,
                            regardless of whether you’re trading via mobile app, desktop
                            client, web wallet or the Waves API
                        </Col>
                    </Row>
                    <div className="p-b-32">
                        <Table
                            className="table"
                            columns={this.columns}
                            dataSource={this.dataSource}
                            pagination={false}
                        />
                    </div>
                    <div className="text-center colorWhite m-b-24">
                        To view more traded pairs click{" "}
                        <span className="colorYellow">Trading</span>
                    </div>
                    <div className="m-b-48 text-center">
                        <Button className="button yellow boxShadowYellow no-border" shape="round">
                            Log in
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingMarkets;
