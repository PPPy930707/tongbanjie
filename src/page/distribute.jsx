/**
 * 右侧平台分布组件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Row, Card } from 'antd'
import Echart from '../components/Echart'

class Distribute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const echartData = [
      {
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
    const pieOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: {
        text: '各业态平台\n数量分布',
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
    var data = [53, 85, 60, 45, 53];
    var xMax = 100;
    var axisColor = '#fff';
    const barOption = {
      tooltip: {
        show: true,
        formatter: '{b} <br> {c}件'

      },
      grid: {
        containLabel: true
      },
      xAxis: [{
        axisTick: {
          show: false,
          // color:'#fff',
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false
          //color:'#fff',
        },
        splitLine: {
          show: false,
          // color:'#fff',
        }
      }],
      yAxis: [{
        type: 'category',
        data: ['其他来源', '质检电话', '12345', '12315', '12301',],

        axisTick: {
          // color:'#fff',
          show: false,
        },
        axisLine: {
          //  color:'#fff',
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
          }
        }

      }],
      series: [
        {
          name: ' ',
          type: 'bar',
          barWidth: 6,
          silent: true,
          itemStyle: {
            normal: {
              color: '#0E479D',
              barBorderRadius: [0, 5, 5, 0],
            }
          },
          barGap: '-100%',
          data: data.map(function (d) {
            return xMax
          }),
        }, {
          name: ' ',
          type: 'bar',
          barWidth: 6,
          label: {
            normal: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              color: {
                type: 'bar',
                colorStops: [{
                  offset: 0,
                  color: '#0067FF' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#00FFFF' // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              }
            }
          },
          data: [{
            value: 53,
          }, {
            value: 53,
          }, {
            value: 53,
          }, {
            value: 53,
          }, {
            value: 53,
          }],
        }]
    }
    return (
      <Card
        bordered={false}
        noHovering
        className='homepage-distribute'
      >
        <p className='homepage-distribute-title'>用户数量分布 </p>
        <div className='homepage-distribute-pie'>
          <Echart option={pieOption} />
        </div>
        <div className='homepage-distribute-center'>
          <p>用户总量</p>
          <p>
            <span>2341</span>
            <span>(人)</span>
          </p>
        </div>
        <p className='homepage-distribute-title'>平台用户量排名</p>
        <div className='homepage-distribute-bar'>
          <Echart option={barOption} />
        </div>
      </Card>
    )
  }
}
export default Distribute
