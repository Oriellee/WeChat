const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
Page({

  data: {
    product: {},
  },
  getProduct(id) {
    wx.showLoading({
      title: '商品信息加载中。',
    })
    qcloud.request({
      url: config.service.productDetail + id,
      success: result => {
        wx.hideLoading(result)
        console.log()
        if (!result.data.code) {
          this.setData({
            product: result.data.data
          })
        } else {
          wx.showToast({
            title: '商品信息加载失败。',
          })
          setTimeout(() => {
            wx.navigateBack()
          }, 2000)
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
  onLoad: function (options) {
    this.getProduct(options.id);
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})