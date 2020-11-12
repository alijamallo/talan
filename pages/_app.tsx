import "../src/resources/styles/main.sass";
import Layout from "../src/views/layout-component/Layout/Layout";
// import Header from "../src/views/layout-component/Header/Header";
import Footer from "../src/views/layout-component/Footer/Footer";
import Content from "../src/views/layout-component/Content/Content";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/*<Header />*/}
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Layout>
  );
}

export default MyApp;
