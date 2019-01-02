const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function list_fun() {
  var list = {
    "data": [{
      "title": "近期上映",
      "url": "near",
      "index_list": [{
        "img": "img/选中.png",
        "name": "西虹市首富",
        "fraction": "3.5"
      }, {
        "img": "img/选中.png",
        "name": "李保国",
        "fraction": "3.5"
      }, {
        "img": "img/选中.png",
        "name": "小偷家族",
        "fraction": "4.5"
      }, {
        "img": "img/选中.png",
        "name": "狄仁杰",
        "fraction": "3.0"
      }, {
        "img": "img/选中.png",
        "name": "风语咒",
        "fraction": "4.0"
      }, {
        "img": "img/选中.png",
        "name": "小偷家族",
        "fraction": "4.5"
      }, {
        "img": "img/选中.png",
        "name": "狄仁杰",
        "fraction": "3.0"
      }, {
        "img": "img/选中.png",
        "name": "风语咒",
        "fraction": "4.0"
      }, {
        "img": "img/选中.png",
        "name": "小偷家族",
        "fraction": "4.5"
      }, {
        "img": "img/选中.png",
        "name": "狄仁杰",
        "fraction": "3.0"
      }, {
        "img": "img/选中.png",
        "name": "风语咒",
        "fraction": "4.0"
      }, {
        "img": "img/选中.png",
        "name": "小偷家族",
        "fraction": "4.5"
      }, {
        "img": "img/选中.png",
        "name": "狄仁杰",
        "fraction": "3.0"
      }, {
        "img": "img/选中.png",
        "name": "风语咒",
        "fraction": "4.0"
      }, {
        "img": "img/选中.png",
        "name": "小偷家族",
        "fraction": "4.5"
      }, {
        "img": "img/选中.png",
        "name": "狄仁杰",
        "fraction": "3.0"
      }, {
        "img": "img/选中.png",
        "name": "风语咒",
        "fraction": "4.0"
      }],
      "all_list": [{
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        }
      ]
    }, {
      "title": "热门电影",
      "url": "near",
      "index_list": [{
          "img": "img/选中.png",
          "name": "三块广告牌",
          "fraction": "4.5"
        },
        {
          "img": "img/选中.png",
          "name": "侏罗纪世界2",
          "fraction": "3"
        },
        {
          "img": "img/选中.png",
          "name": "燃烧",
          "fraction": "4"
        },
        {
          "img": "img/选中.png",
          "name": "复仇者联盟3",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "死侍2",
          "fraction": "3.5"
        }
      ],
      "all_list": [{
          "img": "img/选中.png",
          "name": "三块广告牌",
          "fraction": "4.5"
        },
        {
          "img": "img/选中.png",
          "name": "侏罗纪世界2",
          "fraction": "3"
        },
        {
          "img": "img/选中.png",
          "name": "燃烧",
          "fraction": "4"
        },
        {
          "img": "img/选中.png",
          "name": "复仇者联盟3",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "死侍2",
          "fraction": "3.5"
        }
      ]
    }, {
      "title": "电视剧",
      "url": "near",
      "index_list": [{
          "img": "img/选中.png",
          "name": "明日之子",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "沙海",
          "fraction": "3"
        },
        {
          "img": "img/选中.png",
          "name": "时间",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "延禧攻略",
          "fraction": "4"
        },
        {
          "img": "img/选中.png",
          "name": "梅尔罗斯",
          "fraction": "4.5"
        }
      ],
      "all_list": [{
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        }
      ]
    }, {
      "title": "综艺",
      "url": "near",
      "index_list": [{
          "img": "img/选中.png",
          "name": "向往的生活2",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "幻乐之城",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "博物馆奇妙夜",
          "fraction": "4.5"
        },
        {
          "img": "img/选中.png",
          "name": "中餐厅2",
          "fraction": "3.5"
        },
        {
          "img": "img/选中.png",
          "name": "国家宝藏",
          "fraction": "5"
        }
      ],
      "all_list": [{
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        },
        {
          "img": "img/选中.png",
          "name": "西虹市首富",
          "fraction": "6"
        }
      ]
    }]
  }
  return list
}

module.exports = {
  formatTime: formatTime,
  list_fun: list_fun
}