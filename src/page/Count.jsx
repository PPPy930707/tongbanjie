
import React from 'react'
import ReactDOM from 'react-dom'
// import { matchPath, withRouter } from 'react-router'
import { Card } from 'antd'
import Echart from '../components/Echart'

const Point = (props) => {
  return <a
    style={{
      display: 'inline-block',
      border: '3px solid #000',
      borderRadius: '5px',
      borderColor:props.color,
      marginRight:'5px'
    }}></a>
}

class Count extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const echartData = [{
      value: 2154,
      name: '曲阜师范大学'
    }, {
      value: 3854,
      name: '潍坊学院'
    }, {
      value: 3515,
      name: '青岛职业技术学院'
    }, {
      value: 3515,
      name: '淄博师范高等专科'
    }, {
      value: 3854,
      name: '鲁东大学'
    }, {
      value: 2154,
      name: '山东师范大学'
    }]
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: {
        text: '各业态平台\n' + this.props.data.dataName,
        left: 'center',
        top: 'center',
        padding: [24, 0],
        textStyle: {
          color: '#fff',
          fontSize: 10,
          fontFamily: 'PingFangHK-Regular',
          align: 'center'
        }
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '70%'],
          hoverAnimation: false,
          color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
          label: {
            normal: {
              show: false,
              position: 'center'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: echartData
        }
      ]
    }
    return (
      <Card
        bordered={false}
        noHovering
        className='homepage-count'
      >
        <div style={{ float: 'left' }}>
          <p className='homepage-count-title'>{this.props.data.title}</p>
          <p className='homepage-count-data'>
            <span>4856</span>
            <span>({this.props.data.unit})</span>
          </p>
          <p>
            <span style={{marginRight:'30px'}}> <Point color='#409CE0'/> P2P</span>
            <span> <Point color='#01FFFF'/>ICO</span>
          </p>
          <p>
            <span style={{marginRight:'8px'}}> <Point color='#6699FF'/>股权众筹</span>
            <span> <Point color='#F9BF00'/>现金贷</span>
          </p>
        </div>
        <div className='homepage-count-pie'>
          <Echart option={option} />
        </div>
      </Card>
    )

  }
}
export default Count