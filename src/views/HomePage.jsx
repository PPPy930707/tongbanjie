/**
 * 首页
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'

import HomePageContent from './HomePageContent'
import P2pOperation from '../page/p2p/industry-situation/P2pOperation'
import P2pContract from '../page/p2p/contract-situation/P2pContract'
import P2pBorrowe from '../page/p2p/borrower-situation/P2pBorrowe'
import P2pLender from '../page/p2p/lender-situation/P2pLender'
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        let link = '/', keyPath = e.keyPath.reverse()//reverse是颠倒数组顺序的
        link += keyPath.join('/')
        this.props.history.push(link)
    }

    renderContent() {
        return (
            <div style={{ width: '100%', height: '100%', padding: '10px' }}>
                <Route path='/' exact render={() => {
                    return <HomePageContent />
                }} />
                <Route path='/p2p/industry' render={() => {
                    return <P2pOperation />
                }} />
                <Route path='/p2p/contract' render={() => {
                    return <P2pContract />
                }} />
                <Route path='/p2p/lender' render={() => {
                    return <P2pLender />
                }} />
                <Route path='/p2p/borrower' render={() => {
                    return <P2pBorrowe />
                }} />

            </div>
        )
    }

    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <Layout >
                <Layout.Header>
                    <span className="header-logo">中国互联网金融监管服务平台</span>
                    <span className="header-login">管理员：张三</span>
                </Layout.Header>
                <Layout>
                    <Layout.Sider >
                        <Menu onClick={this.handleClick} mode="vertical">
                            <SubMenu key="p2p" title={<span><span>P2P</span></span>}>
                                <MenuItemGroup title="行业态势">
                                    <Menu.Item key="industry">运营情况</Menu.Item>
                                    <Menu.Item key="contract">合同情况</Menu.Item>
                                    <Menu.Item key="borrower">借款人情况</Menu.Item>
                                    <Menu.Item key="lender">出借人情况</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><span>ICO</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><span>现金贷</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><span>股权众筹</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" title={<span><span>虚假违规</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub7" title={<span><span>非法外汇交易</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Content className="layout-content">
                            {/* 123456 */}
                            {this.renderContent()}
                        </Layout.Content>
                    </Layout>
                </Layout>
                <div className='background-image'></div>
            </Layout>
        )
    }
}
export default withRouter(HomePage)
