/**
 * 首页
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'
import P2PMainView from '../page/p2p/MainView'

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
                            <li><Link to="/InternetFinancialSupervision">现金贷</Link></li>
                            <li><Link to="/P2P">P2P</Link></li>
                            <li><Link to="/P2P">ICO</Link></li>
                            <li><Link to="/P2P">其他</Link></li>
                        </ul>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Content className="layout-content">
                            123456
                        </Layout.Content>
                    </Layout>
                </Layout>
            </div>
        )

        const P2P = () => (
            <div>
                <P2PMainView />
            </div>
        )

        return (
            <Layout >
                <Layout.Header>
                    <span className="header-logo">国家互联网金融检测平台</span>
                    <span className="header-login">管理员：张三</span>
                </Layout.Header>
                <Layout>
                    <Layout.Content className="layout-content">
                        <Router>
                            <div>
                                <Route exact path="/InternetFinancialSupervision" component={Home} />
                                <Route path="/P2P" component={P2P} />
                            </div>
                        </Router>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(HomePage)
