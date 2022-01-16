//import React, { Component } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './Detail'

export default function Message() {

    const messageArr = [
        { id: '01', title: 'test-message-1' },
        { id: '02', title: 'test-message-2' },
        { id: '03', title: 'test-message-3' },
    ];

    const navigate = useNavigate();
    //实现push跳转
    const pushView = (id, title) => {
        //携带params参数
        //navigate(`detail/${id}/${title}`, { replace: false })
        //携带search参数
        navigate(`detail?id=${id}&title=${title}`, { replace: false })
        //携带state参数
        //navigate("detail", { replace: false, state: { id: id, title: title } })
    }
    //实现replace跳转
    const replaceView = (id, title) => {
        //携带params参数
        //navigate(`detail/${id}/${title}`, { replace: true })
        //携带search参数
        navigate(`detail?id=${id}&title=${title}`, { replace: true })
        //携带state参数
        //navigate("detail", { replace: true, state: { id: id, title: title } })
    }

    const back = () => { navigate(-1) }
    const forward = () => { navigate(1) }

    return (
        <div>
            <ul>
                {
                    messageArr.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                {/* 向路由组件传递params参数
                                <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                {/* 向路由组件传递search参数 */}
                                <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                                {/* 向路由组件传递state参数 */}
                                {/* <Link to={'detail'} state={{ id: msgObj.id, title: msgObj.title }} >{msgObj.title}</Link> */}

                                &nbsp;<button onClick={() => pushView(msgObj.id, msgObj.title)}>push view</button>
                                &nbsp;<button onClick={() => replaceView(msgObj.id, msgObj.title)}>repalce view</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Routes>
                {/* 接收params参数 
                <Route path="detail/:id/:title" element={<Detail />} /> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                <Route path="detail" element={<Detail />} />

                {/* state参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="detail" element={<Detail />} /> */}
            </Routes>

            <button onClick={back}>Go Back</button>&nbsp;
            <button onClick={forward}>Go Forward</button>
        </div >
    )
}

/* export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: 'test-message-1' },
            { id: '02', title: 'test-message-2' },
            { id: '03', title: 'test-message-3' },
        ]
    }

    //实现replace跳转
    replaceView = (id, title) => {
        const history = useNavigate();
        console.log(history);
    }

    render() {

        const { messageArr } = this.state

        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    向路由组件传递params参数
                                    <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                    &nbsp;<button>push view</button>
                                    &nbsp;<button onClick={() => this.replaceView(msgObj.id, msgObj.title)}>repalce view</button>

                                    向路由组件传递search参数
                                    <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                                    向路由组件传递state参数
                                    <Link to={'detail'} state={{ id: msgObj.id, title: msgObj.title }} >{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    声明接收params参数
                    <Route path="detail/:id/:title" element={<Detail />} />

                    search参数无需声明接收，正常注册路由即可
                    <Route path="detail" element={<Detail />} />

                    state参数无需声明接收，正常注册路由即可
                    <Route path="detail" element={<Detail />} />
                </Routes>
            </div >
        )
    }
} */