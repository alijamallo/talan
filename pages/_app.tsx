import "../src/resources/styles/main.sass";
import Header from "../src/views/layout-component/Header/Header";
import Footer from "../src/views/layout-component/Footer/Footer";
import Content from "../src/views/layout-component/Content/Content";
import Affix from "antd/lib/affix";
import React from "react";
import Layout from "antd/lib/layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Affix>
                <Layout.Header className="bgNavy p-t-24 hAuto p-x-24">
                    <Header Authorization={pageProps.Authorization}/>
                </Layout.Header>
            </Affix>
            <Content>
                <Component {...pageProps} />
            </Content>
            {pageProps.Authorization === 0 && <Footer/>}
        </Layout>
    );
}

export default MyApp;
