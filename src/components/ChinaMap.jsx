
import React from 'react'
import Echart from '../components/Echart'
import china from '../../node_modules/echarts/map/json/china.json'
class ChinaMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        const option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    data: [
                        { name: '北京', value: Math.round(Math.random() * 1000) },
                        { name: '天津', value: Math.round(Math.random() * 1000) },
                        { name: '上海', value: Math.round(Math.random() * 1000) },
                        { name: '重庆', value: Math.round(Math.random() * 1000) },
                        { name: '河北', value: Math.round(Math.random() * 1000) },
                        { name: '河南', value: Math.round(Math.random() * 1000) },
                        { name: '云南', value: Math.round(Math.random() * 1000) },
                        { name: '辽宁', value: Math.round(Math.random() * 1000) },
                        { name: '黑龙江', value: Math.round(Math.random() * 1000) },
                        { name: '湖南', value: Math.round(Math.random() * 1000) },
                        { name: '安徽', value: Math.round(Math.random() * 1000) },
                        { name: '山东', value: Math.round(Math.random() * 1000) },
                        { name: '新疆', value: Math.round(Math.random() * 1000) },
                        { name: '江苏', value: Math.round(Math.random() * 1000) },
                        { name: '浙江', value: Math.round(Math.random() * 1000) },
                        { name: '江西', value: Math.round(Math.random() * 1000) },
                        { name: '湖北', value: Math.round(Math.random() * 1000) },
                        { name: '广西', value: Math.round(Math.random() * 1000) },
                        { name: '甘肃', value: Math.round(Math.random() * 1000) },
                        { name: '山西', value: Math.round(Math.random() * 1000) },
                        { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                        { name: '陕西', value: Math.round(Math.random() * 1000) },
                        { name: '吉林', value: Math.round(Math.random() * 1000) },
                        { name: '福建', value: Math.round(Math.random() * 1000) },
                        { name: '贵州', value: Math.round(Math.random() * 1000) },
                        { name: '广东', value: Math.round(Math.random() * 1000) },
                        { name: '青海', value: Math.round(Math.random() * 1000) },
                        { name: '西藏', value: Math.round(Math.random() * 1000) },
                        { name: '四川', value: Math.round(Math.random() * 1000) },
                        { name: '宁夏', value: Math.round(Math.random() * 1000) },
                        { name: '海南', value: Math.round(Math.random() * 1000) },
                        { name: '台湾', value: Math.round(Math.random() * 1000) },
                        { name: '香港', value: Math.round(Math.random() * 1000) },
                        { name: '澳门', value: Math.round(Math.random() * 1000) }
                    ]
                }
            ]
        }
        return (
            <div style={{ height: '500px', width: '500px', margin: '0 auto' }}>
                <Echart option={option} map/>
            </div>
        )
    }
}

export default ChinaMap