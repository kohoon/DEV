import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import _ from "lodash";
import produce from "immer";

export default function Home() {
    console.log("함수 컴포넌트 실행됨");
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    console.log("page : index");
    // console.log(window); // 서버사이드 (x) 클라이언트 사이드 (O)
    // console.log(alert); // 서버사이드 (x) 클라이언트 사이드 (O)
    // console.log(document); // 서버사이드 (x) 클라이언트 사이드 (O)
    useEffect(() => {
        // useEffect : 컴포넌트가 화면에 표시될 때 이벤트
        // console.log("index > useEffect");
        // console.log(localStorage);
        // 서버사이드에서는 실행되지 않는, 클라이언트 사이드 전용 이벤트
        // componentDidMount
        // componentDidUpdate
        let result = localStorage.getItem("todo-list");
        if (!result) {
            result = [];
        } else {
            try {
                result = JSON.parse(result);
            } catch (error) {
                result = [];
            }
        }
        setList(result);
    }, []);
    useEffect(() => {
        // useEffect : list라는 주시 대상에 변경이 있었을 때
        localStorage.setItem("todo-list", JSON.stringify(list));
    }, [list]);

    // 일반적인 함수로 처리하면 렌터가 일어날 때마다 실행됨
    // useCallback을 사용하면, 변경대상이 변경될 때에만 실행됨
    const addItem = useCallback(() => {
        const item = {
            id: new Date().getTime().toString(),
            text
        };
        setList([...list, item]);
        setText("");
    }, [list, text]);

    const removeItem = useCallback(
        (id) => {
            setList(_.reject(list, (item) => item.id === id));
        },
        [list]
    );

    const done = useCallback(
        (id) => {
            setList(
                produce(list, (draft) => {
                    const target = list.find((item) => item.id === id);
                    const index = list.indexOf(target);
                    draft[index].isDone = !target.isDone;
                })
            );
        },
        [list]
    );

    return (
        <div className="py-8 px-16">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-4xl font-bold">TO-DO List</h1>

            <div>
                <input
                    type="text"
                    className="border p-1"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addItem}
                >
                    추가
                </button>
            </div>

            <ul className="list-disc">
                {list.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            className="mr-2"
                            value={!!item.isDone}
                            onChange={() => done(item.id)}
                        />
                        {item.text}
                        <button
                            className="ml-2 text-xs text-red-500"
                            onClick={() => removeItem(item.id)}
                        >
                            [삭제]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
