/**
 * 首页
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Spin, Layout, Menu, Icon } from 'antd'
import Home from '../page/Home'
import P2pOperation from '../page/p2p/industry-situation/P2pOperation'
import P2pContract from '../page/p2p/contract-situation/P2pContract'
import P2pBorrowe from '../page/p2p/borrower-situation/P2pBorrowe'
import P2pLender from '../page/p2p/lender-situation/P2pLender'
import P2pPlatform from '../page/p2p/platform-query/P2pPlatform'
import P2pOnekey from '../page/p2p/onekey-query/P2pOnekey'
import P2pMainView from '../page/p2p/P2pMainView'
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        let link = '/', keyPath = e.keyPath.reverse()//reverse是颠倒数组顺序的
        link += keyPath.join('/')
        this.props.history.push(link)
    }
    componentDidMount(){
        const thiz=this
        $('.menuContent-right ul li').click(function(){
            let secUrl = $(this).attr('data');
            let firstUrl = $(this).parent().attr('data');
            let link = '/'+firstUrl+'/'+secUrl;
            thiz.props.history.push(link);
            $('.menuContentIco').css('left', '-680px');
            $('.menuContentP2p').css('left', '-680px');
        })
        $('.menu ul li').click(function(){
            let url = $(this).attr('data');
            let link = '/'+url;
            thiz.props.history.push(link);
            $('.menuContentIco').css('left', '-680px');
            $('.menuContentP2p').css('left', '-680px');
        })
    }
    mouseInIco = () => {
        $('.menuContentIco').css('left', '80px');
        $('.menuContentP2p').css('left', '-680px');
    }
    mouseInP2p = () => {
        $('.menuContentP2p').css('left', '80px');
        $('.menuContentIco').css('left', '-680px');
    }
    mouseBody = () => {
        $('.menuContentIco').css('left', '-680px');
        $('.menuContentP2p').css('left', '-680px');
    }
    renderContent() {
        return (
            <div style={{ width: '100%', height: '100%', padding: '10px' }}>
                <Route path='/' exact render={() => {
                    return <Home />
                }} />
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
                <Route path='/p2p/platform-query' render={() => {
                    return <P2pPlatform />
                }} />
                <Route path='/p2p/onekey-query' render={() => {
                    return <P2pOnekey />
                }} />
                <Route path='/p2phome' render={() => {
                    return <P2pMainView />
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
                        <div className='menu'>
                            <ul>
                                <li onMouseEnter={this.mouseInIco}><span className='menu-logo'><img src="../src/assets/images/icon_ico_off.svg" style={{ width: '50px' }} /></span><p>ICO</p></li>
                                <li onMouseEnter={this.mouseInP2p} data='p2phome'><span className='menu-logo'><img src="../src/assets/images/icon_p2p_off.svg" style={{ width: '50px' }} /></span><p>P2P</p></li>
                                <li><span className='menu-logo'><img src="../src/assets/images/icon_cash_off.svg" style={{ width: '50px' }} /></span><p>现金贷</p></li>
                                <li><span className='menu-logo'><img src="../src/assets/images/icon_stock_off.svg" style={{ width: '50px' }} /></span><p>股权众筹</p></li>
                                <li><span className='menu-logo'><img src="../src/assets/images/icon_sham_off.svg" style={{ width: '50px' }} /></span><p>虚假违规</p></li>
                                <li><span className='menu-logo'><img src="../src/assets/images/icon_deal_off.svg" style={{ width: '50px' }} /></span><p>非法外汇交易</p></li>
                            </ul>
                        </div>

                        {/* ICO */}
                        <div className='menuContent menuContentIco'>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>行业态势</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li>运营情况</li>
                                        <li>合同情况</li>
                                        <li>借款人情况</li>
                                        <li>出借人情况</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>违规平台监测</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>查询中心</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>统计报表</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* P2P */}
                        <div className='menuContent menuContentP2p'>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>行业态势</div>
                                <div className='menuContent-right'>
                                    <ul data='p2p'>
                                        <li data='industry-situation'>运营情况</li>
                                        <li data='contract-situation'>合同情况</li>
                                        <li data='borrower-situation'>借款人情况</li>
                                        <li data='lender-situation'>出借人情况</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>违规平台监测</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>问题平台分析</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>风险分析</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>查询中心</div>
                                <div className='menuContent-right'>
                                    <ul data='p2p'>
                                        <li data='platform-query'>平台查询</li>
                                        <li data='onekey-query'>一键查询</li>
                                        {/* <li></li>
                                        <li></li>
                                        <li></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className='menuList-box'>
                                <div className='menuContent-left'>统计报表</div>
                                <div className='menuContent-right'>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Content className="layout-content" onMouseEnter={this.mouseBody}>
                            {this.renderContent()}
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(HomePage)
