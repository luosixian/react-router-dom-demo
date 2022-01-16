import React, { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messageArr: [
            { id: '01', title: 'test-message-1' },
            { id: '02', title: 'test-message-2' },
            { id: '03', title: 'test-message-3' },
        ]
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
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={'detail'} state={{ id: msgObj.id, title: msgObj.title }} >{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Routes>
                    {/* 声明接收params参数 */}
                    {/* <Route path="detail/:id/:title" element={<Detail />} /> */}

                    {/* search参数无需声明接收，正常注册路由即可 */}
                    <Route path="detail" element={<Detail />} />

                    {/* state参数无需声明接收，正常注册路由即可 */}
                    <Route path="detail" element={<Detail />} />
                </Routes>
            </div >
        )
    }
}