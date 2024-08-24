import { request } from "../utils"
//1.登录请求
export function getChannelAPI() {
    return request({
        url: '/channels',
        method: 'GET'
    })
}

//2.提交文章表单
export function createArticleAPI(data: any) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}