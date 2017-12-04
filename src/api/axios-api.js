import ajax from '../utils/ajax'

let basePreUrl = is_production ? '/harm' : '/dev_harm'

export default {
    home : {//首页接口API
        /**
         * 返回地图基础数据
         */
        getBaseMap : (params,sucFn,errFn)=>{
            ajax.call(this,'get', '/baseMap', params, sucFn,errFn)
        }
    },
    goodsAnalysis : {//商品分析
        //商品输入模糊匹配
        searchResult : (params,sucFn,errFn)=>{
            ajax.call(this,'get', '/code/goods/', params, sucFn,errFn)
        },

        //返回同比环比数据
        getRateRatio: (params,sucFn,errFn)=>{
            ajax.call(this,'post', '/price/rateOrRatio', params, sucFn,errFn)
        },
        //返回地域价格比较分析
        getAreaPrice:(params,sucFn,errFn)=>{
            ajax.call(this,'post', 'price/priceOfArea', params, sucFn,errFn)
        },

        //返回商品供求分析
        getSD:(params,sucFn,errFn)=>{
            ajax.call(this,'post', '/supplyDemand/supplyDemand', params , sucFn,errFn)
        },

         //返回商品交易额交易量分析
        getTransactionVolume:(params,sucFn,errFn)=>{
            ajax.call(this,'post', '/goods/sellerArea',params , sucFn,errFn)
        },

         //返回Pc、移动占比
        getPcMove:(params,sucFn,errFn)=>{
            ajax.call(this,'post', '/goods/clientRate', params, sucFn,errFn)
        },

         //返回电商平台交易额排名
        getSellerRank:(params,sucFn,errFn)=>{
            ajax.call(this,'post', '/goods/platform', params, sucFn,errFn)
        }
    },
    sellerAnalysis : {//商家分析
        //商家类型占比分析--企业,个人,toc,tob
        getSellerType:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/seller/sellerType',params,sucFn,errFn)
        },
        //商家地域分布
        getSellerArea:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/seller/seller',params,sucFn,errFn)
        },
        //商家电商平台分布
        getPlatformSeller:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/seller/platform',params,sucFn,errFn)
        }
    },
    areaSeller : {//地域电商画像
        //地域热卖商品排名
        getWellSellGoodsRank:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/area/goodsRank',params,sucFn,errFn)
        },
        //地域优质商家分布
        getWellSellerRank:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/area/sellerRank',params,sucFn,errFn)
        },
        //地域历年交易额变化
        getAreaTradingAmount:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/area/rateOfTime',params,sucFn,errFn)
        },
        //地域交易额占比
        getAreaTradingRate:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/area/rateOfArea',params,sucFn,errFn)
        },
        //地域销往地排名
        getBuyerRank:(params,sucFn,errFn)=>{
            ajax.call(this,'post','/area/buyerAreaRank',params,sucFn,errFn)
        },
    },
    util:{
        /*
         * 返回省市级连数据
         */
        getCodeArea:(sucFn,errFn)=>{
            ajax.call(this,'get','/code/area',null,sucFn,errFn)
        }
    }
}



