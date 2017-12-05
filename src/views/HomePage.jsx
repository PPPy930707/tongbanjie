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
                <h2>Home</h2>
            </div>
        )

        const About = () => (
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
                                <ul>
                                    <li><Link to="/InternetFinancialSupervision">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>

                                <Route exact path="/InternetFinancialSupervision" component={Home} />
                                <Route path="/about" component={About} />
                            </div>
                        </Router>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(HomePage)
