/**
 * 首页
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'
import P2PMainView from '../page/p2p/MainView'
import HomePageContent from './HomePageContent'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const Home = () => (
            <div>
                <Layout >
                    <Layout.Sider >
                        <ul>
                            <li><Link to="/p2p">P2P</Link></li>
                            <li><Link to="/cash">现金贷</Link></li>
                            <li><Link to="/ico">ICO</Link></li>
                            <li><Link to="/other">其他</Link></li>
                        </ul>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Content className="layout-content">
                            <HomePageContent />
                        </Layout.Content>
                    </Layout>
                </Layout>
            </div>
        )

        return (
            <Layout >
                <Layout.Header>
                    <span className="header-logo">中国互联网金融监管服务平台</span>
                    <span className="header-login">管理员：张三</span>
                </Layout.Header>
                <Layout>
                    <Layout.Content className="layout-content">
                        <Route path='/' exact render={() => {
                            return <Home />
                        }} />   
                        <Route path='/p2p' render={() => {
                            return <P2PMainView />
                        }} />   
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(HomePage)
