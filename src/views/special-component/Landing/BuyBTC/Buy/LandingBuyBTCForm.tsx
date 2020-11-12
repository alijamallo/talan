import React, {Component} from 'react';
import Row from "antd/lib/row";
import {Form} from "antd";
import Col from "antd/lib/col";
import Select from "../../../../public-component/Select/Select";
import Button from "../../../../public-component/Button/Button";

class LandingBuyBtcForm extends Component {
    onFinish = values => {
        console.log('Received values from form: ', values);
    };

    render() {
        return (
            <>

                <Row>

                </Row>
                <Form
                    name="customized_form_controls"
                    layout="inline"
                    onFinish={this.onFinish}
                >

                    <Col span={5}>
                        <Form.Item name="price" className="no-margin">
                            <Select className="w100"/>
                        </Form.Item>
                    </Col>
                    <Col span={14} className="p-x-8">

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
            </>
        );
    }
}

export default LandingBuyBtcForm;