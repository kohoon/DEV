import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header, Divider } from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import ItemList from "../components/ItemList";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL =
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    function getData() {
        Axios.get(API_URL).then((res) => {
            console.log(res.data);
            setList(res.data);
        });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Head>
                <title>써핀 | 코딩중</title>
            </Head>
            <Header as="h3" style={{ paddingTop: 40 }}>
                베스트 상품
            </Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as="h3" style={{ paddingTop: 40 }}>
                신상품
            </Header>
            <Divider />
            <ItemList list={list.slice(9)} />
        </div>
    );
}
