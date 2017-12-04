import axios from '../config/axios-config'
/**
 * websocket 建立长连接方法提取
 * @type {null}
 */
let stompClient = null,
    baseUrl = axios.defaults.baseURL

export default {
    /**
     * websocket建立长连接
     */
    connect : (sucFn)=>{
        if ('WebSocket' in window){
            let socket = new SockJS(baseUrl + '/websocket')
            stompClient = Stomp.over(socket)
            stompClient.connect({}, (frame) => {
                console.log('Connected  ' + frame)
                stompClient.subscribe('/client/getResponse',(response) => {
                    sucFn && sucFn(eval('(' +response.body  + ')').data)
                })
            })
            return stompClient
        }else {
            console.log('您的浏览器不支持WebSocket！')
        }
    },

    /**
     * 断开websocket连接
     */
    disconnect : ()=>{
        if (stompClient != null) {
            stompClient.disconnect();
        }
        console.log('Websocket Disconnected')
    }
}