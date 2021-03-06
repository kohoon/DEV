import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        style={{ display: "block", width: 80 }}
                    />
                </div>
                <Header as="h1">써핀이</Header>
            </div>
            <Gnb />
        </div>
    );
};

export default Top;
