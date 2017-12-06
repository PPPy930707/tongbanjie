/**
 * 首页
 */
import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'

import P2pOperation from './industry-situation/P2pOperation'
import P2pContract from './contract-situation/P2pContract'
import P2pLender from './borrower-situation/P2pBorrowe'
import P2pBorrowe from './lender-situation/P2pLender'


class P2PMainView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [{
                text: 'P2P行业态势',
                value: 'p2p',
                children: [{
                    text: 'P2P运营情况',
                    value: 'industry-situation'
                }, {
                    text: 'P2P合同情况',
                    value: 'contract-situation'
                }, {
                    text: 'P2P借款人情况',
                    value: 'borrower-situation'
                }, {
                    text: 'P2P出借人情况',
                    value: 'lender-situation'
                }]
            }, {
                text: '违规平台监测',
                value: 'elec-regulation',
                children: [{
                    text: '未按要求备案',
                    value: 'history-manage'
                }, {
                    text: '资金未第三方托管',
                    value: 'comprehensive-query'
                }, {
                    text: '未第三方担保',
                    value: 'collection-set'
                }, {
                    text: '单一融资项目募集期超期',
                    value: 'type-set'
                }, {
                    text: '融资期限拆分',
                    value: 'except'
                }, {
                    text: '虚假违规广告',
                    value: 'device'

                }]
            }, {
                text: '问题平台分析',
                value: 'location-monitor'
            }, {
                text: '风险分析',
                value: 'correct-manage',
            }, {
                text: '查询中心',
                value: 'call-center',
                children: [{
                    text: 'P2P平台查询',
                    value: 'terrace-search'
                }, {
                    text: 'P2P合同查询',
                    value: 'pact-search'
                }, {
                    text: '借款人查询',
                    value: 'borrower-search'
                }, {
                    text: '出借人查询',
                    value: 'lender-search'
                },  {
                    text: '一键查询',
                    value: 'quick-search'
                }]
            }, {
                text: '统计报表',
                value: 'private-data'
            }]
        }
    }

    handleMenuClick(item) {
        let link = '/', keyPath = item.keyPath.reverse()//reverse是颠倒数组顺序的
        link += keyPath.join('/')
        this.props.history.push(link)
    }

    renderMenuItem(item) {
        if (item.children === undefined) {
            return (
                <Menu.Item key={item.value}>
                    <span>
                        <span className={item.value} style={{ float: 'left' }}></span>
                        <span style={{ float: 'left' }}>{item.text}</span>
                    </span>
                </Menu.Item>
            )
        } else {
            return (
                <Menu.SubMenu key={item.value} title={
                    <span>
                        <span className={item.value} style={{ float: 'left' }}></span>
                        <span style={{ float: 'left' }}>{item.text}</span>
                    </span>
                }>
                    {
                        item.children.map((item) => {
                            return this.renderMenuItem(item)
                        })
                    }
                </Menu.SubMenu>
            )
        }
    }


    /**
     * 渲染路由内容
     */
    renderContent() {
        return (
            <div style={{ width: '100%', height: '100%', padding: '10px' }}>
        
                
                <Route path='/p2p/industry-situation' render={() => {
                    return <P2pOperation />
                }} />
                <Route path='/p2p/contract-situation' render={() => {
                    return <P2pContract />
                }} />
                <Route path='/p2p/lender-situation' render={() => {
                    return <P2pLender />
                }} />
                <Route path='/p2p/borrower-situation' render={() => {
                    return <P2pBorrowe />
                }} />

            </div>
        )
    }

    renderPage() {
        return (
            <Layout >
                <Layout>
                    <Layout.Sider >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['data-statistics']}
                            style={{ height: '100%' }}
                            onClick={(item) => { this.handleMenuClick(item) }}
                        >
                            {
                                this.state.navs.map((item) => {
                                    return this.renderMenuItem(item)
                                })
                            }
                        </Menu>
                    </Layout.Sider>
                    <Layout.Content className="layout-content">
                        {/* 1111111111111 */}
                        {this.renderContent()}
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }

    render() {
        return is_production ? this.renderContent() : this.renderPage()
    }
}
export default withRouter(P2PMainView)
