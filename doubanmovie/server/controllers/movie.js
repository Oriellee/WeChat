const DB = require('../utils/db');
module.exports = {
  // 首页电影列表。
  movieList: async ctx => {
    let list = await DB.query('SELECT DISTINCT * FROM movie_details a WHERE	20 >= (	SELECT count( * ) FROM ( SELECT DISTINCT * FROM movie_details ) b WHERE	a.type = b.type AND a.releaseTime <= b.releaseTime 	) ORDER BY	a.type,	a.releaseTime DESC')
    let listMap = {}
    let data = []
    if (list.length) {
      for (let i = 0; i < list.length; i++) {
        if (listMap[list[i]['type']]) {
          listMap[list[i]['type']].push(list[i])
        } else {
          listMap[list[i]['type']] = [list[i]]

        }
      }
    }
    for (let key in listMap) {
      if (listMap[key].length >= 4) {
        data.push({
          'type': key,
          'list': listMap[key]
        })
      }
    }
    ctx.state.data = data
  },
  // 详情页电影列表。
  typeList: async ctx => {
    let data = ctx.request.body.queryData || {}
    let list
    let type = data.type
    let pageIndex = data.pageIndex
    if (type) {
      list = await DB.query('select DISTINCT * from movie_details where type = ? ORDER BY releaseTime DESC limit 0,?', [type, pageIndex])
    } else {
      list = []
    }
    ctx.state.data = {
      'type': type,
      'list': list
    }
  },
};