import React from 'react'
import ReactDOM from 'react-dom'
// import { matchPath, withRouter } from 'react-router'
import { Col, Row } from 'antd'
import Count from './Count'
import Distribute from './Distribute'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <Row>
                            <Col span={12}><Count /></Col>
                            <Col span={12}><Count /></Col>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Col span={12}><Distribute/></Col>
                        <Col span={12}><Distribute/></Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home