import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import echarts from 'echarts'
import $ from '../config/jquery-vendor'
import china from '../../node_modules/echarts/map/json/china.json'
// import yunnan from './geoJson/yunnan.json'

// const json={
//     yunnan
// }
export default class Echart extends React.Component {
  constructor(props) {
    super(props)
    this.chartInstance = null
    this.chartContainer = null
  }

  componentDidMount() {
    let parentNode = $(this.chartContainer.parentNode),
      curNode = $(this.chartContainer)
    if (this.props.map) {
      echarts.registerMap('china', china);
    }
    curNode.width(parentNode.width())
    curNode.height(parentNode.height())
    this.chartInstance = echarts.init(this.chartContainer)
    this.chartInstance.setOption(this.props.option)
  }

  componentDidUpdate() {
    if (this.props.map) {
      echarts.registerMap('china', china);
    }
    if (!this.chartInstance) {
      this.chartInstance = echarts.init(this.chartContainer)
      this.chartInstance.setOption(this.props.option)
    } else {
      this.chartInstance.setOption(this.props.option)
    }
  }
  mapClick() {
    this.chartInstance.on('click', (param) => {
      if (typeof param.data.value == 'number') {
        this.props.clickMap(param.data)
      }
    })
  }

  render() {
    return (
      <div ref={(div) => { this.chartContainer = div }} style={{ position: 'relative', textAlign: 'left' }}>
      </div>)
  }
}
