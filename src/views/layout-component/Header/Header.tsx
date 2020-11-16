import React from "react";
import AntLayout, {LayoutProps} from "antd/lib/layout";
import styles from "./Header.module.sass";
import generateClassName from "../../../services/helper/generateClassName";
import {Affix, Button} from "antd";
import images from "../../../resources/images/images";


export default function Header(props: LayoutProps) {
    const {Header} = AntLayout;
    const headerClassNames = () => {
        const className = [props.className, styles.header];
        return generateClassName(className);
    };
    return (
        <Affix>
            <Header className={headerClassNames()} {...props}>
                <div className="d-flex flex-x-between flex-y-center">
                    <div className={styles.icon}>
                        <img src={images.public.logo}/>
                        <div className="colorWhite p-x-8">
                            <div className="m-b-4">Talan</div>
                            <div className="fontSizeExtraSmall">A Great Website</div>
                        </div>
                    </div>
                    <div className="colorGray100">
                        <span className="m-r-24">Buy Crypto</span>
                        <span className="m-r-24">Trading</span>
                        <span className="m-r-24">DeFo</span>
                        <span className="m-r-24">NEW</span>
                        <span className="m-r-24">Investments</span>
                        <span className="m-r-24">Leverage</span>
                        <span className="m-r-24">Download</span>
                    </div>
                    <div>
                        <Button className="button m-x-16 navy no-border" shape="circle">
                            <img src={images.icon.notification} className="icon normal" />
                        </Button>
                        <Button className="button yellow medium no-border boxShadowYellow" shape="round">
                            Log in
                        </Button>
                    </div>
                </div>
            </Header>
        </Affix>
    );
}
