const dayMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
Page({
  data:{
    weekWeather:[],
    city:"北京市"
  },
  onLoad(options) {
    this.setData({
      city:options.city
    })
    this.getweekWeather()
  },
  onPullDownRefresh() {
    this.getweekWeather(() =>{
      wx.stopPullDownRefresh()
    })
  },
  getweekWeather(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/future',
      data: {
        city: this.data.city,
        time:new Date().getTime()
      },
      success: res => {
        let result = res.data.result;
        this.setweekWeather(result);
      },
      complete:() =>{
        callback && callback()
      }
    })
  },
  setweekWeather(result){
    let weekWeather = [];
     for (let i=0; i<7; i++){
      let date = new Date()
      date.setDate(date.getDate() + i)
      weekWeather.push({
        day: dayMap[date.getDay()],
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        temp: `${result[i].minTemp}° - ${result[i].maxTemp}°`,
        iconPath: '/images/' + result[i].weather + '-icon.png'
      })
    }
    weekWeather[0].day = "今天"
    this.setData({
      weekWeather: weekWeather
    })
  }
})