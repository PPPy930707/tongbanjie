/**
 * 首页
 */
import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'
// import LocationMonitor from '../page/location-monitor/LocationMonitor'
// import ClusterExcept from '../page/config-manage/cluster-except/ClusterExcept'
// import CollectionSet from '../page/config-manage/collection-set/CollectionSet'
// import TypeSet from '../page/config-manage/type-set/TypeSet'
// import Device from '../page/config-manage/device/Device'
// import HistoryAlarm from '../page/history-alarm/HistoryAlarm'
// import ComprehensiveQuery from '../page/comprehensive-query/ComprehensiveQuery'
// import Report from '../page/correct-manage/report/Report'
// import SendMessage from '../page/correct-manage/send-message/SendMessage'
// import DetainPeople from '../page/correct-manage/archives/detain-people/DetainPeople'
// import ConnectPeople from '../page/correct-manage/archives/connect-people/ConnectPeople'
// import DetachedPeople from '../page/correct-manage/archives/detached-people/DetachedPeople'
// import TransferedPeople from '../page/correct-manage/archives/transfered-people/TransferedPeople'
// import ReleasePeople from '../page/correct-manage/archives/release-people/ReleasePeople'
// import LeaveInfo from '../page/correct-manage/archives/leave-info/LeaveInfo'
// import WarnInfo from '../page/correct-manage/archives/warn-info/warnInfo'
// import PersonInfo from '../page/correct-manage/archives/PersonInfo'
// import DataStatistics from '../page/data-statistics/DataStatistics'
// import LearnAdd from '../page/correct-manage/collective-learn/Learnadd'
// import ManageAdd from '../page/correct-manage/dossier-management/Manageadd'
// import GenerateAdd from '../page/correct-manage/generating-files/Generateadd'
// import LaborAdd from '../page/correct-manage/community-labor/Laboradd'
// import CorrectSurvey from '../page/waiting-correct/CorrectSurvey/CorrectSurvey'
// import Prison from '../page/waiting-correct/Prison/Prison'
// import Court from '../page/waiting-correct/Court/Court'
// import PrivateData from '../page/private/PrivateData'

class P2PMainView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navs: [{
                text: '数据统计',
                value: 'data-statistics'
            }, {
                text: '电子监管',
                value: 'elec-regulation',
                children: [{
                    text: '历史报警信息管理',
                    value: 'history-manage'
                }, {
                    text: '综合查询',
                    value: 'comprehensive-query'
                }, {
                    text: '配置管理',
                    value: 'config-manage',
                    children: [{
                        text: '信息采集设置',
                        value: 'collection-set'
                    }, {
                        text: '报警类型设置',
                        value: 'type-set'
                    }, {
                        text: '聚集报警排除',
                        value: 'except'
                    }, {
                        text: '电子监管设备',
                        value: 'device'
                    }]
                }]
            }, {
                text: '定位监控',
                value: 'location-monitor'
            }, {
                text: '矫正管理',
                value: 'correct-manage',
                children: [{
                    text: '在矫人员日常报到',
                    value: 'report'
                }, {
                    text: '服刑人员档案管理',
                    value: 'archives',

                    children: [{
                        text: '在矫人员',
                        value: 'detain-people'
                    }, {
                        text: '衔接人员',
                        value: 'connect-people'
                    }, {
                        text: '脱管人员',
                        value: 'detached-people'
                    }, {
                        text: '已转出人员',
                        value: 'transfer-people'
                    }, {
                        text: '解矫人员',
                        value: 'release-people'
                    }, {
                        text: '请假信息',
                        value: 'leave-info'
                    }, {
                        text:'警告信息',
                        value:'warn-info'
                    }
                    ]

                }, {
                    text: '信息发送',
                    value: 'sendMessage'
                }, {
                    text: '集体学习',
                    value: 'learn'
                }, {
                    text: '社区劳动',
                    value: 'labor'
                }, {
                    text: '电子签章',
                    value: 'seal',
                    children : [{
                        text : '生成卷宗',
                        value : 'generating-files'
                    },{
                        text : '卷宗管理',
                        value : 'dossier-management'
                    }]
                }]
            }, {
                text: '待矫人员',
                value: 'waiting-correct',
                children: [{
                    text: '社区矫正调查评估',
                    value: 'correct-survey'
                },{
                    text: '监狱',
                    value: 'prison'
                }, {
                    text: '法院',
                    value: 'court'
                }]
            },{
                text: '私密数据',
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
                <Route path='/' exact render={(props) => {
                    return (<Redirect to={{
                        pathname: '/data-statistics',
                        state: { from: props.location }
                    }} />)
                }} />
                <Route path='/data-statistics' render={() => {
                    return <DataStatistics />
                }} />
                <Route path='/elec-regulation/history-manage' exact render={(props) => {
                    return <div>
                        <HistoryAlarm />
                    </div>
                }} />
                <Route path='/elec-regulation/comprehensive-query' render={() => {
                    return <ComprehensiveQuery />
                }} />
                <Route path='/elec-regulation/config-manage/collection-set' render={() => {
                    return <CollectionSet />
                }} />
                <Route path='/elec-regulation/config-manage/type-set' render={() => {
                    return <TypeSet />
                }} />
                <Route path='/elec-regulation/config-manage/except' exact render={(props) => {
                    return <ClusterExcept />
                }} />
                <Route path='/elec-regulation/config-manage/device' render={() => {
                    return <Device />
                }} />
                <Route path='/location-monitor' render={() => {
                    return <LocationMonitor />
                }} />
                <Route path='/correct-manage/report' render={() => {
                    return <Report />
                }} />
                <Route path='/correct-manage/archives/detain-people' render={() => {
                    return <DetainPeople />
                }} />
                <Route path='/correct-manage/archives/connect-people' render={() => {
                    return <ConnectPeople />
                }} />
                <Route path='/correct-manage/archives/detached-people' render={() => {
                    return <DetachedPeople />
                }} />
                <Route path='/correct-manage/archives/transfer-people' render={() => {
                    return <TransferedPeople />
                }} />
                <Route path='/correct-manage/archives/release-people' render={() => {
                    return <ReleasePeople />
                }} />
                <Route path='/correct-manage/archives/leave-info' render={() => {
                    return <LeaveInfo />
                }} />
                <Route path='/correct-manage/archives/warn-info' render={() => {
                    return <WarnInfo />
                }} />
                <Route path='/correct-manage/archives/person-info' render={() => {
                    return <PersonInfo />
                }} />
                <Route path='/correct-manage/sendMessage' render={() => {
                    return <SendMessage />
                }} />
                <Route path='/correct-manage/learn' render={() => {
                    return <LearnAdd />
                }} />
                <Route path='/correct-manage/labor' render={() => {
                    return <LaborAdd />
                }} />
                <Route path='/correct-manage/seal/generating-files' render={() => {
                    return <GenerateAdd />
                }} />
                <Route path='/correct-manage/seal/dossier-management' render={() => {
                    return <ManageAdd />
                }} />
                <Route path='/waiting-correct' render={() => {
                    return <div></div>
                }} />
                <Route path='/waiting-correct/correct-survey' render={() => {
                    return <CorrectSurvey />
                }} />
                <Route path='/waiting-correct/prison' render={() => {
                    return <Prison />
                }} />
                <Route path='/waiting-correct/court' render={() => {
                    return <Court />
                }} />
                <Route path='/private-data' render={() => {
                    return <PrivateData />
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
                        1111111111111
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
