
import React from 'react'
import ReactDOM from 'react-dom'
// import { matchPath, withRouter } from 'react-router'
import { Card } from 'antd'
import Echart from '../components/Echart'
import ChinaMap from '../components/ChinaMap'

class HomeMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card
        bordered={false}
        noHovering
        className='homepage-map'
      >
       <p>平台分布概况</p>
        <ChinaMap/>
      </Card>
    )

  }
}
export default HomeMap