import React, {Component} from 'react';
import Row from "antd/lib/row";
import Form from "antd/lib/form";
import Button from "antd/lib/button"
import Col from "antd/lib/col";
import Select from "antd/lib/select"
import images from "../../../../../resources/images/images";
import Input from "antd/lib/input";
import styles from "./LandingBuyBtcForm.module.sass"

interface ILandingBuyBtcFormState {
    defaultImage: string
}

interface ICurrency {
    name: string
    image: string
}

class LandingBuyBtcForm extends Component<{}, ILandingBuyBtcFormState> {
    state: ILandingBuyBtcFormState = {
        defaultImage: images.icon.usd
    }

    digitalCurrency: Array<ICurrency> = [
        {
            image: images.icon.bitcoin,
            name: "BTC"
        },
        {
            image: images.icon.usdn,
            name: "USDN"
        },
    ]

    realCurrency: Array<ICurrency> = [
        {
            image: images.icon.usd,
            name: "USD"
        },
        {
            image: images.icon.gbp,
            name: "GBP"
        },
    ]

    onFinish = values => {
        console.log('Received values from form: ', values);
    };

    selectCurrency = (event: string) => {
        const findCurrency = this.realCurrency.find(item => item.name === event)
        this.setState({defaultImage: findCurrency.image})
    }


    render() {
        return (
            <div className={styles.talanBuyBTC}>
                <Row className="colorWhite fontSizeExtraSmall p-b-8">
                    <Col span={5}>I buy</Col>
                    <Col span={14} className="p-x-8">I spend</Col>
                </Row>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    initialValues={{btc: "BTC", usa: "USD"}}
                    onFinish={this.onFinish}
                >
                    <Col span={5}>
                        <Form.Item name="btc" className="no-margin">
                            <Select className="select gray round">
                                {this.digitalCurrency.map(currency =>
                                    <Select.Option value={currency.name} key={currency.name}>
                                        <img src={currency.image} className="icon normal"/>
                                        <span className="m-x-8">{currency.name}</span>
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={14} className="p-x-8">
                        <Row className={styles.realCurrency}>
                            <Col span={3} className="d-flex flex-x-center flex-y-center">
                                <img src={this.state.defaultImage} className="icon normal"/>
                            </Col>
                            <Col span={14}>
                                <Form.Item name="amount" className="no-margin">
                                    <Input placeholder="Enter amount" className="input transparent"/>
                                </Form.Item>
                            </Col>
                            <Col span={7}>
                                <Form.Item name="usa" className="no-margin">
                                    <Select
                                        className="select transparent"
                                        onChange={this.selectCurrency}

                                    >
                                        {this.realCurrency.map(currency =>
                                            <Select.Option value={currency.name} key={currency.name}>
                                                <div className="d-flex flex-x-between">
                                                    <span>{currency.name}</span>
                                                </div>
                                            </Select.Option>
                                        )}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Form.Item className="no-margin">
                            <Button
                                className="button yellow boxShadowYellow w100 no-border"
                                shape="round"
                                htmlType="submit"
                            >
                                BUY BTC
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
                <Row className="colorWhite fontSizeExtraSmall p-b-8">
                    <Col span={5}>Your fee is 1%</Col>
                </Row>
            </div>
        );
    }
}

export default LandingBuyBtcForm;