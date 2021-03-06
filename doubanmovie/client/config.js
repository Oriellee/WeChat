/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://rfdxvcz1.qcloud.la';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,

    // 测试的信道服务地址
    tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,

    // 首页—获取电影列表
    movieList: `${host}/weapp/movieList`,

    // 详情页-获取不同类型电影列表
    typeList: `${host}/weapp/typeList`,

    // 书影音页-列表
    billboardList: `${host}/weapp/billboardList`,

    // 书影音页-类型列表
    billboardTypeList: `${host}/weapp/billboardTypeList`,

    // 搜索
    search: `${host}/weapp/search/`,

    // 详情页
    detail: `${host}/weapp/detail/`,
  }
};

module.exports = config;