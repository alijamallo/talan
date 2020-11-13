import React, {Component} from 'react';
import Row from "antd/lib/row";
import {Form} from "antd";
import AntdSelect from "antd/lib/select";
import Col from "antd/lib/col";
import Select from "../../../../public-component/Select/Select";
import Button from "../../../../public-component/Button/Button";
import images from "../../../../../resources/images/images";

const {Option} = AntdSelect

class LandingBuyBtcForm extends Component {
    onFinish = values => {
        console.log('Received values from form: ', values);
    };

    render() {
        return (
            <>
                <Row className="colorWhite fontSizeExtraSmall p-b-8">
                    <Col span={5}>I buy</Col>
                    <Col span={14} className="p-x-8">I spend</Col>
                    <Col span={5}></Col>
                </Row>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    onFinish={this.onFinish}
                >

                    <Col span={5}>
                        <Form.Item name="btc" className="no-margin">
                            <Select className="w100" defaultValue="btc">
                                <Option value="btc" key="ali">
                                    <img src={images.test.btc}/>
                                    <span className="m-x-8">BTC</span>
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={14} className="p-x-8">
                        <Form.Item name="usa" className="no-margin">
                            <Select className="w100" defaultValue="ali">
                                <Option value="ali" key="ali">
                                    <div className="d-flex flex-x-between">
                                        <img src={images.test.usa}/>
                                        <span className="m-x-8">000,000,000.000</span>
                                        <span>USD</span>
                                    </div>
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item className="no-margin">
                            <Button
                                type="default"
                                boxShadowColor="yellow"
                                className="w100"
                                shape="round"
                                htmlType="submit">
                                BUY BTC
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
                <Row className="colorWhite fontSizeExtraSmall p-b-8">
                    <Col span={5}>Your fee is 1%</Col>
                </Row>
            </>
        );
    }
}

export default LandingBuyBtcForm;