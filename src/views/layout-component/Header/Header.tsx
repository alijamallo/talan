import React from "react";
import styles from "./Header.module.sass";
import Button from "antd/lib/button";
import images from "../../../resources/images/images";

interface IHeaderProps {
    Authorization: number
}

export default function Header(props: IHeaderProps) {
    return (
        <div className={styles.header}>
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
                    <img src={images.icon.notification} className="icon normal"/>
                </Button>
                {props.Authorization === 0 ?
                    <Button className="button yellow medium no-border boxShadowYellow" shape="round">
                        Log in
                    </Button>
                    :
                    <span>USER PROFILE</span>
                }
            </div>
        </div>
    );
}
