import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import { Table, Input, Popconfirm, Button, Pagination, Row, Col, DatePicker, Select, Spin } from 'antd';

class P2pPlatform extends Component {
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
                <div className='vin-search'>
                    <Row>
                        <Col span={1}> <span className='label-box dark-blue'>案件名称：</span></Col>
                        <Col span={4}>
                            <Input className='input-box input' placeholder='请输入案件名称' />
                        </Col>
                        <Col span={1}><span className='label-box dark-blue'>案发时间：</span></Col>
                        <Col span={4}>
                            <DatePicker className='input-box input' onChange={e => this.searchChangeHandel(e, 'date')} />
                        </Col>

                        <Col span={4}>
                            <Button className='searchBtn' type='primary' onClick={() => this.search()}>开始检索</Button>
                        </Col>
                    </Row>
                </div>

                {/* <SearchTips num={this.state.data.length} /> */}

                <div className='vin-table'>
                    1212
                    {/* <Table
                        rowKey={(record, index) => {
                            if (this.data) {
                                return record[this.data]
                            } else {
                                return index
                            }
                        }}
                        columns={columns} dataSource={data} pagination={{
                            showQuickJumper: true,
                            // defaultCurrent: this.state.currentPage,
                            current: this.state.currentPage,
                            onChange: this.pageChange
                        }}
                        bordered /> */}
                </div>
            </div>
        )
    }
}

export default P2pPlatform