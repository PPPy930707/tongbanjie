import React from 'react'
import ReactDOM from 'react-dom'
// import { matchPath, withRouter } from 'react-router'
import { Col, Row } from 'antd'
import Count from './Count'
import Distribute from './Distribute'
import HomeMap from './HomeMap'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const countLeftData = {
            title: '互金平台总数量',
            dataName: '数量分布',
            unit: '家'
        }
        const countRightData = {
            title: '平台交易金额',
            dataName: '交易量分布',
            unit: '亿'
        }
        const disLeftData = {
            titleFirst: '用户数量分布',
            titleSecond: '总用户量',
            titleThird: '平台用户量排名',
            dataName: '用户量分布',
            unit: '人'
        }
        const disRightData = {
            titleFirst: '资金总量分布',
            titleSecond: '资金总量',
            titleThird: '平台资金总量排名',
            dataName: '资金量分布',
            unit: '亿'
        }
        return (
            <div>
                <Row>
                    <Col span={15}>
                        <Row>
                            <Col span={12}>
                                <Count
                                    data={countLeftData}
                                /></Col>
                            <Col span={12}>
                                <Count data={countRightData} />
                            </Col>
                        </Row>
                        <Row>
                            <HomeMap />
                        </Row>
                    </Col>
                    <Col span={9}>
                        <Col span={12}>
                            <Distribute
                                data={disLeftData}
                            />
                        </Col>
                        <Col span={12}>
                            <Distribute
                                data={disRightData}
                            />
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home