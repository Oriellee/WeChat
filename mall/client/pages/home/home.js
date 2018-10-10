// pages/home/home.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
Page({
  data: {
    productList: [], // 商品列表
  },
  getProductList() {
    wx.showLoading({
      title: '商品信息加载中。',
    })
    qcloud.request({
      url: config.service.productList,
      success: result => {
        wx.hideLoading()
        if (!result.data.code) {
          this.setData({
            productList: result.data.data
          })
        } else {
          wx.showToast({
            title: '商品信息加载失败。',
          })
        }

      },
      fail: result => {
        wx.hideLoading()
        wx.showToast({
          title: '商品信息加载失败。',
        })
      }
    })
  },
  onLoad: function(options) {
    this.getProductList();
  },

})