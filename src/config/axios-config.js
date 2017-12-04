import axios from 'axios'

// axios.defaults.baseURL = 'http://ps.bonc.com.cn:9091';
axios.defaults.baseURL = 'http://112.35.1.18:8081/api/dev_business';
//axios.defaults.baseURL = 'http://112.35.1.18:8091';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['Accept'] = 'application/json';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    console.log('interceptors request error');
    return Promise.reject(error);
});

//请求响应拦截
function responseFilter(response){
    //如果是注册网关，无论成功或失败，不做任何处理
    if(response.request.responseURL.indexOf('registerGateway2Cas') > -1 && (typeof response.data == 'object') && response.data['loginUrl']){
        axios.get(response.data['loginUrl'])
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
        return response;
    }else{
        //没有登录或登录超时  success:标记session是否失效
        if((typeof response.data == 'object') && response.data['loginUrl'] && response.data['loginUrl'] != '' && !response.data.success){
            window.top.location.href = response.data['loginUrl'];
        }else{
            // 对响应数据做点什么
            return response;
        }
    }
}

// 添加响应拦截器
axios.interceptors.response.use( (response) =>{
    console.log('request response success!');
    //如果是开发模式
    if(!is_production){
        return response;
    }else{
        return responseFilter(response);
    }
}, function (error) {
    console.log('request response failure!');
    return Promise.reject(error);
});

export default axios
