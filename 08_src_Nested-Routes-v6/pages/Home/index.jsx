import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Routes, Navigate } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>This is Home</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="message">Message</MyNavLink>
                        </li> 
                    </ul>
                    {/* 注册路由 */}
                    <Routes>
                        <Route path="news" element={<News />} />
                        <Route path="message" element={<Message />} />
                        <Route path="*" element={<Navigate to="News" />} />
                    </Routes>
                </div>
            </div>
        )
    }
}
