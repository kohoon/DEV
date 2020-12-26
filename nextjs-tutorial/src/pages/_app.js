import "semantic-ui-css/semantic.min.css";
import "../../styles/globals.css";
import Footer from "../components/Footer";
import Top from "../components/Top";

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ width: 1000, margin: "0 auto" }}>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;

/**
 페이지 전환 시 레이아웃 유지 가능
 페이지 전환시 상태값 유지 가능
 componentDidCatch를 이용해 커스텀 에러 핸들링 가능
 추가적인 데이터를 페이지로 주입시켜주는 것 가능
 글로벌 CSS를 이곳에 선언
 *
 */
