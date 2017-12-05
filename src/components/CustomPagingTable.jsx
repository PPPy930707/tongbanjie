import React from 'react'
import { Table, Input, Popconfirm, Card, Button, Pagination } from 'antd'

export default class CustomPagingTable extends React.Component {
    constructor(props) {
        super(props)
        this.showTotal = this.showTotal.bind(this)
    }

    /**
     * 展示表格的显示情况
     * @param total
     * @param range
     * @returns {string}
     */
    showTotal(total, range){
        return `显示${range[0]}-${range[1]}条记录，共${total}条记录`
    }

    render() {
        return (
            <div>
                <Table dataSource={this.props.dataSource}
                    rowKey={(record, index) => {
                        if(this.props.primaryKey){
                            return record[this.props.primaryKey]
                        }else{
                            return index
                        }
                    }}
                    defaultCurrent={1}
                    scroll={{ x:this.props.xScroll?this.props.xScroll:0,y: this.props.yScroll?this.props.yScroll:'100%' }}
                    className={this.props.customCls}
                    columns={this.props.columns}
                    pagination={this.props.pageVisible ? {
                        onShowSizeChange : this.props.onShowSizeChange,
                        style : { float: 'right', marginTop: '30px' },
                        total : this.props.total || 0,
                        showTotal : this.showTotal,
                        onChange : this.props.onChange,
                        showQuickJumper : true,
                        showSizeChanger : true,
                        defaultCurrent : 1
                    } : false}
                    rowSelection={this.props.rowSelection||null}
                    onRowClick={this.props.onRowClick?this.props.onRowClick:()=>{}}>
                </Table>
            </div>
        )
    }
}
